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
