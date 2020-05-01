#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var index_1 = require("./index");
var args = yargs.options({
    decode: {
        type: "boolean",
        alias: "d",
        description: "Return decoded token as json instead of JWT Token",
    },
    email: {
        type: "string",
        required: true,
        alias: "e",
        description: "User's Email to log in with",
    },
    password: {
        type: "string",
        required: true,
        alias: "p",
        description: "User's Password to log in with",
    },
    domain: {
        type: "string",
        required: true,
        alias: "a",
        description: "authDomain from the Firebase config object",
    },
    key: {
        type: "string",
        required: true,
        alias: "k",
        description: "apiKey from the Firebase config object",
    },
}).argv;
var app = new index_1.FirebaseJWTToken(args.domain, args.key);
app
    .getToken(args.email, args.password, args.decode)
    .then(function (token) { return console.log(token); });
