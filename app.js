// Firebase Database

var firebaseConfig = {
    apiKey: "AIzaSyDbBxA9XbagwrgWGoB7OmXvMQdHqGHzJZo",
    authDomain: "fir-auth-aa688.firebaseapp.com",
    projectId: "fir-auth-aa688",
    storageBucket: "fir-auth-aa688.firebasestorage.app",
    messagingSenderId: "967347999633",
    appId: "1:967347999633:web:1daefd6ea43513983a0030",
  };
  console.log(firebase)
  const app = firebase.initializeApp(firebaseConfig);
  
  var auth = firebase.auth();
  
  function submit() {
    var name = document.getElementById("name");
    var email = document.getElementById("emailid");
  
    auth
      .createUserWithEmailAndPassword(email.value, name.value)
      .then((userCredential) => {
    

        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }



// COUNTER

var valueDisplay = document.querySelectorAll(".count");
var interval = 40

valueDisplay.forEach((valueDisplay) =>{
    var startValue = 0;
    var endValue = parseInt(valueDisplay.getAttribute("data-target"))
    var duration = parseFloat (interval / endValue)
    var counter = setInterval(function(){
        startValue +=1
        valueDisplay.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }

        else{

        }

    }, duration)
})

function Welcome(){
    alert ("Welcome to our Coaching website....")
}


function about(){
    alert ("Visit us to know More.....!")
}






















