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
    addBurger: function(burger,callback){
        console.log('running addBurgers()');
        db.Burger.create({
            burgerName: burger.burger,
            eaten: burger.eaten
        }).then(function(response){
            console.log(response);
            callback(response);
        });
    },
    updateBurger: function(id,newInfo,callback){
        console.log('running updateBurger()');
        db.Burger.update(newInfo, {
            where: {id}
        }).then(function(response){
            console.log(response);
            callback(response);
        })
    },
    // remove a burger
    deleteBurger: function(id, callback){
        console.log('running deleteBurger()');
        db.Burger.destroy({
            where: {id}
        }).then(function(response){
            console.log(response);
            callback(response);
        })
    }
}

module.exports = orm;