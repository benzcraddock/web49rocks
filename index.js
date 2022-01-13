// to inject the config vars inside the .env file
require('dotenv').config();

// const cohort1 = process.argv[2];
// const user = process.env.USER;
// const shell = process.env.SHELL;

// // process is global node variable
// // if third process passed into program is equal to console log web 49 is the best,  
// if(cohort1 === 'web-49') {
//   console.log(`${cohort1} is the best`);
// } else {
//   console.log(`boooo cohort ${cohort1}`);
// }

// console.log(`the user is ${user}`);
// console.log(`the shell is ${shell}`);

const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'hey there fren!'});
})

app.get('/', (req, res) => {
  res.send(`
    <h1>Web 49 Rocks!</h1>
  `)
})

const port = process.env.PORT || 9000; // heroku wants to set its own port and will not let use coerce the port to be 9000, we must use whatever port it is using (check the env of heroku)

app.listen(9000, () => {
  console.log(`listening on port ${port}`);
})