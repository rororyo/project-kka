'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import levels from './utils/levels';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastError from './utils/toast';
import toastWin from './utils/win';

export default function Home() {
  const [board, setBoard] = useState(levels[0].board);
  const [level, setLevel] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lastStep, setLastStep] = useState([]);

  const isNeighbor = (indexRow, indexCol, baris, type) => {
    return (
      (indexCol - 1 >= 0 && baris[indexCol - 1] == type) ||
      (indexCol + 1 < baris.length && baris[indexCol + 1] == type) ||
      (board[indexRow - 1] && board[indexRow - 1][indexCol] == type) ||
      (board[indexRow + 1] && board[indexRow + 1][indexCol] == type)
    );
  };

  const isWin = () => {
    const arr = [0, 0, 0];
    const visited = [...board.map((row) => [...row].fill(false))];
    const queue = [];
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] == 2 || board[i][j] == 3 || board[i][j] == 4) {
          if (!visited[i][j]) {
            queue.push([i, j]);
            visited[i][j] = true;
            arr[board[i][j] - 2]++;
          }
          while (queue.length > 0) {
            const [x, y] = queue.shift();
            for (let k = 0; k < 4; k++) {
              const nx = x + dx[k];
              const ny = y + dy[k];
              if (
                nx >= 0 &&
                nx < board.length &&
                ny >= 0 &&
                ny < board[0].length &&
                !visited[nx][ny] &&
                board[nx][ny] == board[i][j]
              ) {
                queue.push([nx, ny]);
                visited[nx][ny] = true;
              }
            }
          }
        }
      }
    }

    // change connected color to red
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
        const newBoard = [...board];
        for (let j = 0; j < newBoard.length; j++) {
          for (let k = 0; k < newBoard[j].length; k++) {
            if (newBoard[j][k] == i + 2) newBoard[j][k] = 1;
          }
        }
        setBoard(newBoard);
      }
    }

    // check if win
    if (!(arr[0] <= 1 && arr[1] <= 1 && arr[2] <= 1)) {
      return;
    }

    // restart board back to initial
    levels[level].board = [...levels[level].restart.map((row) => [...row])];

    // next level
    if (level == levels.length - 1) {
      toastWin();
      return;
    }

    setLevel((level + 1) % levels.length);
    setBoard(levels[(level + 1) % levels.length].board);
    setLastStep([]);
  };

  useEffect(() => {
    isWin();
  }, [lastStep]);

  const changeBoard = (indexRow, indexCol, type) => {
    const newBoard = [...board];
    newBoard[indexRow][indexCol] = type;
    setBoard(newBoard);
  };

  const handleDrag = (indexRow, indexCol, baris) => {
    if (isMouseDown) handleClick(indexRow, indexCol, baris);
  };

  const handleClick = (indexRow, indexCol, baris) => {
    setIsMouseDown(true);

    // handle red
    if (board[indexRow][indexCol] == 1) {
      if (!isMouseDown) toastError();
      return;
    }

    // handle white
    if (board[indexRow][indexCol] == 0) {
      // handle invalid click
      if (
        !isNeighbor(indexRow, indexCol, baris, 2) &&
        !isNeighbor(indexRow, indexCol, baris, 3) &&
        !isNeighbor(indexRow, indexCol, baris, 4)
      ) {
        if (!isMouseDown) toastError();
        return;
      }

      for (let type = 2; type <= 4; type++) {
        if (isNeighbor(indexRow, indexCol, baris, type)) {
          changeBoard(indexRow, indexCol, type);
          setLastStep([...lastStep, { indexRow, indexCol, type }]);
          return true;
        }
      }

      return;
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='flex flex-col items-center m-4 justify-center gap-4'>
        <div className='flex flex-col text-center'>
          <div>Level: {(level % levels.length) + 1}</div>
          <div>Banyak Langkah: {lastStep.length}</div>
        </div>
        <div className='relative inline-block text-left'>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-100'
            >
              Level: {(level % levels.length) + 1}
              <svg
                className='-mr-1 ml-2 h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M14.293 7.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 0z'
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div className='origin-top-right absolute right-0 mt-2 w-full cursor-pointer rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20'>
              <div
                className='py-1'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='options-menu'
              >
                {levels.map((item, index) => {
                  return (
                    <a
                      onClick={() => {
                        setLevel(index);
                        setBoard(levels[index].board);
                        setIsOpen(false);
                        setLastStep([]);
                      }}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                      key={index}
                    >
                      Level {index + 1}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className='flex'>
          {/* harusnya ini dinamic */}
          {/* <div className={`grid gap-1 grid-cols-${board[0].length}`}> */}
          <div className={`grid grid-cols-8`}>
            {board.map((baris, indexRow) => {
              return baris.map((item, indexCol) => {
                return (
                  <div
                    className={`w-8 h-8 cursor-pointer border-[1.25px] border-black
                ${item == 0 && 'bg-white'} 
                ${item == 1 && 'bg-red-500'} 
                ${item == 2 && 'bg-green-500'} 
                ${item == 3 && 'bg-blue-500'}
                ${item == 4 && 'bg-yellow-500'}
                ${
                  indexCol == lastStep[lastStep.length - 1]?.indexCol &&
                  indexRow == lastStep[lastStep.length - 1]?.indexRow &&
                  (item == 2 || item == 3 || item == 4) &&
                  'animate-pulse'
                }
                `}
                    key={indexCol}
                    onMouseDown={() => handleClick(indexRow, indexCol, baris)}
                    onMouseEnter={() => handleDrag(indexRow, indexCol, baris)}
                    onMouseUp={() => setIsMouseDown(false)}
                  >
                    {/* {item == 9 && <img src='/assets/toko.png'></img>} */}
                    {/* {item == 0 && <img src='/assets/distributor.png' className='h-full'></img>} */}
                  </div>
                );
              });
            })}
          </div>
        </div>
        <div className='flex flex-row'>
          Mouse is Down:{' '}
          <h4 className='font-bold text-red-400'>
            {' '}
            {isMouseDown == false ? 'No' : 'Yes'}
          </h4>
        </div>
        <div className='flex flex-row'>
          {/* restart button */}
          <button
            onClick={() => {
              setBoard([...levels[level].restart.map((row) => [...row])]);
              setLastStep([]);
            }}
            className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-100'
          >
            Restart
          </button>
        </div>
      </div>
    </>
  );
}
