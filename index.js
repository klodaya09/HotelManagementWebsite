const firebaseConfig = {
  apiKey: "AIzaSyD_QJAZixQlFrxqdzXemTvR6KePXXoA-oc",
  authDomain: "lilium-hotel-santorini.firebaseapp.com",
  databaseURL: "https://lilium-hotel-santorini.firebaseio.com",
  projectId: "lilium-hotel-santorini",
  storageBucket: "lilium-hotel-santorini.appspot.com",
  messagingSenderId: "929872375693",
  appId: "1:929872375693:web:cc1376fa8dc1598fd217c4",
  measurementId: "G-J56QJCH1XR"
};
firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var cname = document.getElementById('cname').value;
  var cnumber = document.getElementById('cnumber').value;
  var room_type = document.getElementById('room_type').value;
  var room_number = document.getElementById('room_number').value;
  var person_number = document.getElementById('person_number').value;
  var res_facilities =  document.getElementById('res_facilities').value;
  var total_cost =  document.getElementById('total_cost').innerHTML;

    // Save message
  saveMessage(cname, cnumber, room_type, room_number, person_number,res_facilities,total_cost);
  // // Show alert
  // document.querySelector('.alert').style.display = 'block'
  //   // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}
// Save message to firebase
function saveMessage(cname, cnumber, room_type, room_number, person_number,res_facilities,total_cost){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    cname: cname,
    cnumber:cnumber,
    room_type:room_type,
    room_number:room_number,
    person_number:person_number,
    res_facilities:res_facilities,
    total_cost:total_cost
  });
}