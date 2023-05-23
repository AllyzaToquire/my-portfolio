const firebaseConfig = {
    apiKey: "AIzaSyB4Y_wvWGW__KkBY4OFOSjiz_ZU5_gvC64",
    authDomain: "portfolio-72e8d.firebaseapp.com",
    databaseURL: "https://portfolio-72e8d-default-rtdb.firebaseio.com",
    projectId: "portfolio-72e8d",
    storageBucket: "portfolio-72e8d.appspot.com",
    messagingSenderId: "724028805058",
    appId: "1:724028805058:web:b0845bb549034dffd6d05b",
    measurementId: "G-C8Y73H0NK4"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};