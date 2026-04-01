
export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}


export function subtract(numbers) {
  return numbers.reduce((acc, curr) => acc - curr);
}


export function multiply(numbers) {
  return numbers.reduce((acc, curr) => acc * curr, 1);
}


export function divide(numbers) {
  return numbers.reduce((acc, curr) => {
    if (curr === 0) return "Error: Division by zero";
   
    if (typeof acc === "string") return acc; 
    return acc / curr;
  });
}