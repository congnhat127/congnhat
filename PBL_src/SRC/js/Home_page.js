const boardEl = document.getElementById('chessBoard');
const lightPicker = document.getElementById('light');
const darkPicker = document.getElementById('dark');
const flipBtn = document.getElementById('flipBtn');
const resetBtn = document.getElementById('resetBtn');

let flipped = false;

function applyColors() {
  const squares = boardEl.querySelectorAll('.square');
  squares.forEach(sq => {
    const r = +sq.dataset.row;
    const c = +sq.dataset.col;
    const isLight = (r + c) % 2 === 0;
    sq.style.background = isLight ? lightPicker.value : darkPicker.value;
  });
}

function flipBoard() {
  flipped = !flipped;
  boardEl.style.transform = flipped ? 'rotate(180deg)' : 'none';
  const squares = boardEl.querySelectorAll('.square');
  squares.forEach(sq => sq.style.transform = flipped ? 'rotate(180deg)' : 'none');
}

// gán sự kiện
lightPicker.addEventListener('input', applyColors);
darkPicker.addEventListener('input', applyColors);
flipBtn.addEventListener('click', flipBoard);
resetBtn.addEventListener('click', () => {
  lightPicker.value = '#f0d9b5';
  darkPicker.value = '#b58863';
  applyColors();
  if (flipped) flipBoard();
});

// chọn chế độ chơi
document.querySelectorAll('.mode').forEach(node => node.addEventListener('click', () => {
  const m = node.dataset.mode;
  alert('Bạn chọn chế độ: ' + m);
}));
