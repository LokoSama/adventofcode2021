const fs = require('fs');

const list = fs.readFileSync('puzzleinput.txt', 'utf-8').split('\n')

// PART 1
function isWinner(board) {
    // check rows
    for (let i = 0; i < board.length; i++) {
        if (board[i].every(item => item.marked)) {
            return true
        }
    }
    // check columns
    for (let i = 0; i < board[0].length; i++) {
        if (board.map(line => line[i]).every(item => item.marked)) {
            return true
        }
    }
}

function computeWinner(list) {
    let drawNumbers = list[0].split(",").map(elt => parseInt(elt, 10))
    let boards = fs.readFileSync('puzzleinput.txt', 'utf-8').split("\n\n")
    boards.shift()
    boards = boards.map(elt => elt.split("\n").map(line =>
        line.trim().split(/\s+/).map(char =>
            ({number: parseInt(char, 10), marked: false})
        )
    ))
    while (true) {
        // mark draw number on boards
        boards = boards.map(board => board.map(line => line.map(obj => ({
            ...obj,
            marked: obj.number === drawNumbers[0] ? true : obj.marked
        }))))
        const winningBoard = boards.find(board => isWinner(board))
        if (winningBoard){
            const unmarkedNumbers = winningBoard.map (line => line.filter(obj => !obj.marked).map(obj => obj.number)).flat()
            return (unmarkedNumbers.reduce((a, b) => a + b, 0)) * drawNumbers[0]
        }
        drawNumbers.shift()
    }
}


console.log("PART 1 RESULT")
console.log(computeWinner(list))

// PART 2
function computeLoser(list) {
    let drawNumbers = list[0].split(",").map(elt => parseInt(elt, 10))
    let boards = fs.readFileSync('puzzleinput.txt', 'utf-8').split("\n\n")
    boards.shift()
    boards = boards.map(elt => elt.split("\n").map(line =>
        line.trim().split(/\s+/).map(char =>
            ({number: parseInt(char, 10), marked: false})
        )
    ))
    while (true) {
        // mark draw number on boards
        boards = boards.map(board => board.map(line => line.map(obj => ({
            ...obj,
            marked: obj.number === drawNumbers[0] ? true : obj.marked
        }))))
        if (boards.length === 1 && isWinner(boards[0])){
            const unmarkedNumbers = boards[0].map (line => line.filter(obj => !obj.marked).map(obj => obj.number)).flat()
            return (unmarkedNumbers.reduce((a, b) => a + b, 0)) * drawNumbers[0]
        }
        boards = boards.filter(board => !isWinner(board))

        drawNumbers.shift()
    }

}


console.log("PART 2 RESULT")
console.log(computeLoser(list))
