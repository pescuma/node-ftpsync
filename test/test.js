#!/usr/bin/env node

var ftpsync = require('../lib/ftpsync.js');

var config = {
	"local":"C:/Users/eplaice/Desktop/node-ftpsync/test/local",
	"remote":"/",
	"host":"127.0.0.1",
	"port":9999,
	"user":"anonymous",
	"pass":"",
	"connections":2,
	"ignore":[
		".htaccess"
	]
};

ftpsync.settings.local = config.local;
ftpsync.settings.remote = config.remote;
ftpsync.settings.host = config.host;
ftpsync.settings.port = config.port;
ftpsync.settings.user = config.user;
ftpsync.settings.pass = config.pass;
ftpsync.settings.connections = config.connections;
ftpsync.settings.ignore = config.ignore;

ftpsync.run();