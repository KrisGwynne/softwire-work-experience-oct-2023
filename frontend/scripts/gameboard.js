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

function drawRandomPiece() {
    const pieces = [iPiece, jPiece, lPiece, oPiece, zPiece, tPiece, sPiece]
    const RandomNum = Math.floor(Math.random() * pieces.length)
    // return testPiece;
    return pieces[RandomNum]
    //console.log(pieces[RandomNum])
     
}

let column = 0;
let piece = drawRandomPiece();

function drawPiece(piece) {
    ctx.fillStyle = piece.color
    const array = piece.array;
    for (const rowIndex in array){
        const row = array[rowIndex]
        for (const colIndex in row) {
            if (row[colIndex] === 1) {
                drawTile(Number(rowIndex),Number(colIndex) + column) 
            
            }
        }
    }

}


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
            console.log(newColumn + coli)
            if (element === 1 && newColumn + coli == 10 || element === 1 && newColumn + coli == -1) { // cheeky little or value instead of another if statement ;)
                return false
            }

            


        }
    }
    return true
}

window.addEventListener("keydown", function name(event) {
    if ("ArrowRight" === event.key && isMoveValid(column + 1))  {
        column = column + 1 ;
       
        emptyGrid()
       
        drawPiece(piece)
        

    }
    if ("ArrowLeft" === event.key && isMoveValid(column - 1) )  {
        column = column - 1 ;
        
        emptyGrid()
        drawPiece(piece)
        
    }
})

//rahul is a ledgend too


drawPiece(piece)



