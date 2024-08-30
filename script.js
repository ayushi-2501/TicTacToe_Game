let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newbtn");
let win = document.querySelector(".win");
let msg = document.querySelector("#msg");
let main = document.querySelector('.main');

let turn0 = true;
let count=0;

main.classList.remove("noShow");

const winningPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turn0){
      box.innerText = "0";
      turn0 = false;
    }
    else{
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if(count===9 && !isWinner) 
      gameDraw();

  });
});

const resetGame = () => {
  turn0=true;
  count=0;
  enableBoxes();
  win.classList.add("hide");
  main.classList.remove("noShow");
} 

const enableBoxes = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText="";
  }
}

const disableBoxes = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Player ${winner}, You Won `;
  win.classList.remove("hide");
  main.classList.add("noShow");
  disableBoxes();
};

const checkWinner = () => {
  for(let pattern of winningPattern){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1!="" && pos1===pos2 && pos2===pos3){
      showWinner(pos1);
    }
  }
}

const gameDraw = () => {
  msg.innerText = `Game is Draw !! Nobody wins`;
  win.classList.remove("hide");
  main.classList.add("noShow");
  disableBoxes();
}

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);









