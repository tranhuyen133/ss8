"use strict";
function validatePerson(person) {
    if (typeof person.name === "string" &&
        typeof person.age === "number" &&
        typeof person.address === "object" &&
        person.address !== null) {
        return true;
    }
    else {
        return false;
    }
}
// Sử dụng hàm
const person1 = { name: "Huyen", age: 19, address: { city: "Nghe An", country: "Viet Nam" } };
const person2 = { name: "Ngoc", age: "25", address: { city: "Nam Dinh", country: "Viet Nam" } }; // age không phải là number
console.log(validatePerson(person1)); // In ra: true
console.log(validatePerson(person2)); // In ra: false
