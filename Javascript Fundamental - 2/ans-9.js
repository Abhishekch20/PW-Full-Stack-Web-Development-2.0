
function hasUniqueCharacters(username) {
    
    const characters = username.split('');

    const uniqueCharacters = new Set(characters);

    return uniqueCharacters.size === characters.length;
}


console.log(hasUniqueCharacters("mithun")); // true
console.log(hasUniqueCharacters("hello")); // false
