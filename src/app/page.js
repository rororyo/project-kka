'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import levels from './levels';

export default function Home() {
  const [board, setBoard] = useState(levels[0].board);
  const [activeBoard, setActiveBoard] = useState([]);
  const [step, setStep] = useState([]);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    setBoard(levels[level].board);
    setActiveBoard(levels[level].activeBoard);
  }, []);

  const handleClick = (indexRow, indexCol, baris) => {
    // handle hijau
    if(board[indexRow][indexCol] == 9) {
      setLevel((prev) => prev + 1);
      setBoard(levels[level + 1].board);
      setActiveBoard(levels[level + 1].activeBoard);
      setStep([]);
      return;
    }

    // handle merah
    if (board[indexRow][indexCol] == 8) return;

    // handle biru
    if (board[indexRow][indexCol] == 0) {
      if (
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
      setBoard((prev) => {
        const newBaris = [...baris];
        newBaris[indexCol] = 0;
        const newBoard = [...prev];
        newBoard[indexRow] = newBaris;
        return newBoard;
      });

      // tambah step sekarang
      setStep((prev) => [...prev, [indexRow, indexCol]]);
    }
  };

  return (
    <div className='flex flex-col items-center m-4 justify-center gap-4'>
      <div>Level: {level + 1}</div>
      <div>Banyak Langkah: {step.length}</div>
      <div className='flex'>
        <div className={`grid gap-1 grid-cols-${board[0].length}`}>
          {board.map((baris, indexRow) => {
            return baris.map((item, indexCol) => {
              return (
                <div
                  className={`w-8 h-8 cursor-pointer
                ${item == 1 && 'bg-white'} 
                ${item == 8 && 'bg-red-500'} 
                ${item == 9 && 'bg-green-500'} 
                ${item == 0 && 'bg-blue-500'}
                `}
                  key={indexCol}
                  onClick={() => handleClick(indexRow, indexCol, baris)}
                >
                  {/* {item == 9 && <img src='/assets/toko.png'></img>} */}
                  {/* {item == 0 && <img src='/assets/distributor.png' className='h-full'></img>} */}
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
}
