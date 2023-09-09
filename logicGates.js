const AND = (...inputs) => +inputs.every(Boolean);
const OR = (...inputs) => +inputs.some(Boolean);
const NOT = (input) => +!Boolean(input);
const NOR = (...inputs) => +!inputs.some(Boolean);
const NAND = (...inputs) => +!inputs.every(Boolean);
const XOR = (...inputs) => +(inputs.filter(Boolean).length % 2 === 1);
const XNOR = (...inputs) => +(inputs.filter(Boolean).length % 2 === 0);

// Example usage
const a = true || 1;
const b = false || 0;

console.log(AND(a, b)); // Output: 0 (false)
console.log(OR(a, b)); // Output: 1 (true)
console.log(NOT(a)); // Output: 0 (false)
console.log(NOR(a, b)); // Output: 0 (false)
console.log(NAND(a, b)); // Output: 1 (true)
console.log(XOR(a, b)); // Output: 1 (true)
console.log(XNOR(a, b)); // Output: 0 (false)
