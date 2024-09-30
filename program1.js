/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
};
for(let i = 0; i<s.length;i++){
    const char = s[i];

    if(char in bracketMap){
        if(stack.length === 0 || stack.pop() !== bracketMap[char]){
            return false;
        }
    }
}

module.exports = { isValid };


