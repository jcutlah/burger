const db = require('../models');
const Op = db.Sequelize.Op;

const orm = {
    // get all burgers
    allBurgers: function(callback){
        console.log('running allBurgers()');
        db.Burger.findAll({where: {burgerName: {[Op.regexp]: '.*'}}}).then(function(burgers){
            console.log(burgers);
            callback(burgers);
        })
    },
    // get a specific burger
    // add a burger
    addBurger: function(burgerName,callback){
        console.log('running addBurgers()');
        db.Burger.create({
            burgerName
        }).then(function(response){
            console.log(response);
            callback(response);
        });
    }
    // remove a burger
}

module.exports = orm;