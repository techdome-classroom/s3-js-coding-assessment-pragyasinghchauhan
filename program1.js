/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []; // create an empty stack to store opening brackets
    for (let c of s) { 
        if (c === '(' || c === '{' || c === '[') { 
            stack.push(c); 
        } else { 
            if (!stack.length ||  
                (c === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
                (c === '}' && stack[stack.length - 1] !== '{') ||
                (c === ']' && stack[stack.length - 1] !== '[')) {
                return false; 
                }
            stack.pop(); 
    }
}
    return !stack.length;

};