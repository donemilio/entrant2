// eslint-disable-next-line no-undef
var express = require("express");
// eslint-disable-next-line no-undef
const bodyParser = require("body-parser");

var app = express();
var data = "hi";
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",  (req, res) => res.render("index", {data: data} ));
app.get("/create",  (req, res) => res.render("create" ));
app.get("/create", (req, res) => {console.log(req.body);} );

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

