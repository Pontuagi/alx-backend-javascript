#!/usr/bin/node

/**
 * Module for a program that will be executed through the command line
 * It accepts input from the commandline
 * Displays the name provided in input
 */
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('Welcome to Holberton School, what is your name?');

r1.question('', (name) => {
  console.log(`Your name is: ${name}`);

  r1.close();

  console.log('This important software is now closing');
});
