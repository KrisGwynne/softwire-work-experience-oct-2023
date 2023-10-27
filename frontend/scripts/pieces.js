export const iPiece= {
    color: "cyan",
    array: [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
    ]

}

export const jPiece = {
    color: "blue",
    array: [
    [0, 0, 1 ,0],
    [0, 0, 1 ,0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
    ]
}

export const lPiece = {
    color: "orange",
    array: [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ]


}

export const oPiece = {
    color: "yellow",
    array: [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ]
}

export const zPiece = {
    color: 'red',
    array: [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ]
}

export const tPiece = {
    color: 'purple',
    array: [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0]
    ]
}


export const sPiece = {
    color: 'green',
    array: [
        [0, 0, 0, 0],
        [0, 0, 1, 1],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ]
}

export const testPiece = {
    color: 'green',
    array: [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
    ]
}



export const getTotalGrid = () =>  ({
    array: Array(20).fill(0).map(row => row = Array(10).fill(0))
});