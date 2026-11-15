// Exercise 1: Basic types, functions, and safe values
console.log("=== Exercise 1: Basic Types and Functions ===");

const productName: string = "TypeScript Basics";
const price: number = 25;
const discountAvailable: boolean = true;

console.log(`Product: ${productName}`);
console.log(`Price: $${price}`);
console.log(`Discount available: ${discountAvailable}`);

function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log(`Price after discount: $${getDiscount(price, 0.1)}`);

function printLength(value: unknown): void {
  if (typeof value === "string" || Array.isArray(value)) {
    console.log(`Length: ${value.length}`);
  } else {
    console.log("This value has no supported length.");
  }
}

printLength("Hello");
printLength(123);

// Exercise 2: Typed arrays and a fixed-order tuple
console.log("\n=== Exercise 2: Arrays and Tuples ===");

const names: string[] = ["Maahir", "Alex"];
const grades: number[] = [95, 88];
const status: boolean[] = [true, false];

names.push("Sam");
grades.push(91);
status.push(true);

const products: string[] = ["Phone", "Laptop"];
products.push("Tablet");

let location: [string, number, number] = ["New York", 40.7128, -74.006];
location = ["London", 51.5072, -0.1276];

console.log(`Names: ${names.join(", ")}`);
console.log(`Grades: ${grades.join(", ")}`);
console.log(`Status: ${status.join(", ")}`);
console.log(`Products: ${products.join(", ")}`);
console.log(`Location: ${location.join(", ")}`);
