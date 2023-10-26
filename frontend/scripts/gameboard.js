import { iPiece, zPiece, jPiece, lPiece, oPiece, tPiece, sPiece } from "./pieces.js";



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
    ctx.fillStyle = "red";
    for(let x = 0; x < 10; x++ ){
        for(let y = 0; y < 20; y++){
            if (y === Number(row) && x === Number(col)) {
                ctx.fillRect(x*60+1, y*60+1, 58, 58)
                
            }
            
            
        }    
    }
}

let column = 0

let x = drawPiece(lPiece)
function drawPiece(piece) {
    for (const rowIndex in piece){
        const row = piece[rowIndex]
        for (const colIndex in row) {
            if (row[colIndex] === 1) {
                drawTile(Number(rowIndex),Number(colIndex) + column)
            
            }
        }
    }

}

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
       
        drawPiece(lPiece)
        

    }
    if ("ArrowLeft" === event.key )  {
        column = column - 1 ;
        
        emptyGrid()
        drawPiece(lPiece)
        
    }
})
