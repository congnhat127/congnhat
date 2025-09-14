// Bàn cờ 8x8, mỗi phần tử là quân cờ hoặc null
const initialBoard = [
  ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
  ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
  ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"]
];

const boardElement = document.getElementById("chessBoard");

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // Xen kẽ màu trắng/đen
    if ((row + col) % 2 === 0) {
      square.classList.add("white");
    } else {
      square.classList.add("black");
    }

    // Nếu có quân thì thêm ảnh
    const piece = initialBoard[row][col];
    if (piece) {
      const img = document.createElement("img");
      img.src = `../../PBL4_imgs/image/${piece}.png`;
      img.alt = piece;
      square.appendChild(img);
    }

    boardElement.appendChild(square);
  }
}
