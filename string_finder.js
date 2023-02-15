/*
Giving an array and a string ‘str’, find the longest string in array which can be formed by deleting some characters of the given ‘str’.
Examples:
Input :

arr = ["ale", "apple", "monkey", "plea"]

str = "abpcplea"

Output : apple

// Alteration :
Input :["ba", "bana", "nana", "naba", "banana", "nabana"];
str= "kibana";
Output: ["bana", "naba"]
*/
const isItemPresent = (item, string) => {
    for (let i = 0; i < item.length; i++) {
        if (!string.includes(item[i])) {
            return false;
        }
    }
    return true;
}
const findStr = (array, string) => {
    let longestString = null;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (isItemPresent(item, string)) {
            if (longestString) {
                if (longestString.length < item.length) {
                    longestString = item;
                }
            } else {
                longestString = item;
            }

        }
    }
    return longestString;
}
console.log(findStr(["ale", "apple", "monkey", "plea"], "abpcplea"));
console.log(findStr(["pintu", "geeksfor", "geeksgeeks", " forgeek"], 'geeksforgeeks'));