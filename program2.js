def isValid(s: str) -> bool:
    # Check if input is a non-empty string
    if not isinstance(s, str) or len(s) == 0:
        raise ValueError('Input must be a non-empty string')

    # Mapping of closing brackets to their corresponding opening brackets
    bracket_map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    stack = []  # Stack to keep track of opening brackets

    for char in s:
        # Check if the character is a closing bracket
        if char in bracket_map:
            # Pop from stack if it's not empty; otherwise use a dummy value
            top_element = stack.pop() if stack else '#'
            # Check if the popped element matches the corresponding opening bracket
            if bracket_map[char] != top_element:
                return False  # Invalid if it doesn't match
        else:
            # It's an opening bracket; push onto stack
            stack.append(char)

    # If the stack is empty, all brackets were matched
    return len(stack) == 0
    print(isValid("()"))      # Output: True
print(isValid("()[]{}"))  # Output: True
print(isValid("(]"))      # Output: False