const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = 'database.csv';

    countStudents(databasePath)
      .then((result) => {
        res.end(`This is the list of our students\n${JSON.stringify(result, null, 2)}\n`);
      })
      .catch((error) => {
        res.end(`Error: ${error.message}\n`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
