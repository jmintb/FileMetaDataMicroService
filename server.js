var express = require('express');
var app = express();
var routing = require('./app/routing/routing.js');
var metadataExtracter = require('./app/service/metadataExtractor.js');
var port = process.env.PORT || 8080;

app.use(express.static(__dirname+'/app/gui/'));
routing(app);
metadataExtracter(app);

app.listen(port)