import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4M_xWIzvZ-RR84Cge_dKH2XzVUtzAoLQ",
  authDomain: "upload-image-1409e.firebaseapp.com",
  projectId: "upload-image-1409e",
  storageBucket: "upload-image-1409e.appspot.com",
  messagingSenderId: "761115350527",
  appId: "1:761115350527:web:536a6c7db04616d16683ca",
};

const app = initializeApp(firebaseConfig);
export default getStorage(app);
