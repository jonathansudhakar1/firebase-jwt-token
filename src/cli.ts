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
    alias: "e",
    default: process.env.FJT_EMAIL,
    required: true,
    description:
      "User's Email to log in with. Optionally use environment variable FJT_EMAIL",
  },
  password: {
    type: "string",
    alias: "p",
    default: process.env.FJT_PASSWORD,
    required: true,
    description:
      "User's Password to log in with. Optionally use environment variable FJT_PASSWORD",
  },
  key: {
    type: "string",
    alias: "k",
    default: process.env.FJT_KEY,
    required: true,
    description:
      "Firebase Project's Web API Key (can be found under project settings). Optionally use environment variable FJT_KEY",
  },
}).argv;

const app = new FirebaseJWTToken(args.key as string);
app
  .getToken(args.email as string, args.password as string, args.decode)
  .then((token) => console.log(token));
