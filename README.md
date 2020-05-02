
# firebase-jwt-token

![Build](https://github.com/jonathansudhakar1/firebase-jwt-token/workflows/Build/badge.svg) ![Publish](https://github.com/jonathansudhakar1/firebase-jwt-token/workflows/Publish/badge.svg)

A CLI utility to generate Firebase Auth JWT token for a given Email/Password. This is useful if you want to get a JWT token to use during development.

## Installation

From npm registry:
```bash
npm install -g firebase-jwt-token
```

## Usage

```bash
~$ firebase-jwt-token --help
Options:
  --help          Show help                                            [boolean]
  --version       Show version number                                  [boolean]
  --decode, -d    Return decoded token as json instead of JWT Token    [boolean]
  --email, -e     Email to log in with. Optionally use environment
                  variable FJT_EMAIL                         [string] [required]
  --password, -p  Password to log in with. Optionally use environment
                  variable FJT_PASSWORD                      [string] [required]
  --key, -k       Firebase Project Web API Key (can be found under project
                  settings). Optionally use environment variable FJT_KEY
                                                             [string] [required]
```