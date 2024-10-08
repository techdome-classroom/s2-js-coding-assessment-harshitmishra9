/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
};


module.exports={romanToInt}

function isValid(s) {
    // Map to hold matching pairs
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];

    for (let char of s) {
        // If the character is a closing bracket
        if (bracketMap[char]) {
            // Pop from stack if it's not empty, otherwise use a dummy value
            const topElement = stack.length > 0 ? stack.pop() : '#';
            // Check if the popped element matches the corresponding opening bracket
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            // It's an opening bracket, push onto stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));      // Output: true
console.log(isValid("()[]{}"));  // Output: true
console.log(isValid("(]"));      // Output: false
