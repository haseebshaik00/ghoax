var express     =  require("express"),
    app         =  express(),
    bodyParser  =  require("body-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8086;

app.get("/", function(req, res){
	res.send("Hi");
});

app.get("/", function(req, res)
{
	res.send("Hi");
});

app.get("/", function(req, res)
{
	res.send("Hi");
});

app.get("/", function(req, res)
{
	res.send("Hi");
});

app.listen(port, function(){
	console.log("Server started!");
});