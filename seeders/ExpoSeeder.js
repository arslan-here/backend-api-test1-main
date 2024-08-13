
 const { faker } = require("@faker-js/faker");
const Expo = require("../models/Expo");
const dbconnect = require("../config/dbconnect");

dbconnect();

async function generateRandomExpos(numUsers) {
  try {
    const Expos = [];
    for (var i = 0; i < numUsers; i++) {
      const Expo = {
       // Define your schema fields here
      };
      Expos.push(Expo);
    }

    await Expo.insertMany(Expos);
    console.log("Expo Seeder Run Successfully!");
  } catch (err) {
    console.log(err);
  }
}

generateRandomExpos(2);

// node seeders/ExpoSeeder.js

  