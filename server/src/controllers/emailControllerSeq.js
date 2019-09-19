const Sequelize = require('sequelize');
const {options} = require('../configs/configDB');
const bcrypt = require('bcrypt');

// initialize an instance of Sequelize
const sequelize = new Sequelize(options);// check the databse connection
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

class Email extends Model {}
Email.init({
                    // attributes
                    contactId: {
                        type: Sequelize.INTEGER,
                        allowNull: false
                    },
                    email: {
                        type: Sequelize.STRING,
                        allowNull: false
                    },
                }, { sequelize, modelName: 'email' });
// create table with email model
Email.sync()
    .then(() => console.log('Oh yeah! Email table created successfully'))
    .catch(err => console.log('BTW, did you enter wrong database credentials?'));

module.exports = {Email};