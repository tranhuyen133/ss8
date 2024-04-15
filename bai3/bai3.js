"use strict";
function calculateArea(shape) {
    switch (shape.shape) {
        case 'square':
            return shape.sideLength ** 2; // Diện tích hình vuông là cạnh bình phương
        case 'circle':
            return Math.PI * shape.radius ** 2; // Diện tích hình tròn là pi * bán kính bình phương
        default:
            throw new Error('Invalid shape');
    }
}
// Sử dụng hàm
const square = { shape: 'square', sideLength: 5 };
const circle = { shape: 'circle', radius: 3 };
console.log(calculateArea(square));
console.log(calculateArea(circle));
