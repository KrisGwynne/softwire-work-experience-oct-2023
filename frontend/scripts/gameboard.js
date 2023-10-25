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
    //ctx.fillStyle = "red";
    //ctx.fillRect(1, 1, 58, 58); //base is: ctx.fillRect(1, 1, 58, 58)

}

//let x = zPiece(1,1);

//function zPiece(x,y) {
//    ctx.fillStyle = "red";
//    ctx.fillRect(x, y, 58, 58);
//    ctx.fillRect(x+60, y, 58, 58);
//    ctx.fillRect(x+60, y+60, 58, 58);
//    ctx.fillRect(x+120, y+60, 58, 58);
//}

//let x = tPiece(1,1);

//function tPiece(x,y) {
//    ctx.fillStyle = "red";
//    ctx.fillRect(x, y, 58, 58);
//    ctx.fillRect(x+60, y, 58, 58);
//    ctx.fillRect(x+60, y+60, 58, 58);
//    ctx.fillRect(x+120, y+60, 58, 58);
//}
//for (let i = 0; i <10; i++) {
    //ctx.fillStyle = "red";
    //ctx.fillRect(x, y, 58, 58);  
//}   
//}

function drawTile(row,col){
    console.log('row', row)
    console.log('col', col)
    ctx.fillStyle = "red";
    for(let x = 0; x < 10; x++ ){
        for(let y = 0; y < 20; y++){
            // const color = gameBoard[x][y];
            // console.log(`${x}, ${y}`)
            if (x === Number(row) && y === Number(col)) {
                ctx.fillRect(x*60+1, y*60+1, 58, 58)
                
            }
            
            
        }    
    }
}

let x = drawPiece(lPiece)
function drawPiece(piece) {
    for (const rowIndex in piece){
        const row = piece[rowIndex]
        if (piece === 1) {
            ctx.fillRect(x*60+1, y*60+1, 58, 58)
        }
        for (const colIndex in row) {
            if (row[colIndex] === 1) {
                drawTile(colIndex, rowIndex)
                // ctx.fillRect(col*60+1, rowIndex*60+1, 58, 58)
            }
        }
    }

}


