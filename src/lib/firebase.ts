import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager
} from "firebase/firestore";
import { 
  getAuth, 
  setPersistence, 
  browserLocalPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBiGfjXt2M2Qc8XukRXlcXhnUS1RxZPs0",
  authDomain: "salesinventory-4f014.firebaseapp.com",
  projectId: "salesinventory-4f014",
  storageBucket: "salesinventory-4f014.appspot.com",
  messagingSenderId: "694217621876",
  appId: "1:694217621876:web:ba3c98f10577c1c694ec21",
  measurementId: "G-W5KRX6F1KM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with persistence
const db = initializeFirestore(app, {
  cache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

// Initialize Auth
const auth = getAuth(app);

// Initialize Storage
const storage = getStorage(app);

// Set up auth persistence
setPersistence(auth, browserLocalPersistence);

// Export Firestore utility functions
export const firestore = {
  // Collection references
  collections: {
    clients: collection(db, 'clients'),
    inventory: collection(db, 'inventory'),
    sales: collection(db, 'sales'),
  },

  // Query functions
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
};

export { db, auth, storage };