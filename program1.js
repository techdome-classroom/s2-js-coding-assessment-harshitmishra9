function isValid(s) {
    // Mapping of closing brackets to their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = []; // Stack to keep track of opening brackets

    for (let char of s) {
        // Check if the character is a closing bracket
        if (bracketMap[char]) {
            // Pop from stack if it's not empty; otherwise use a dummy value
            const topElement = stack.length > 0 ? stack.pop() : '#';
            // Check if the popped element matches the corresponding opening bracket
            if (bracketMap[char] !== topElement) {
                return false; // Invalid if it doesn't match
            }
        } else {
            // It's an opening bracket; push onto stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}

// Example usage
console.log(isValid("()"));      // Output: true
console.log(isValid("()[]{}"));  // Output: true
console.log(isValid("(]"));      // Output: false
console.log(isValid("{[]}"));    // Output: true
console.log(isValid("([{}])"));  // Output: true
console.
