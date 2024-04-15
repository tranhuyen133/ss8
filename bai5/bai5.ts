// Union Types và Intersection Types là hai khái niệm quan trọng trong TypeScript, nhưng chúng hoạt động theo hai cách khác nhau.

//  Union Types:
// -Khái niệm: Union Types cho phép một biến có thể nhận giá trị từ một hoặc nhiều kiểu khác nhau.
// - Sử dụng: Được sử dụng khi một biến có thể nhận giá trị từ nhiều kiểu khác nhau.
// - Sự khác biệt: Biến có kiểu Union Types có thể chứa giá trị từ tất cả các kiểu trong union, nhưng chỉ có thể truy cập các thuộc tính và phương thức tồn tại trong tất cả các kiểu trong union.
// - Ví dụ:
type NumberOrString = number | string;

function printId(id: NumberOrString) {
    console.log(id);
}

printId(123); // In ra: 123
printId("ABC"); // In ra: ABC


//  Intersection Types:
// - Khái niệm: Intersection Types cho phép kết hợp các kiểu lại với nhau.
// - Sử dụng: Được sử dụng khi bạn muốn kết hợp các thuộc tính và phương thức từ các kiểu khác nhau thành một kiểu mới.
// - Sự khác biệt: Các biến có kiểu Intersection Types có thể truy cập tất cả các thuộc tính và phương thức của tất cả các kiểu giao nhau.
// - Ví dụ:
interface Person {
    name: string;
    age: number;
}

interface Employee {
    id: number;
    job: string;
}

type EmployeePerson = Person & Employee;

function printEmployeeInfo(employee: EmployeePerson) {
    console.log(employee.name);
    console.log(employee.age);
    console.log(employee.id);
    console.log(employee.job);
}

const employeeInfo: EmployeePerson = {
    name: "Huyen",
    age: 19,
    id: 1,
    job: "Student"
};

printEmployeeInfo(employeeInfo); 
