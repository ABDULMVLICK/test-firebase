// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { addDoc, collection, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBxRf4WcCXFdII9XzM1yXY0-Gg1o2okoA",
    authDomain: "firhambenin-c3aca.firebaseapp.com",
    projectId: "firhambenin-c3aca",
    storageBucket: "firhambenin-c3aca.appspot.com",
    messagingSenderId: "512211916459",
    appId: "1:512211916459:web:52f3d316160aed6907c9ee"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const sendUserData = (identifiant, nom_prenom, numero_telephone,contrat) => {
  addDoc(collection(db, "clients"), { identifiant, nom_prenom, numero_telephone,contrat}).then(()=>{ 
  var modal = document.getElementById('addModal');
  modal.style.display = 'block';
  })
}

function validateAndDisplayAddModal() {
  var identifiant = document.getElementById('identifiant').value;
  var nomPrenom = document.getElementById('nom_prenom').value;
  var numeroTelephone = document.getElementById('numero_telephone').value;
  var contrat = document.getElementById('contrat').value;

  if (identifiant === "" || nomPrenom === ""  || numeroTelephone === "" || contrat === "") {
      alert("Veuillez remplir tous les champs avant de procéder.");
      return;
  }

  // Validation des formats
  if (!identifiant.startsWith('FR')) {
      alert("Veuillez entrer un format valide pour l'identifiant (FR01).");
      return;
  }
  sendUserData(identifiant, nom_prenom, numero_telephone,contrat)
  
}



document.getElementById("ajout").addEventListener("click", e => {
  e.preventDefault(); 
  validateAndDisplayAddModal()
  console.log("bien ajouter");

});






