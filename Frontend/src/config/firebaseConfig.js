import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: String(import.meta.env.VITE_FB_API_KEY),
    authDomain: String(import.meta.env.VITE_FB_AUTH_DOMAIN),
    projectId: String(import.meta.env.VITE_FB_PROJECT_ID),
    storageBucket: String(import.meta.env.VITE_FB_STORAGE_BUCKET),
    messagingSenderId: String(import.meta.env.VITE_FB_MESSG_SENDER_ID),
    appId: String(import.meta.env.VITE_FB_APP_ID)
};

const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app);