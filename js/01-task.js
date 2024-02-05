const wordsArray = ["apple", "banana", "orange", "kiwi", "grape"];
const n = 5;
const newArray = [];

for(let i = 0; i < wordsArray.length; i++){
    if(wordsArray[i].length > n){
        newArray.push(wordsArray[i])
    }
}
console.log(newArray);