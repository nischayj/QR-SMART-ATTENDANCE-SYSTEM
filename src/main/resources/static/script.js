const API = "http://localhost:8080";

function addStudent(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

fetch(API + "/students",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:name,
email:email,
password:password

})

})

.then(res=>res.json())
.then(data=>{

alert("Student Added Successfully");

loadStudents();

});

}



function loadStudents(){

fetch(API + "/students")

.then(res=>res.json())

.then(data=>{

let table = document.getElementById("studentTable");

table.innerHTML="";

document.getElementById("totalStudents").innerText = data.length;

data.forEach(s=>{

table.innerHTML += `
<tr>
<td>${s.id}</td>
<td>${s.name}</td>
<td>${s.email}</td>
</tr>
`;

});

});

}



function generateQR(){

let text = document.getElementById("sessionText").value;

document.getElementById("qrImage").src =
API + "/generateQR?text=" + text;

}



window.onload = loadStudents;
function markAttendance(){

let session = document.getElementById("sessionText").value;

fetch(API + "/attendance/mark?session=" + session)

.then(res => res.text())

.then(data => {

alert("Attendance Marked Successfully");

});

}