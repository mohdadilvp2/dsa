	/*

			Given an expression string exp, write a program to examine whether
			the pairs and the orders of "{", "}", "(", ")", "[", "]" are correct in exp.

			# Example:

			Input: exp = "[()]{}{[()()]()}"

			Output: Balanced



			Input: exp = "[(])"

			Output: Not Balanced

			*/
	const areBracketsBalanced = (expression) => {
	    const stack = [];
	    const openings = ["{", "(", "["];
	    const bracketMappings = {
	        "}": "{",
	        "]": "[",
	        ")": "("
	    }
	    for (let i = 0; i < expression.length; i++) {
	        if (openings.includes(expression[i])) {
	            stack.push(expression[i]);
	            continue;
	        }
	        if (stack.length === 0) {
	            return false;
	        }
	        const lastCharInTheStack = stack.pop();
	        if (lastCharInTheStack !== bracketMappings[expression[i]]) {
	            return false;
	        }
	    }
	    if (stack.length === 0) {
	        return true;
	    }
	}
	console.log("[()]{}{[()()]()}  ---> " + (areBracketsBalanced("[()]{}{[()()]()}") ? "Balanced" : "Not Balanced"));
	console.log("[(])  ---> " + (areBracketsBalanced("[(])") ? "Balanced" : "Not Balanced"));