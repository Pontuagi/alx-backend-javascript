/**
 * Module for a program that will be executed through the command line
 * It accepts input from the commandline
 * Displays the name provided in input
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  if (input.trim() !== '') {
    console.log(`Your name is: ${input}`);
  }
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
