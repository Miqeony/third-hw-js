const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];

const togetherArray = arrayA.concat(arrayB);

const uniqueArray = [];
for (let i = 0; i < togetherArray.length; i++){
    if (uniqueArray.indexOf(togetherArray[i]) === -1) {
        uniqueArray.push(togetherArray[i]);
    }
}
console.log(uniqueArray);
