function parseInput(input: string): number | boolean | string | null | undefined {
    switch(input) {
        case "number":
            return 123; 
        case "boolean":
            return true; 
        case "string":
            return "Hello, world!"; 
        case "null":
            return null;
        case "undefined":
            return undefined;
        default:
            throw new Error("Invalid input");
    }
}

console.log(parseInput("number")); // In ra: 123
console.log(parseInput("boolean")); // In ra: true
console.log(parseInput("string")); // In ra: Hello, world!
console.log(parseInput("null")); // In ra: null
console.log(parseInput("undefined")); // In ra: undefined

