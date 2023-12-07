import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
// Create and export constant cpp for Cpp Subjects
export var cpp = new Cpp();
// Create and export constant java for Java Subjects
export var java = new Java();
// Create and export constant react for React Subjects
export var react = new React();
// Create and export one Teacher object cTeacher with experienceTeachingC = 10
export var cTeacher = {
    firstName: 'First',
    lastName: 'Last',
    experienceTeachingC: 10,
};
// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//# sourceMappingURL=main.js.map