// Interface for student
class Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;

  constructor(firstName: string, lastName:string, age: number, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
}

// Create two instances of Student
const student1 = new Student("John", "Kariuki", 20, "Subukia");
const student2 = new Student("Evans", "Bett", 23, "Kaplong");


// Array containing the students
const studentList: Student[] = [student1, student2];

// Function to render the table
function renderTable() {
  const tableBody = document.getElementById('studentsTableBody');

  if (tableBody) {
    studentList.forEach(student => {
      const row = document.createElement('tr');
      const firstNameCell = document.createElement('td');
      const locationCell = document.createElement('td');

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
