let color = 'black';

function populateBoard(size) {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach(div => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size
  for (let i = 0; i < amount; i++) {
    let block = document.createElement('div');
    block.addEventListener('mouseover', colorBlock);
    block.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', block);
  }
}

populateBoard(16);

function colorBlock() {
  this.style.backgroundColor = color;
}

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  }
  else {
    alert("Error: Input needs to be higher than 2 and less than 101.");
  }
}

function colorBlock() {
  if (color === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach(div => div.style.backgroundColor = 'white');
}