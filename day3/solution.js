const fs = require('fs');

const list = fs.readFileSync('puzzleinput.txt', 'utf-8').split('\n')

// PART 1
function computeRates(list) {
    let gammaMatrix = new Array(list[0].length).fill(0);
    for (let i=0; i < list.length; i++){
        const word = list[i].split("")
        for (let i2=0; i2 < word.length; i2++){
            if (word[i2] === "0"){
                gammaMatrix[i2] --
            } else if (word[i2] === "1"){
                gammaMatrix[i2] ++
            }
        }
    }
    const gammaNumber = gammaMatrix.map( elt => elt < 0 ? "0" : "1").join("")
    const epsilonNumber = gammaMatrix.map( elt => elt > 0 ? "0" : "1").join("")
    return parseInt(gammaNumber, 2) * parseInt(epsilonNumber, 2)
}

console.log("PART 1 RESULT")
console.log(computeRates(list))

// PART 2
function computeRates2(list) {
    let results = list
    let currentBitIndex = 0
    while (results.length !== 1){
        let sum = 0
        for (let i=0; i < results.length; i++){
            if (results[i].split("")[currentBitIndex] === "0"){
                sum --
            } else if (results[i].split("")[currentBitIndex] === "1"){
                sum ++
            }
        }
        const criteria = sum < 0 ? "0" : "1"
        results = results.filter(r => r.split("")[currentBitIndex] === criteria)
        currentBitIndex++
    }
    const oxygen = results[0]
    results = list
    currentBitIndex = 0
    while (results.length !== 1){
        let sum = 0
        for (let i=0; i < results.length; i++){
            if (results[i].split("")[currentBitIndex] === "0"){
                sum --
            } else if (results[i].split("")[currentBitIndex] === "1"){
                sum ++
            }
        }
        const criteria = sum >= 0 ? "0" : "1"
        results = results.filter(r => r.split("")[currentBitIndex] === criteria)
        currentBitIndex++
    }
    const co2 = results[0]
    return parseInt(oxygen, 2) * parseInt(co2, 2)

}


console.log("PART 2 RESULT")
console.log(computeRates2(list))
