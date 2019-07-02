require("dotenv").config();
const express = require('express');
const db = require('./models');
// const exphbs = require('express-handlebars');
const app = express();
const path = require('path');

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
app.use('/js/main', express.static(__dirname+ "public/assets/js"));

// Static directory
// app.use(express.static("public"));

require("./controllers/burgers_controller")(app);

db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});