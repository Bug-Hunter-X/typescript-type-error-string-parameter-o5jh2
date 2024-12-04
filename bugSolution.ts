function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Modify the function signature to accept an array of strings
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeterArray(user)); // Output: Hello, Jane Doe

// Solution 2: Access the specific element of the array
console.log(greeter(user[0])); // Output: Hello, Jane