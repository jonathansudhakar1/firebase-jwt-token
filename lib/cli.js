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
        alias: "e",
        default: process.env.FJT_EMAIL,
        required: true,
        description: "User's Email to log in with. Optionally use environment variable FJT_EMAIL",
    },
    password: {
        type: "string",
        alias: "p",
        default: process.env.FJT_PASSWORD,
        required: true,
        description: "User's Password to log in with. Optionally use environment variable FJT_PASSWORD",
    },
    key: {
        type: "string",
        alias: "k",
        default: process.env.FJT_KEY,
        required: true,
        description: "Firebase Project's Web API Key (can be found under project settings). Optionally use environment variable FJT_KEY",
    },
}).argv;
var app = new index_1.FirebaseJWTToken(args.key);
app
    .getToken(args.email, args.password, args.decode)
    .then(function (token) { return console.log(token); });
