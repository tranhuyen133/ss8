"use strict";
// Union Types và Intersection Types là hai khái niệm quan trọng trong TypeScript, nhưng chúng hoạt động theo hai cách khác nhau.
function printId(id) {
    console.log(id);
}
printId(123); // In ra: 123
printId("ABC"); // In ra: ABC
function printEmployeeInfo(employee) {
    console.log(employee.name);
    console.log(employee.age);
    console.log(employee.id);
    console.log(employee.job);
}
const employeeInfo = {
    name: "Huyen",
    age: 19,
    id: 1,
    job: "Student"
};
printEmployeeInfo(employeeInfo);
