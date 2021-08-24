'use strict'

require('dotenv').config()
const POSTGRES_URI ="postgres://postgres@localhost:5432/postgres"
const { Sequelize, DataTypes } = require('sequelize');


const users=require('./user')
var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    users: users(sequelize, DataTypes),
    
}
