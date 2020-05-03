# firebase-jwt-token

![Build](https://github.com/jonathansudhakar1/firebase-jwt-token/workflows/Build/badge.svg) ![Publish](https://github.com/jonathansudhakar1/firebase-jwt-token/workflows/Publish/badge.svg)

A CLI utility to generate Firebase Auth JWT token for a given Email/Password. This is useful if you want to get a JWT token to use during development.
- - -
## Installation

From npm registry:
```bash
npm install -g firebase-jwt-token
```
- - -
## Usage

```bash
➜  ~$ firebase-jwt-token --help
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
- - -
## Examples

Create a user in Firebase Auth using Email/Password method. To get the JWT ID Token, run:

```bash
➜  ~$ firebase-jwt-token --email someemail@jonathansudhakar.com --password qwe123 --key AIzaSyAlLdsqBwCNzkPFIijGuZFqBNUnwTw5uz8
eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4ODQ4YjVhZmYyZDUyMDEzMzFhNTQ3ZDE5MDZlNWFhZGY2NTEzYzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWp3dC10b2tlbiIsImF1ZCI6ImZpci1qd3QtdG9rZW4iLCJhdXRoX3RpbWUiOjE1ODg1MjQ5NzksInVzZXJfaWQiOiJjaE9jNXZJUmU4U0pOdGRTRXVUSlRNVDdCcjIzIiwic3ViIjoiY2hPYzV2SVJlOFNKTnRkU0V1VEpUTVQ3QnIyMyIsImlhdCI6MTU4ODUyNDk3OSwiZXhwIjoxNTg4NTI4NTc5LCJlbWFpbCI6InNvbWVlbWFpbEBqb25hdGhhbnN1ZGhha2FyLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzb21lZW1haWxAam9uYXRoYW5zdWRoYWthci5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.jMy1IsBKUiBSsfku-3ftCHf_C0pJU6hkbppLU0RdkNbC-fIM_DhQXzCZ-_PGRVTdxgaqHAqfGXMgWTAoAlSllN0g7E5uv5zop8x_fNvU06ZFpR7nE5hSroWAsEVAdcu_OeM27hbZxpzJuADEs0eC-qjJRUkUCDDiqyuGYwJjIMPCecuqVGXmNyVAIuIi_OltcEx8DEgtQCQnj-0pT1R3y5EAECejZDGO5qC4eOcuUvNP1SQ9hVvwjy4VD6udEE_qzZTHu-aYE9htiNFQeTiALEFpbGHqvKM1q8SEOAZoAuMiOMw76SYot7Plch_AkKZbcn_aqkYFktes7RwX6Oqpzg
```

To decode the token, add the `-d` argument:

```bash
➜  ~$ firebase-jwt-token --email someemail@jonathansudhakar.com --password qwe123 --key AIzaSyAlLdsqBwCNzkPFIijGuZFqBNUnwTw5uz8 -d
{"iss":"https://securetoken.google.com/fir-jwt-token","aud":"fir-jwt-token","auth_time":1588525065,"user_id":"chOc5vIRe8SJNtdSEuTJTMT7Br23","sub":"chOc5vIRe8SJNtdSEuTJTMT7Br23","iat":1588525065,"exp":1588528665,"email":"someemail@jonathansudhakar.com","email_verified":false,"firebase":{"identities":{"email":["someemail@jonathansudhakar.com"]},"sign_in_provider":"password"}}
```

You can also set the arguments in environment variables:

```bash
➜  ~$ export FJT_KEY=AIzaSyAlLdsqBwCNzkPFIijGuZFqBNUnwTw5uz8
➜  ~$ export FJT_PASSWORD=qwe123
➜  ~$ export FJT_EMAIL=someemail@jonathansudhakar.com
➜  ~$ firebase-jwt-token
eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4ODQ4YjVhZmYyZDUyMDEzMzFhNTQ3ZDE5MDZlNWFhZGY2NTEzYzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWp3dC10b2tlbiIsImF1ZCI6ImZpci1qd3QtdG9rZW4iLCJhdXRoX3RpbWUiOjE1ODg1MjUyNjMsInVzZXJfaWQiOiJjaE9jNXZJUmU4U0pOdGRTRXVUSlRNVDdCcjIzIiwic3ViIjoiY2hPYzV2SVJlOFNKTnRkU0V1VEpUTVQ3QnIyMyIsImlhdCI6MTU4ODUyNTI2MywiZXhwIjoxNTg4NTI4ODYzLCJlbWFpbCI6InNvbWVlbWFpbEBqb25hdGhhbnN1ZGhha2FyLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzb21lZW1haWxAam9uYXRoYW5zdWRoYWthci5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.nFQS-7cLeFmBb7g9WcJOw6bT5dMnN0vATiobXqg0qXaj3J2BIf5GhGv9yzPSGMXJ27Lw3B_iQ1B_Zkc0UesQLIs_yBtY-TFh5wGNAM8Lm_btB9A4PJUsgZJmWxSFoyO9IZv3hjxali-c2CoJP0YPp51RBvSsagwrdCFu7lvN05g_2ckFr2ewy-rOhRGNI01yqs_Yyh__psF-SOR8A2CqzXDllElJtA78e7mgM4bMdkP9-YA8l9vhk4ErLa_6MJbf1Ln7cm_KYJ1WR9S794AkmkFSz5vdc8cnQqcDKGkccJ1c6sSEYkzPFHuQfIlTK1MIZSAnEW_sVrERDjyRTwYtlw
```

### API Key Location

The API Key can be found under the Firebase project's general settings:

![API Key Screenshot](https://github.com/jonathansudhakar1/firebase-jwt-token/raw/master/doc/images/firebase_settings.png)
- - -
## Project Location

Please feel free to create Issues/PRs:
[Git](https://github.com/jonathansudhakar1/firebase-jwt-token)
[NPM Registry](https://www.npmjs.com/package/firebase-jwt-token)
[GitHub Registry](https://github.com/jonathansudhakar1/firebase-jwt-token/packages)