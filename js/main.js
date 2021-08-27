import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA48vg2rQloMyUwYSZ4GR04HGG-JOI674Y",
  authDomain: "vesuvio-18f3e.firebaseapp.com",
  projectId: "vesuvio-18f3e",
  storageBucket: "vesuvio-18f3e.appspot.com",
  messagingSenderId: "1048179665684",
  appId: "1:1048179665684:web:91f0333cbdd86e2cd8b001",
  measurementId: "G-R9CE152X32",
  databaseURL:
    "https://vesuvio-18f3e-default-rtdb.europe-west1.firebasedatabase.app ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  //Get value
  const name = getInputVal("name");
  const surname = getInputVal("surname");
  const email = getInputVal("email");
  const subject = getInputVal("subject");
  const phone = getInputVal("phone");
  const message = getInputVal("message");
  const address = getInputVal("address");
  const guests = getInputVal("guests");
  const budget = getInputVal("budget");
  const date = getInputVal("date");
  const party_time = getInputVal("party_time");
  const serwis = getInputVal("serwis");
  const allergies = getInputVal("allergies");

  // Save message
  saveMessage({
    name,
    surname,
    email,
    phone,
    message,
    subject,
    address,
    guests,
    budget,
    date,
    party_time,
    serwis,
    allergies,
  });

  alert("Dziekujemy za wiadomość! Odezwiemy się niebawem :)");

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(data) {
  db.collection("messages")
    .add(data)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}
