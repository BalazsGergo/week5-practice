import * as fs from 'node:fs'; // ES6 szintaktika  kell hozza package.js file  npm init -y a terminalban

//const fs = require('fs')  // ugyanolyan importalas mint a feletti sor // commonJS szintaktika

/* try {
  const data = fs.readFileSync('text.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error reading the file:', err);
} */

/* fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log(data);
}); */

try {
  const data = fs.readFileSync('data.json', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error reading the file:', err);
}