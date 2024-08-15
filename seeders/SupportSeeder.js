
 const { faker } = require("@faker-js/faker");
const Support = require("../models/Support");
const dbconnect = require("../config/dbconnect");

dbconnect();

async function generateRandomSupports(numUsers) {
  try {
    const Supports = [];
    for (var i = 0; i < numUsers; i++) {
      const Support = {
       // Define your schema fields here
      };
      Supports.push(Support);
    }

    await Support.insertMany(Supports);
    console.log("Support Seeder Run Successfully!");
  } catch (err) {
    console.log(err);
  }
}

generateRandomSupports(2);

// node seeders/SupportSeeder.js

  