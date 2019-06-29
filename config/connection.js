const Sequelize = require('sequelize');

const sequelize = new Sequelize('burgers_db','root','JCut0122!@#', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established.');
}).catch(err => {
    console.error('Unable to connect to the database: ', err);
});

module.exports = sequelize;