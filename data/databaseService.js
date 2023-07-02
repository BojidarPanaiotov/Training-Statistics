'use strict';

const databasePath = 'data/workouts.json';
const fs = require('fs');

function read() {
  fs.readFile(databasePath, (err, data) => {
    if (err) {
      throw err;
    }

    const workouts = JSON.parse(data);
    console.log(workouts);
  });
}

function add(newWorkout) {
  let file = fs.readFileSync(databasePath);
  let data = JSON.parse(file);
  console.log(data);
  data.workouts.push(newWorkout);

  let newData = JSON.stringify(data);
  fs.writeFile(databasePath, newData, (err) => {
    if (err) {
      throw err;
    }
  });
}

module.exports = {
  read,
  add
};