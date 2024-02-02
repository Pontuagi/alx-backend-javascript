/**
 * Module for a program that will be executed through the command line
 * It accepts input from the commandline
 * Displays the name provided in input
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input !== null) {
    const name = input.trim();
    if (name !== '') {
      process.stdout.write(`Your name is: ${name}\n`);
    }
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
