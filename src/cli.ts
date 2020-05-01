#!/usr/bin/env node

import yargs = require("yargs");
import { FirebaseJWTToken } from "./index";

const args = yargs.options({
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

const app = new FirebaseJWTToken(args.domain, args.key);
app
  .getToken(args.email, args.password, args.decode)
  .then((token) => console.log(token));
