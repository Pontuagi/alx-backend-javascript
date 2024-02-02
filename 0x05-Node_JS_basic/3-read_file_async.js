const fs = require('fs');

/**
 * Count the number of students in each field from a CSV file asynchronously.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise} - A Promise that resolves with the result or rejects with an error.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = data.split('\n').filter((line) => line.trim() !== '');
      const totalStudents = rows.length - 1;
      console.log(`Number of students: ${totalStudents}`);

      const fieldCounts = {};

      rows.forEach((row) => {
        const [firstname, lastname, age, field] = row.split(',');
        if (!fieldCounts[field]) {
          fieldCounts[field] = {
            count: 0,
            list: [],
          };
        }

        fieldCounts[field].count++;
        fieldCounts[field].list.push(firstname);
      });

      for (const field in fieldCounts) {
        const { count, list } = fieldCounts[field];
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }

      resolve({
        totalStudents,
        fieldCounts,
      });
    });
  });
}

module.exports = countStudents;
