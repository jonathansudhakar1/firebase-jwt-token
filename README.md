
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
  --email, -e     User's Email to log in with                [string] [required]
  --password, -p  User's Password to log in with             [string] [required]
  --domain, -a    authDomain from the Firebase config object [string] [required]
  --key, -k       apiKey from the Firebase config object     [string] [required]
```