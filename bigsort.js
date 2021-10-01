const TimSort = require('timsort');

const multiple = 100_000_000;


const sourceData = Array.from({length: multiple}, () => Math.floor(Math.random() * multiple));

console.log('unsorted sample of first 5 items:');
for (let i = 0; i < 5; i++) {
    console.log(sourceData[i]);
}

function numSorter(a,b) {
    return a-b;
}

const clone1 = sourceData.slice();
console.time('numSorter')
const sorted = clone1.sort(numSorter);
console.timeEnd('numSorter')


for (let i = 0; i < 5; i++) {
   console.log(sorted[i]);
}

///////////////////////////////////////////////////
const numArray = new Float64Array(sourceData);
console.log('unsorted sample of first 5 items:');
for (let i = 0; i < 5; i++) {
    console.log(numArray[i]);
}

console.time('floatSort')
const numArraySorted = numArray.sort();
console.timeEnd('floatSort')

for (let i = 0; i < 5; i++) {
    console.log(numArraySorted[i]);
}


//////////////////////////////////////////////

const clone2 = sourceData.slice();
console.time('timSort')
TimSort.sort(clone2, numSorter);
console.timeEnd('timSort')

for (let i = 0; i < 5; i++) {
    console.log(clone2[i]);
}

console.log('the end');