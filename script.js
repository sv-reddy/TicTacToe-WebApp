let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");

let turn = true
let count = 0
const winpattern = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6] 
];
boxes.forEach((box) =>{
    box.addEventListener("click", () => {
    box.innerText = turn ? "X" : "O";
    box.disabled = true;
    turn = !turn;
    count ++;
    checkWinner();
});

const checkWinner = ()=>{
    for(pattern of winpattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1 != "" && val1 == val2 && val2 == val3){
                disableAllBoxes();
                setTimeout(() => {
                    alert(`Player ${val1} wins`);
                    resetgame();
                }, 100);
                return;
            }
        }
        if (count === 9) {
            alert("It's a draw!");
            resetgame();
        }
    };

const disableAllBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};


function resetgame(){
    boxes.forEach(box =>{
        box.innerText = "";
        box.disabled = false;
    });
    turn = true;
    count = 0;
}

reset.addEventListener("click", resetgame);
});