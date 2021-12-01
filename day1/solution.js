const fs = require('fs');

const list = fs.readFileSync('puzzleinput.txt', 'utf-8').split('\n').map( x => parseInt(x))

// PART 1
function computeIncreases(list){
    let result = 0;
    for (let i = 1; i < list.length; i++){
        if (list[i] > list[i-1]){
            result ++;
        }
    }
    return result
}
console.log("PART 1 RESULT")
console.log(computeIncreases(list))

// PART 2
function computeThreeSumWindow(list){
    let sumList = []
    for (let i = 0; i < list.length - 2; i++){
        sumList.push(list[i] + list[i+1] + list[i+2])
    }
    return sumList
}

console.log("PART 2 RESULT")
console.log(computeIncreases(computeThreeSumWindow(list)))