const groupAnagrams = (words) => {
    const map = {};

    words.forEach(word => {
        const key = word.split('').sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    });

    return Object.values(map);
};
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);
