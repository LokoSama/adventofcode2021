const fs = require('fs');

const list = fs.readFileSync('puzzleinput.txt', 'utf-8').split('\n')

// PART 1

function computeOverlaps(list) {
    let encounters = {}
    list.forEach( instr => {
            const x1 = parseInt(instr.split(",")[0])
            const y1 = parseInt(instr.split(" -")[0].split(",")[1])
            const x2 = parseInt(instr.split("> ")[1].split(",")[0])
            const y2 = parseInt(instr.split("> ")[1].split(",")[1])
            if (x1 === x2){ // horizontal
                if (y2 > y1){
                    let i = y1
                    while (i <= y2){
                        //console.log(x1 + "-" + i)
                        encounters[x1 + "-" + i] = (encounters.hasOwnProperty(x1 + "-" + i) ? encounters[x1 + "-" + i] + 1 : 1)
                        i++
                    }
                } else {
                    let i = y2
                    while (i <= y1){
                        //console.log(x1 + "-" + i)
                        encounters[x1 + "-" + i] = (encounters.hasOwnProperty(x1 + "-" + i) ? encounters[x1 + "-" + i] + 1 : 1)
                        i++
                    }
                }
            } else if (y1 === y2){ // vertical
                if (x2 > x1){
                    let i = x1
                    while (i <= x2){
                        //console.log(i + "-" + y1)
                        encounters[i + "-" + y1] = (encounters.hasOwnProperty(i + "-" + y1) ? encounters[i + "-" + y1] + 1 : 1)
                        i++
                    }
                } else {
                    let i = x2
                    while (i <= x1){
                        //console.log(i + "-" + y1)
                        encounters[i + "-" + y1] = (encounters.hasOwnProperty(i + "-" + y1) ? encounters[i + "-" + y1] + 1 : 1)
                        i++
                    }
                }
            }
        }
        )
    return Object.values(encounters).filter( elt => elt > 1).length
}


console.log("PART 1 RESULT")
console.log(computeOverlaps(list))

// PART 2
function computeOverlaps2(list) {
    let encounters = {}
    list.forEach( instr => {
            const x1 = parseInt(instr.split(",")[0])
            const y1 = parseInt(instr.split(" -")[0].split(",")[1])
            const x2 = parseInt(instr.split("> ")[1].split(",")[0])
            const y2 = parseInt(instr.split("> ")[1].split(",")[1])
            if (x1 === x2){ // horizontal
                if (y2 > y1){
                    let i = y1
                    while (i <= y2){
                        //console.log(x1 + "-" + i)
                        encounters[x1 + "-" + i] = (encounters.hasOwnProperty(x1 + "-" + i) ? encounters[x1 + "-" + i] + 1 : 1)
                        i++
                    }
                } else {
                    let i = y2
                    while (i <= y1){
                        //console.log(x1 + "-" + i)
                        encounters[x1 + "-" + i] = (encounters.hasOwnProperty(x1 + "-" + i) ? encounters[x1 + "-" + i] + 1 : 1)
                        i++
                    }
                }
            } else if (y1 === y2){ // vertical
                if (x2 > x1){
                    let i = x1
                    while (i <= x2){
                        //console.log(i + "-" + y1)
                        encounters[i + "-" + y1] = (encounters.hasOwnProperty(i + "-" + y1) ? encounters[i + "-" + y1] + 1 : 1)
                        i++
                    }
                } else {
                    let i = x2
                    while (i <= x1){
                        //console.log(i + "-" + y1)
                        encounters[i + "-" + y1] = (encounters.hasOwnProperty(i + "-" + y1) ? encounters[i + "-" + y1] + 1 : 1)
                        i++
                    }
                }
            } else {
                // diagonal line
                const horizontalWay = x1 < x2 // true means we increment
                const verticalWay = y1 < y2 // true means we increment
                let x = x1
                let y = y1
                while (x !== x2 && y !== y2){
                    encounters[x + "-" + y] = (encounters.hasOwnProperty(x + "-" + y) ? encounters[x + "-" + y] + 1 : 1)
                    horizontalWay ? x++ : x--
                    verticalWay ? y++ : y--
                }
                encounters[x2 + "-" + y2] = (encounters.hasOwnProperty(x2 + "-" + y2) ? encounters[x2 + "-" + y2] + 1 : 1)
            }
        }
    )
    return Object.values(encounters).filter( elt => elt > 1).length
}


console.log("PART 2 RESULT")
console.log(computeOverlaps2(list))
