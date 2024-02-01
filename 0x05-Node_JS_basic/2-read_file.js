#!/usr/bin/node

/**
 * countStudents module
 */

const fs = require('fs');

/**
 * Count the number of students in each field from a CSV file.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const rows = data.split('\n').filter((line) => line.trim() !== '')
    const totalStudents = rows.length;
    const fieldCounts = {};

    for (const row of rows) {
      const [firstname, lastname, age, field] = row.split(',');
      fieldCounts[field] = (fieldCounts[field] || 0) + 1;
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const field in fieldCounts) {
      const count = fieldCounts[field];
      const list = rows
        .filter((row) => row.split(',')[3] === field)
        .map((row) => row.split(',')[0])
        .join(', ');

      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
