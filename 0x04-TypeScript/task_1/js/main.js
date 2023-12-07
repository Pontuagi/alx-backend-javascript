var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Kariuki',
    location: 'Kahawa',
    contract: true
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    var firstInitial = firstName.charAt(0);
    return "".concat(firstInitial, ". ").concat(lastName);
};
// StudentClass implementation
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    Student.prototype.displayName = function () {
        return this.firstName;
    };
    return Student;
}());
