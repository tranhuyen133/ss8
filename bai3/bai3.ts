interface Square {
    shape: 'square';
    sideLength: number;
}

interface Circle {
    shape: 'circle';
    radius: number;
}

type Geometry = Square | Circle;

function calculateArea(shape: Geometry): number {
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
const square: Square = { shape: 'square', sideLength: 5 };
const circle: Circle = { shape: 'circle', radius: 3 };

console.log(calculateArea(square)); 
console.log(calculateArea(circle)); 


