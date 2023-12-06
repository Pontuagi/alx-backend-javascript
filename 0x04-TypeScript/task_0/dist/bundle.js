/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
// Interface for student
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    return Student;
}());
// Create two instances of Student
var student1 = new Student("John", "Kariuki", 20, "Subukia");
var student2 = new Student("Evans", "Bett", 23, "Kaplong");
// Array containing the students
var studentList = [student1, student2];
// Function to render the table
function renderTable() {
    var tableBody = document.getElementById('studentsTableBody');
    if (tableBody) {
        studentList.forEach(function (student) {
            var row = document.createElement('tr');
            var firstNameCell = document.createElement('td');
            var locationCell = document.createElement('td');
            firstNameCell.textContent = student.firstName;
            locationCell.textContent = student.location;
            row.appendChild(firstNameCell);
            row.appendChild(locationCell);
            tableBody.appendChild(row);
        });
    }
}
// Call the function to render the table
renderTable();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0JBQXdCO0FBQ3hCO0lBTUUsaUJBQVksU0FBaUIsRUFBRSxRQUFlLEVBQUUsR0FBVyxFQUFFLFFBQWdCO1FBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBRUQsa0NBQWtDO0FBQ2xDLElBQU0sUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQy9ELElBQU0sUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRzdELGdDQUFnQztBQUNoQyxJQUFNLFdBQVcsR0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVwRCwrQkFBK0I7QUFDL0IsU0FBUyxXQUFXO0lBQ2xCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUUvRCxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ2QsV0FBVyxDQUFDLE9BQU8sQ0FBQyxpQkFBTztZQUN6QixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVsRCxhQUFhLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDOUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBRTVDLEdBQUcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDL0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QixTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUM7QUFFRCx3Q0FBd0M7QUFDeEMsV0FBVyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEludGVyZmFjZSBmb3Igc3R1ZGVudFxuY2xhc3MgU3R1ZGVudCB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBhZ2U6IG51bWJlcjtcbiAgbG9jYXRpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6c3RyaW5nLCBhZ2U6IG51bWJlciwgbG9jYXRpb246IHN0cmluZykge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gIH1cbn1cblxuLy8gQ3JlYXRlIHR3byBpbnN0YW5jZXMgb2YgU3R1ZGVudFxuY29uc3Qgc3R1ZGVudDEgPSBuZXcgU3R1ZGVudChcIkpvaG5cIiwgXCJLYXJpdWtpXCIsIDIwLCBcIlN1YnVraWFcIik7XG5jb25zdCBzdHVkZW50MiA9IG5ldyBTdHVkZW50KFwiRXZhbnNcIiwgXCJCZXR0XCIsIDIzLCBcIkthcGxvbmdcIik7XG5cblxuLy8gQXJyYXkgY29udGFpbmluZyB0aGUgc3R1ZGVudHNcbmNvbnN0IHN0dWRlbnRMaXN0OiBTdHVkZW50W10gPSBbc3R1ZGVudDEsIHN0dWRlbnQyXTtcblxuLy8gRnVuY3Rpb24gdG8gcmVuZGVyIHRoZSB0YWJsZVxuZnVuY3Rpb24gcmVuZGVyVGFibGUoKSB7XG4gIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHVkZW50c1RhYmxlQm9keScpO1xuXG4gIGlmICh0YWJsZUJvZHkpIHtcbiAgICBzdHVkZW50TGlzdC5mb3JFYWNoKHN0dWRlbnQgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgIGNvbnN0IGZpcnN0TmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgY29uc3QgbG9jYXRpb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblxuICAgICAgZmlyc3ROYW1lQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQuZmlyc3ROYW1lO1xuICAgICAgbG9jYXRpb25DZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5sb2NhdGlvbjtcblxuICAgICAgcm93LmFwcGVuZENoaWxkKGZpcnN0TmFtZUNlbGwpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGxvY2F0aW9uQ2VsbCk7XG4gICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBDYWxsIHRoZSBmdW5jdGlvbiB0byByZW5kZXIgdGhlIHRhYmxlXG5yZW5kZXJUYWJsZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9