// Меняем список карточек
const words = [
  {
    id: '12',
    token: 'laptop',
    url: 'photo-card-3.jpg',
    type: 'image'
  },
  {
    id: '11',
    token: 'laptop',
    word: 'Portatile',
    type: 'word'
  },
  {
    id: '10',
    token: 'headphone',
    url: 'photo-card-1.jpg',
    type: 'image'
  },
  {
    id: '9',
    token: 'headphone',
    word: 'Cuffia',
    type: 'word'
  },
  {
    id: '8',
    token: 'bed',
    url: 'photo-card-2.jpg',
    type: 'image'
  },
  {
    id: '7',
    token: 'bed',
    word: 'Letto',
    type: 'word'
  },
  {
    id: '6',
    token: 'teapot',
    url: 'photo-card-5.jpg',
    type: 'image'
  },
  {
    id: '5',
    token: 'teapot',
    word: 'Teiera',
    type: 'word'
  },
  {
    id: '4',
    token: 'dog',
    url: 'photo-card-6.jpg',
    type: 'image'
  },

  {
    id: '3',
    token: 'dog',
    word: 'Сane',
    type: 'word'
  },
  {
    id: '2',
    token: 'house',
    url: 'photo-card-4.jpg',
    type: 'image'
  },
  {
    id: '1',
    token: 'house',
    word: 'Сasa',
    type: 'word'
  }
];

// Меняем списки выделенных карточек
const selectedItems = ['9', '10'];
const finishedItems = ['5', '6'];

window.words = words;
window.selectedItems = selectedItems;
window.finishedItems = finishedItems;
