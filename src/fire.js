import Firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCyOI6szbEYSqects-Q5pg_ZKvBEYzGX60",
  authDomain: "chatapp-c85f4.firebaseapp.com",
  projectId: "chatapp-c85f4",
  storageBucket: "chatapp-c85f4.appspot.com",
  messagingSenderId: "836523582994",
  appId: "1:836523582994:web:a0780a6e2a9d93dc595acb",
};

const fire = Firebase.initializeApp(firebaseConfig)

export default fire