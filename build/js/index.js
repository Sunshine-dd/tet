//引用second.js
var second = require('./second.js');
second.sayhello();

//require("style!css!../css/main.css");
//require("style!css!../css/reset.css");
//调用config.js
require("../css/main.css");
require("../css/reset.css");
var opa = document.getElementById("aa");
opa.innerHTML = "hello"
