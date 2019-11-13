
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAAfY0FWS5r4YVjVn8zZ7aNioAgJYswGSA",
    authDomain: "parkingherodev-28525.firebaseapp.com",
    databaseURL: "https://parkingherodev-28525.firebaseio.com",
    projectId: "parkingherodev-28525",
    storageBucket: "parkingherodev-28525.appspot.com",
    messagingSenderId: "526657393644",
    appId: "1:526657393644:web:bd6ddd792538d73a9266c9",
    measurementId: "G-HM4FDY5EMH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
var db = firebase.firestore();
function storedata() {
	  
	var nameText = document.getElementById("name").value;
	var emailText = document.getElementById("email").value;
	var contactText = document.getElementById("contactno").value;
	var manageridText = document.getElementById("managerID").value;
	var passwordText = document.getElementById("password").value;
		
	db.collection("manager").doc().set({
		name: nameText,
		email: emailText,
		contact: contactText,
		managerID: manageridText,
		password: passwordText
	})
	.then(function() {
		console.log("Document successfully written!");
	})
	.catch(function(error) {
		console.error("Error writing document: ", error);
	});
}