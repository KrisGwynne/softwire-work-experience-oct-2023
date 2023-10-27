import { iPiece, zPiece, jPiece, lPiece, oPiece, tPiece, sPiece, testPiece } from "./pieces.js";



const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

for (let i = 0; i<11; i++){
    let x = i*60
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 1200);
    ctx.stroke();
}

for (let i = 0; i<21; i++){
    let y = i*60
    ctx.moveTo(0, y);
    ctx.lineTo(600, y);
    ctx.stroke();
}

function drawTile(row,col){
    ctx.fillRect(Number(col)*60+1, Number(row)*60+1, 58, 58)
}

//Random Piece Generator
function getRandomPiece() {
    const pieces = [iPiece, jPiece, lPiece, oPiece, zPiece, tPiece, sPiece]
    const RandomNum = Math.floor(Math.random() * pieces.length)
    return pieces[RandomNum]
    //console.log(pieces[RandomNum])
     
}

const npc = document.getElementById("nextPiece");
const npc_c = npc.getContext("2d");

for (let i = 0; i<6; i++){
   
    let x = i*60
    
    
       
        npc_c.moveTo(x, 0);
        npc_c.lineTo(x, 700);
        npc_c.stroke();
    }
    
for (let i = 0; i<11; i++){ 
        let y = i*60
    
        npc_c.moveTo(0, y);
        npc_c.lineTo(400, y);
        npc_c.stroke();
    }

let nextPiece = getRandomPiece();

function drawNextPiece(){
    npc_c.fillStyle=nextPiece.color
    const array = nextPiece.array;
    console.log(nextPiece.color)
    for(const rowIndex in array){
        const row = array[rowIndex]
        for(const colIndex in row){
            if(row[colIndex]=== 1){
                npc_c.fillRect(Number(colIndex)*60+1, Number(rowIndex)*60+1, 58, 58)

            }
        }
    }
}

drawNextPiece()
  
let gridRow = 0;
let gridColumn = 0;
let piece = getRandomPiece();
function drawPiece(piece) {
    ctx.fillStyle = piece.color
    const array = piece.array;
    for (const rowIndex in array){
        const row = array[rowIndex]
        for (const colIndex in row) {
            if (row[colIndex] === 1) {
                drawTile(Number(rowIndex) + gridRow ,Number(colIndex)+ gridColumn)
            }
        }
    }
}


nextPiece 

function emptyGrid(){
    ctx.fillStyle = "white";
    for(let x = 0; x < 10; x++ ){
        for(let y = 0; y < 20; y++){
            ctx.fillRect(x*60+1, y*60+1, 58, 58)
        }
    }
}

function isMoveValid(newColumn) {
    for (let rowi = 0; rowi < piece.array.length; rowi++) {
        const row = piece.array[rowi];
        for (let coli = 0; coli < row.length; coli++) {
            const element = row[coli];
            if (element === 1 && newColumn + coli === 10 || element === 1 && newColumn + coli === -1) { // cheeky little or value instead of another if statement ;)
                return false
            }
        }
    }
    return true
}

function arrayRotate(arr){
    return arr[0].map((_, index) =>arr.map(row => row[index]).reverse());
}

window.addEventListener("keydown", function name(event) {
    if ("ArrowRight" === event.key && isMoveValid(gridColumn + 1))  {
        gridColumn = gridColumn + 1 ;
    }
    if ("ArrowLeft" === event.key  && isMoveValid(gridColumn - 1))  {
        gridColumn = gridColumn - 1 ;
    }
    if ("ArrowUp" === event.key ) {
        piece.array = arrayRotate(piece.array)
    }
    emptyGrid()
    drawPiece(piece)
})

//rahul is a ledgend too

function increaseTheRow() {
    gridRow = gridRow + 1;
    emptyGrid()
    drawPiece(piece)
    if (gridRow > 19) {
        gridRow = 0;
    }
    console.log("theRow:", gridRow);
}

// game the "1000" miliseconds to increase or decreate the time (1000 miliseconds is 1 second)
drawPiece(piece)
const intervalId = setInterval(increaseTheRow, 1000);