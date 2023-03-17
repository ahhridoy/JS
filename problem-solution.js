// Read the problem carefully
// Analyze the problem
// Breakdown into smaller chunk
// Pseudo code
// Research
// Compile within your brain
// Submit your code

/*
1. If the number is odd or even
2. If the number greater than 500
3. Reverse array element
*/

// problem solving site --->> https://www.codewars.com

function oddOrEven(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      result = +array[i];
    }
    if (result % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
}

let arr = [0, -1, -5];

oddOrEven(arr);
