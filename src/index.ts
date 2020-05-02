import * as firebase from "firebase";
import * as jsonwebtoken from "jsonwebtoken";

export class FirebaseJWTToken {
  app: firebase.app.App;

  constructor(apiKey: string) {
    this.app = firebase.initializeApp({ apiKey });
  }

  async getToken(email: string, password: string, decode = false) {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const idToken = await user.user?.getIdToken();
      if (decode && idToken) {
        return JSON.stringify(jsonwebtoken.decode(idToken));
      }
      return idToken;
    } catch (e) {
      throw new Error(`Error ${e}`);
    }
  }
}
