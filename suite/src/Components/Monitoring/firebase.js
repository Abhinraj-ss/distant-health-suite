import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseProjectName = "distant-health-suite-default-rtdb"

    // Parameters required by the initializeApp used below
    const config = {
      apiKey: "AIzaSyCSXYNm8SI_JphDYa3eFSgmkmWKukqIB7E",
      authDomain: `${firebaseProjectName}.firebaseapp.com`,
      databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
      projectId: `${firebaseProjectName}`
    };

    const app = initializeApp(config);
    
export const db = getDatabase(app);