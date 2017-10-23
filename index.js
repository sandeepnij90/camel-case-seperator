function solution(string) {
    var newString = [];
    var text = string.split('');
    text.map(char=> char == char.toUpperCase() ? newString.push(" "+char) : newString.push(char));
    return newString.join('');
}
