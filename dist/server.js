"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
// import bodyParser from 'body-parser';
var app = (0, express_1["default"])();
var PORT = 3000;
// app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(PORT));
});
exports["default"] = app;
