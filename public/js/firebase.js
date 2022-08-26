  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyAhuEY0PJhIB5eNaxdlsBSyVgDeGa3wZcc",
      authDomain: "blog-b4305.firebaseapp.com",
      projectId: "blog-b4305",
      storageBucket: "blog-b4305.appspot.com",
      messagingSenderId: "818719375877",
      appId: "1:818719375877:web:7c155556408d179f65926c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export {collection, addDoc, getDocs};

