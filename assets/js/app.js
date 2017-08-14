  // Init Firebase
  var config = {
    apiKey: "AIzaSyA74ST8ETqn1ZZq0Y1q2gGItySQQLxOJK0",
    authDomain: "login-social-media-368dd.firebaseapp.com",
    databaseURL: "https://login-social-media-368dd.firebaseio.com",
    projectId: "login-social-media-368dd",
    storageBucket: "login-social-media-368dd.appspot.com",
    messagingSenderId: "1058632122763"
  };
  firebase.initializeApp(config);

var login = function(provider) {
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    document.getElementById("username").textContent = user.displayName
  }).catch(function(error) {
    var errorMessage = error.message;
    console.log("error", errorMessage)
});

}

var loginWithFb = function(e) {
  var provider = new firebase.auth.FacebookAuthProvider();
  login(provider);
}

var loginWithTwitter = function(e) {
  var provider = new firebase.auth.TwitterAuthProvider();
  login(provider);
}

var loginWithGoogle = function(e) {
  var provider = new firebase.auth.GoogleAuthProvider();
  login(provider);
}

  var facebook = document.querySelector(".omb_btn-facebook");
  var twitter = document.querySelector(".omb_btn-twitter");
  var google = document.querySelector(".omb_btn-google");
//Add event listener social media
  facebook.addEventListener('click', loginWithFb);
  twitter.addEventListener('click', loginWithTwitter);
  google.addEventListener('click', loginWithGoogle);
