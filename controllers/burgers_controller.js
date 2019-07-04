const orm = require('../controllers/orm');
const express = require('express');
const exphbs = require('express-handlebars');

module.exports = function(app){
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");
    app.use(express.static("public"));

    app.get('/',function(req,res){
        orm.allBurgers(function(burgers){
            res.render('index',{title: "Eat Da Burger", burgers});
        });
    });

    app.post('/', function(req, res){
        console.log(req.body.burger);
        orm.addBurger(req.body,function(response){
            res.json(response);
        });
    });

    app.put('/', function(req, res){
        console.log(req.body);
        orm.updateBurger(req.body.id, req.body.update, function(response){
            res.json(response);
        });
    })
    app.delete('/:id', function(req, res){
        console.log(req.params.id);
        orm.deleteBurger(req.params.id, function(response){
            res.json(response);
        })
    })
}