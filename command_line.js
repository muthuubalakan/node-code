#!/usr/bin/env node
'use strict';
var path = require('path');

var username = process.argv[2];
if (!username){
	var appName = process.argv[1].split(path.sep).pop();
	console.error('Username required! Ex. %s USERNAME', appName);
	process.exit(1);
}

console.log("Hello %s", username);
