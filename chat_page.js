  var firebaseConfig = {
    apiKey: "AIzaSyC2YrrtWOlZVvVaWOSTfX1cVTvjvmV79_o",
    authDomain: "practice-151aa.firebaseapp.com",
    databaseURL: "https://practice-151aa-default-rtdb.firebaseio.com",
    projectId: "practice-151aa",
    storageBucket: "practice-151aa.appspot.com",
    messagingSenderId: "723832446001",
    appId: "1:723832446001:web:dd0b809e4e9e4c8b95c910",
    measurementId: "G-W9KX6W4WBE"
  };


    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");


function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        massage:msg,
        like:0
    })
    
    document.getElementById("msg").value = "";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("chat_login.html");
}