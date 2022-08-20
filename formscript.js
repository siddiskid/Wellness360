var ab = [];
var hosadd = {};
var select1 = false;
var select2 = false;

let apiparam1 =
  "https://api.geoapify.com/v2/places?categories=healthcare.hospital&bias=proximity:77.6667136,12.910592&limit=3&apiKey=6211193b5dfd4c76b3a7889d3fa560d1 ";
let apiparam2 =
  "https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis&bias=proximity:77.6667136,12.910592&limit=3&apiKey=6211193b5dfd4c76b3a7889d3fa560d1 ";

var requestOptions = {
  method: "GET",
};

fetch(apiparam1, requestOptions)
  .then((response) => response.json())
  .then(function (result) {
    ab = result;
    // console.log(ab);
    // console.log(ab.features[0].properties);
    for (let i = 0; i < ab.features.length; i++) {
      if (i === 0) {
        document.getElementById("ab1").innerHTML =
          ab.features[i].properties.name;
        document.getElementById("ab1").value = ab.features[i].properties.name;
      }
      if (i === 1) {
        document.getElementById("ab2").innerHTML =
          ab.features[i].properties.name;
        document.getElementById("ab2").value = ab.features[i].properties.name;
      }
      if (i === 2) {
        document.getElementById("ab3").innerHTML =
          ab.features[i].properties.name;
        document.getElementById("ab3").value = ab.features[i].properties.name;
      }
      hosadd[ab.features[i].properties.name] =
        ab.features[i].properties.address_line2;
    }
  })
  .catch((error) => console.log("error", error));
fetch(apiparam2, requestOptions)
  .then((response) => response.json())
  .then(function (result) {
    ab = result;
    // console.log(ab);
    // console.log(ab.features[0].properties);
    for (let i = 0; i < ab.features.length; i++) {
      if (i === 0) {
        document.getElementById("ab4").innerHTML =
          ab.features[i].properties.name;
        document.getElementById("ab4").value = ab.features[i].properties.name;
      }
      if (i === 1) {
        document.getElementById("ab5").innerHTML =
          ab.features[i].properties.name;
        document.getElementById("ab5").value = ab.features[i].properties.name;
      }
      if (i === 2) {
        document.getElementById("ab6").innerHTML =
          ab.features[i].properties.name;
        document.getElementById("ab6").value = ab.features[i].properties.name;
      }
      hosadd[ab.features[i].properties.name] =
        ab.features[i].properties.address_line2;
    }
  })
  .catch((error) => console.log("error", error));

window.checkvalue1 = function (val) {
  if (val === "other1") {
    document.getElementById("other1").style.display = "block";
    // var select1 = true;
  } else {
    document.getElementById("other1").style.display = "none";
    // var select1 = false;
  }
};
window.checkvalue2 = function (val) {
  if (val === "other2") {
    document.getElementById("other2").style.display = "block";
    var select2 = true;
  } else {
    document.getElementById("other2").style.display = "none";
    var select2 = false;
  }
};

document.getElementById("nameee").value = localStorage.getItem("Name");
document.getElementById("emailll").value = localStorage.getItem("Email");
if (localStorage.getItem("Phone") !== "notgiven") {
  document.getElementById("phoneee").value = localStorage.getItem("Phone");
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import {} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmtVUTNY5n6tlpzkEQ_vvX1Lb85qfaFHw",
  authDomain: "ahad2-94346.firebaseapp.com",
  projectId: "ahad2-94346",
  storageBucket: "ahad2-94346.appspot.com",
  messagingSenderId: "692402420164",
  appId: "1:692402420164:web:4d788b40212663c6510c91",
  measurementId: "G-3VV20FBS3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function addAppointments(
  namee,
  genderr,
  dobb,
  agee,
  emaill,
  mobilenoo,
  hospitall,
  specialistt,
  timee,
  uidd,
  addd
) {
  try {
    const docRef = addDoc(collection(db, "appointments"), {
      Name: namee,
      Gender: genderr,
      DOB: dobb,
      Age: agee,
      EmailID: emaill,
      MobileNo: mobilenoo,
      Hospital: hospitall,
      Specialist: specialistt,
      Time: timee,
      UID: uidd,
      Address: addd,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

document.getElementById("final").onclick = () => {
  var name1 = document.getElementById("nameee").value;
  var temp1 = document.getElementById("genderselect").value;
  var gender1 = "";
  if (temp1 !== "other1") {
    var gender1 = temp1;
  } else {
    var gender1 = document.getElementById("other1").value;
  }
  var dob1 = document.getElementById("dateee").value;
  var age1 = document.getElementById("ageee").value;
  var email1 = document.getElementById("emailll").value;
  var phone1 = document.getElementById("phoneee").value;
  var temp2 = document.getElementById("hospitalselect").value;
  var hospital1 = " ";
  if (temp2 !== "other2") {
    var hospital1 = temp2;
  } else {
    var hospital1 = document.getElementById("other2").value;
  }
  var specialist1 = document.getElementById("specialistselect").value;
  var time1 = document.getElementById("timeselect").value;
  var uid1 = localStorage.getItem("UserID");
  var add1 = hosadd[hospital1];
  addAppointments(
    name1,
    gender1,
    dob1,
    age1,
    email1,
    phone1,
    hospital1,
    specialist1,
    time1,
    uid1,
    add1
  );
};