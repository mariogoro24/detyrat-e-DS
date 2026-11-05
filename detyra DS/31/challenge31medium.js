function checkPalindrome(words) {
   for(var i = 0; i < words.length; i++) {
    var word = words[i];
    var reversed  = word.split('').reverse().join('');
    if(word === reversed) {
        console.log(word + " is a palindrome");
    } else {
        console.log(word + " is not a palindrome");
    }
}
}
checkPalindrome(["racecar", "hello", "level", "world", "madam"]);