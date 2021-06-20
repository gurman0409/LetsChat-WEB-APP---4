// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAo_DsJN_ZdbuRsJCnSVnVjeLJFKGPMIs4",
    authDomain: "lets-chat-51106.firebaseapp.com",
    databaseURL: "https://lets-chat-51106-default-rtdb.firebaseio.com",
    projectId: "lets-chat-51106",
    storageBucket: "lets-chat-51106.appspot.com",
    messagingSenderId: "336836363621",
    appId: "1:336836363621:web:9ae53b06cb19fb25c5cd8c",
    measurementId: "G-FYFG7PEL5R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onlick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();


function addUser() {
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"Adding room name"});
}

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    })
    
    localStorage.setItem("room_name", room_name);
    
    
    
    window.location = "chat_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "chat_room.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("chat_login.html");
}