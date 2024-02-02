/**
 * countStudents module
 */

const fs = require('fs');

/**
 * Count the number of students in each field from a CSV file.
 * @param {string} path - The path to the CSV file.
 */
const countStudents = (path) => {
  try {
    let data = fs.readFileSync(path, 'utf8').toString().split('\n');
    data = data.slice(1, data.length - 1);
    const totalStudents = data.length;
    console.log(`Number of students: ${totalStudents}`);

    const fields = {};

    for (const row of data) {
      const student = row.split(',');
      if (!fields[student[3]]) {
        fields[student[3]] = {
          count: 0,
          list: [],
        };
      }
      fields[student[3]].count++;
      fields[student[3]].list.push(student[0]);
    }

    for (const field in fields) {
      if (field) {
        const { count, list } = fields[field];
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
