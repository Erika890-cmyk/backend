const API = "http://localhost:5000/api/v1"

async function register(){

await fetch(`${API}/auth/register`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:name.value,
email:email.value,
password:password.value

})

})

alert("Registered")

}

async function login(){

const res = await fetch(`${API}/auth/login`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email:loginEmail.value,
password:loginPassword.value

})

})

const data = await res.json()

localStorage.setItem("token",data.token)

alert("Logged in")

}

async function createTask(){

await fetch(`${API}/tasks`,{

method:"POST",

headers:{
"Content-Type":"application/json",

Authorization:`Bearer ${localStorage.getItem("token")}`

},

body:JSON.stringify({

title:title.value,
description:desc.value

})

})

alert("Task added")

}