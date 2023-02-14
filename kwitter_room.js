
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML="welcome" + user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Rome Name -" + Room_names);
row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName()this.id'>#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
 
function addRoom(){
    room_name = document.getElementById("room_name").ariaValueMax;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

