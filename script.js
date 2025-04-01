function firstWord(s) {
    s = s.trim(); // Remove extra spaces

    let firstWord = ""; // Store the first word

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            return firstWord; // Return the word when we hit a space
        }
        firstWord += s[i]; // Append characters to the word
    }

    return firstWord; // Return the entire string if no space is found
}
// Do not change the code below

//
const s = prompt("Enter String:");
alert(firstWord(s));
