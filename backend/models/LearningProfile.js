const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profile = sequelize.define('Profile', {
  areasOfInterest: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topicsCovered: {
    type: DataTypes.STRING,
    allowNull: false
  },
  complexityLevel: {
    type: DataTypes.String,
    allowNull: false
  }
});

module.exports = Profile;