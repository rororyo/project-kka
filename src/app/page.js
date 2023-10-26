'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import levels from './utils/levels';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastError from './utils/toast';

export default function Home() {
  const [board, setBoard] = useState(levels[0].board);
  const [activeBoard, setActiveBoard] = useState(levels[0].activeBoard);
  const [step, setStep] = useState([]);
  const [level, setLevel] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDrag = (indexRow, indexCol, baris) => {
    if (isMouseDown) handleClick(indexRow, indexCol, baris);
  };

  const handleClick = (indexRow, indexCol, baris) => {
    setIsMouseDown(true);

    // handle hijau
    if (board[indexRow][indexCol] == 9) {
      setLevel((prev) => prev + 1);
      setBoard(levels[(level + 1) % levels.length].board);
      setActiveBoard(levels[(level + 1) % levels.length].activeBoard);
      setStep([]);
      return;
    }

    // handle merah
    if (board[indexRow][indexCol] == 8) {
      if(!isMouseDown)toastError();
      return;
    }

    // handle biru
    if (board[indexRow][indexCol] == 0) {
      if (
        step.length > 0 &&
        step[step.length - 1][0] == indexRow &&
        step[step.length - 1][1] == indexCol
      ) {
        // Atur board kembali putih
        setBoard((prev) => {
          const newBaris = [...baris];
          newBaris[indexCol] = 1;
          const newBoard = [...prev];
          newBoard[indexRow] = newBaris;
          return newBoard;
        });
        // Hapus step terakhir
        setStep((prev) => prev.slice(0, -1));
      } else {
        // if(!isMouseDown) toastError();
      }
      return;
    }

    // ketika board sebelahnya aktif
    if (
      board[Math.max(0, indexRow - 1)][indexCol] == 0 ||
      board[Math.min(board.length - 1, indexRow + 1)][indexCol] == 0 ||
      board[indexRow][Math.max(0, indexCol - 1)] == 0 ||
      board[indexRow][Math.min(board[0].length - 1, indexCol + 1)] == 0
    ) {
      // Atur curr board jadi biru
      setBoard((prev) => {
        const newBaris = [...baris];
        newBaris[indexCol] = 0;
        const newBoard = [...prev];
        newBoard[indexRow] = newBaris;
        return newBoard;
      });

      // tambah step sekarang
      setStep((prev) => [...prev, [indexRow, indexCol]]);
    } else {
      if(!isMouseDown) toastError();
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='flex flex-col items-center m-4 justify-center gap-4'>
        <div className='flex flex-col text-center'>
          <div>Level: {(level % levels.length) + 1}</div>
          <div>Banyak Langkah: {step.length}</div>
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
            <div className='origin-top-right absolute right-0 mt-2 w-full cursor-pointer rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
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
                        setActiveBoard(levels[index].activeBoard);
                        setStep([]);
                        setIsOpen(false);
                      }}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
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
                ${item == 1 && 'bg-white'} 
                ${item == 8 && 'bg-red-500'} 
                ${item == 9 && 'bg-green-500'} 
                ${item == 0 && 'bg-blue-500'}
                ${
                  step.length > 0 &&
                  step[step.length - 1][0] == indexRow &&
                  step[step.length - 1][1] == indexCol &&
                  'bg-blue-600 md:hover:scale-125 animate-pulse'
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
      </div>
    </>
  );
}
