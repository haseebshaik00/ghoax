var express     =  require("express"),
    app         =  express(),
    bodyParser  =  require("body-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8086;

app.get("/", function(req, res)
{
	res.render("home");
});

app.get("/tutorials", function(req, res)
{
	res.render("tutorials");
});

app.get("/songs", function(req, res)
{
	res.render("songs");
});

app.get("/about", function(req, res){
	res.render("about");
});

app.get("/contact", function(req, res)
{
	res.render("contact");
});

app.listen(port, function(){
	console.log("Server started!");
});