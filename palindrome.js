function isPalindrome(value){
    let temp = "";
    for(let i = value.length-1; i >= 0; i--){
       temp = temp + value[i];
    }
    console.log(temp)
}

isPalindrome('radar');
isPalindrome('malam');
isPalindrome('kasur ini rusak');
isPalindrome('ibu ratna antar ubi');
isPalindrome('malas');
isPalindrome('makan nasi goreng');
isPalindrome('Balonku ada lima');