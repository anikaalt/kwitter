var firebaseConfig = {
    apiKey: "AIzaSyCdQk0qOiH_LHskspdCnN-6Yc2Y3NrBeVw",
    authDomain: "kwitter-f2c5f.firebaseapp.com",
    databaseURL: "https://kwitter-f2c5f-default-rtdb.firebaseio.com",
    projectId: "kwitter-f2c5f",
    storageBucket: "kwitter-f2c5f.appspot.com",
    messagingSenderId: "715788650352",
    appId: "1:715788650352:web:0a53d910c2c124cd9a31b5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = " ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout()
 {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
 }