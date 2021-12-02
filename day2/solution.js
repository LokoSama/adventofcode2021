const fs = require('fs');

const list = fs.readFileSync('puzzleinput.txt', 'utf-8').split('\n')

// PART 1
function computeInstructions(list) {
    let horizontal = 0;
    let vertical = 0;
    for (let i = 0; i < list.length; i++) {
        const instr = list[i].split(" ")[0]
        const value = parseInt(list[i].split(" ")[1])
        if (instr === "forward") {
            horizontal += value
        } else if (instr === "up") {
            vertical -= value
        } else if (instr === "down") {
            vertical += value
        }
    }
    return horizontal * vertical
}

console.log("PART 1 RESULT")
console.log(computeInstructions(list))

// PART 2
function computeInstructionsWithAim(list) {
    let horizontal = 0;
    let vertical = 0;
    let aim = 0;
    for (let i = 0; i < list.length; i++) {
        const instr = list[i].split(" ")[0]
        const value = parseInt(list[i].split(" ")[1])
        if (instr === "forward") {
            horizontal += value
            vertical += aim * value
        } else if (instr === "up") {
            aim -= value
        } else if (instr === "down") {
            aim += value
        }
    }
    return horizontal * vertical
}


console.log("PART 2 RESULT")
console.log(computeInstructionsWithAim(list))
