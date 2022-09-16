const firebaseConfig = {

    apiKey: "AIzaSyA6pCqGzHT-eyv_s8GxxzjwOYuRbMV2k8Q",
  
    authDomain: "practice-59d4d.firebaseapp.com",
  
    projectId: "practice-59d4d",
  
    storageBucket: "practice-59d4d.appspot.com",
  
    messagingSenderId: "256307971009",
  
    appId: "1:256307971009:web:15ffa59014115919206540",
  
    measurementId: "G-T0HLQ3CHPW"
  
  };
  firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const createUser = async () => {
      const email = document.getElementById("e1").value
      const password = document.getElementById("p1").value
      const promise = await auth.createUserWithEmailAndPassword(email, password)
      auth.currentUser.getIdToken(true).then((idToken)=>{
          console.log(idToken)
      })
  }
  