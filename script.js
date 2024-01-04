//your JS code here. If required.
function mapLetters(word) {
    const letterMap = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (!letterMap[letter]) {
            letterMap[letter] = [];
        }
        letterMap[letter].push(i);
    }

    return letterMap;
}

// Examples
console.log(mapLetters("dodo")); // Output: { d: [0, 2], o: [1, 3] }
console.log(mapLetters("froggy")); // Output: { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(mapLetters("grapes")); // Output: { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
