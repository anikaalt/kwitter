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
   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome! " + user_name + " 🙌";
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -" + room_name);
      row = "<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+room_name+"</div>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 function redirectToRoomName(name)
 {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
 }
