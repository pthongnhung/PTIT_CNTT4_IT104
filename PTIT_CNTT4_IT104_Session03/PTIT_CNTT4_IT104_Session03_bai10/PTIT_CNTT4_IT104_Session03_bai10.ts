function hasDuplicateChars(word: string): boolean {
    let seen: Set<string> = new Set();
    for (let char of word) {
        if (seen.has(char)) return true;
        seen.add(char);
    }
    return false;
}

function findLongestUniqueWord(sentence: string): string {
    let words = sentence.split(" ");
    let longest = "";

    for (let word of words) {
        if (!hasDuplicateChars(word) && word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

let input: string = "hello world apple banana orange pumpkin cucumber";
let result = findLongestUniqueWord(input);
console.log(result); 
