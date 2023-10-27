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
    console.log('row', row)
    console.log('col', col)
    ctx.fillRect(Number(col)*60+1, Number(row)*60+1, 58, 58)
}
//Random Piece Generator
function drawRandomPiece() {
    const pieces = [iPiece, jPiece, lPiece, oPiece, zPiece, tPiece, sPiece]
    const RandomNum = Math.floor(Math.random() * pieces.length)
    return pieces[RandomNum]
    //console.log(pieces[RandomNum])
     
}
let theRow = 0;


let timeInterval = 1000;
// moves the block down every second
function increaseTheRow() {
    theRow = theRow + 1;
    emptyGrid()
    drawPiece(piece)
    if (theRow > 19) {
      theRow = 0;
    }
    console.log("theRow:", theRow);
  }




  // game the "1000" miliseconds to increase or decreate the time (1000 miliseconds is 1 second)




const intervalId = setInterval(increaseTheRow, timeInterval);







let column = 0;
let piece = drawRandomPiece();
// draws the piece again
function drawPiece(piece) {
    ctx.fillStyle = piece.color
    const array = piece.array;
    console.log(piece.color)
    for (const rowIndex in array){
        const row = array[rowIndex]
        for (const colIndex in row) {
            if (row[colIndex] === 1) {
                drawTile(Number(rowIndex) + theRow ,Number(colIndex)+ column)
            
            }
        }
    }

}



// Empties the entire grid
function emptyGrid(){
    console.log()
    console.log()
    ctx.fillStyle = "white";
    for(let x = 0; x < 10; x++ ){
        for(let y = 0; y < 20; y++){
            ctx.fillRect(x*60+1, y*60+1, 58, 58)
                
            
            
        }    
    }
}

window.addEventListener("keydown", function name(event) {
    if ("ArrowRight" === event.key )  {
        column = column + 1 ;
       
        emptyGrid()
        drawPiece(piece)
        

    }
    if ("ArrowLeft" === event.key )  {
        column = column - 1 ;

        emptyGrid()
        drawPiece(piece)

    }
    if ("ArrowDown" === event.key ) {
        theRow = theRow + 1;

        emptyGrid()
        drawPiece(piece)
    }
})
// While holding the down arrow key, piece falls quicker

//rahul is a ledgend too

drawPiece(piece)