var express = require("express");
var app = express();
var port = process.env.port || 8800;
var path = require("path");
var cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "ponies")))
app.listen(port, function() {
    console.log("Server running on " + port);
});
