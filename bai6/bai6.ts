function printStringOrArray(input: string | string[]): void {
    if (typeof input === 'string') {
        console.log(input); // Nếu là chuỗi, in ra chuỗi đó
    } else if (Array.isArray(input)) {
        input.forEach(item => console.log(item)); // Nếu là mảng, in ra từng phần tử của mảng
    } else {
        throw new Error('Invalid input');
    }
}

// Sử dụng hàm
printStringOrArray("Hello, world!"); // In ra: Hello, world!
printStringOrArray(["student1", "student1", "student1"]); // In ra từng phần tử của mảng


