function squareNumber(input: number | number[]): number | number[] {
    if (typeof input === 'number') {
        return input ** 2; // Trả về bình phương nếu là số
    } else if (Array.isArray(input)) {
        return input.map(num => num ** 2); // Trả về mảng mới chứa bình phương của từng phần tử nếu là mảng
    } else {
        throw new Error('Invalid input');
    }
}

// Sử dụng hàm
console.log(squareNumber(5)); 
console.log(squareNumber([1, 2, 3, 4])); 


