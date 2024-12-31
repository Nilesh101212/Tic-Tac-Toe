let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
// console.log(msgContainer);
let msg = document.querySelector("#msg");
let turn0 = true; //playerX , player0
let cnt = 0;
const winPatterns = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log(`Clicked box at index: ${index}`);
        if(turn0)
        {
            box.innerText = "0";
            turn0=false;
        }
        else
        {
            box.innerText="X";
            turn0=true;
        }
        cnt++;
        box.disabled=true;
            if(cnt==9)
            {
                msg.innerText=`It's a draw`;
                msgContainer.classList.remove("hide");
                disableBoxes();
            }
        checkWinner();
    });
});

const disableBoxes = ()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame = ()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    cnt=0;
}
const checkWinner = ()=>{
    for( let pattern of winPatterns)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                showWinner(pos1Val);
            }
        }
    }
}
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
