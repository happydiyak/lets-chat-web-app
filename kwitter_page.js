//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCmRS_A2KCCKnd4yqXJxbojeOFaBkqrG00",
      authDomain: "kwitter-16bae.firebaseapp.com",
      databaseURL: "https://kwitter-16bae-default-rtdb.firebaseio.com",
      projectId: "kwitter-16bae",
      storageBucket: "kwitter-16bae.appspot.com",
      messagingSenderId: "838739805314",
      appId: "1:838739805314:web:337aa8941325cda053e09b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
//End code
      } });  }); }
getData();
