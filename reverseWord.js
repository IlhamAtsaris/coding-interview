
function reverseString(str){
    let strArr = str.split('')
    let strReverse = strArr.reverse();
    let strJoin = strReverse.join('');
    return strJoin;
}
const word= "I am A Great human"
// const chooseWord = word.charAt(7).toLocaleLowerCase()
console.log(reverseString(word));