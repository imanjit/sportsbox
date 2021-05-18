const sequelize = require('../config/connection');
const { Team } = require('../models');

const teamSeedData = require('./teamSeed.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const teams = await Team.bulkCreate(teamSeedData);
  process.exit(1);
};

seedDatabase();