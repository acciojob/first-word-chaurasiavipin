function firstWord(s) {
    s = s.trim(); // Remove leading/trailing spaces

    let spaceIndex = s.indexOf(' '); // Find first space

    if (spaceIndex === -1) {
        return s; // No space, return the whole string
    }

    return s.substring(0, spaceIndex); // Extract first word
}


// Do not change the code below

//
const s = prompt("Enter String:");
alert(firstWord(s));
