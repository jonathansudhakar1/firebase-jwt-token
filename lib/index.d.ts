import * as firebase from "firebase";
export declare class FirebaseJWTToken {
    app: firebase.app.App;
    constructor(apiKey: string);
    getToken(email: string, password: string, decode?: boolean): Promise<string | undefined>;
}
