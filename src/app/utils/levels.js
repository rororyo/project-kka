const arr = ['white', 'red', 'green', 'blue', 'yellow', 'orange', 'purple'];

const levels = [
  {
    id: 1,
    name: 'Level 1',
    board: [
      [0, 0, 0, 1, 0, 1, 2, 1],
      [0, 1, 0, 1, 0, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    restart: [
      [0, 0, 0, 1, 0, 1, 2, 1],
      [0, 1, 0, 1, 0, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  {
    id: 2,
    name: 'Level 2',
    board: [
      [3, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 3, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    restart: [
      [3, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 3, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  {
    id: 3,
    name: 'Level 3',
    board: [
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 3, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [3, 1, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    restart: [
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 3, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [3, 1, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  {
    id: 4,
    name: 'Level 4',
    board: [
      [2, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0, 0, 0, 1],
      [0, 0, 4, 0, 0, 3, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    restart: [
      [2, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0, 0, 0, 1],
      [0, 0, 4, 0, 0, 3, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  {
    id: 5,
    name: 'Level 5',
    board: [
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 2, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    restart: [
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 2, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  {
    id: 6,
    name: 'Level 6',
    board: [
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 2],
    ],
    restart: [
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 0],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 2],
    ],
  },
  {
    id: 7,
    name: 'Level 7',
    board: [
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 0, 0, 4, 0, 4, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 3, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 2],
    ],
    restart: [
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 0, 0, 4, 0, 4, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 3, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 2],
    ],
  },
  {
    id: 8,
    name: 'Level 8',
    board: [
      [0, 0, 0, 0, 0, 0, 0, 3],
      [4, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 4, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 2],
      [1, 1, 1, 0, 1, 1, 1, 1],
    ],
    restart: [
      [0, 0, 0, 0, 0, 0, 0, 3],
      [4, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 4, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 2],
      [1, 1, 1, 0, 1, 1, 1, 1],
    ],
  },
  {
    id: 9,
    name: 'Level 9',
    board: [
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 3, 0, 3],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 1],
      [0, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 4],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 4, 0, 0, 0, 0],
    ],
    restart: [
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 3, 0, 3],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 1],
      [0, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 4],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 4, 0, 0, 0, 0],
    ],
  },
  {
    id: 10,
    name: 'Level 10',
    board: [
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 4],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 4, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 3, 0, 3],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    restart: [
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 4],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 4, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 3, 0, 3],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
];

export default levels;
