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

// Exercise 3: Function parameters and return types
console.log("\n=== Exercise 3: Function Parameters ===");

function fullName(first: string, last: string): string {
  return first + " " + last;
}

console.log(`Full name: ${fullName("Maahir", "Abdullah")}`);

function registerUser(
  username: string,
  isAdmin?: boolean,
  language: string = "en",
): void {
  console.log(
    `User: ${username}, Admin: ${isAdmin ?? false}, Language: ${language}`,
  );
}

registerUser("Maahir");
registerUser("Alex", true, "fr");

function average(...scores: number[]): number {
  if (scores.length === 0) {
    return 0;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

console.log(`Average score: ${average(85, 90, 78, 95)}`);

// Exercise 4: Interfaces, optional properties, and readonly properties
console.log("\n=== Exercise 4: User Interface ===");

interface User {
  readonly id: number;
  username: string;
  password: string;
  email?: string;
}

function login(user: User): void {
  console.log(
    `Login: ${user.username}, Email: ${user.email ?? "not provided"}, ID: ${user.id}`,
  );
}

const userWithoutEmail: User = {
  id: 1,
  username: "maahir",
  password: "example-password",
};

const userWithEmail: User = {
  id: 2,
  username: "alex",
  password: "example-password",
  email: "alex@example.com",
};

login(userWithoutEmail);
login(userWithEmail);

if (false) {
  // @ts-expect-error The id property is readonly and cannot be reassigned.
  userWithoutEmail.id = 3;
}
