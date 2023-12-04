export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);

      if (foundGrade) {
        return { ...student, grade: foundGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
