
 const { faker } = require("@faker-js/faker");
const Exhibitor = require("../models/Exhibitor");
const dbconnect = require("../config/dbconnect");

dbconnect();

async function generateRandomExhibitors(numUsers) {
  try {
    const Exhibitors = [];
    for (var i = 0; i < numUsers; i++) {
      const Exhibitor = {
       // Define your schema fields here
      };
      Exhibitors.push(Exhibitor);
    }

    await Exhibitor.insertMany(Exhibitors);
    console.log("Exhibitor Seeder Run Successfully!");
  } catch (err) {
    console.log(err);
  }
}

generateRandomExhibitors(2);

// node seeders/ExhibitorSeeder.js

  