const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/teams", require("./routes/teams"));
app.use("/athletes", require("./routes/athletes"));

app.use(function(request, response){
    response.sendStatus(404);
});

module.exports = app;
