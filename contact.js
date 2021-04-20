

const userName = document.getElementById("Username")
const email = document.getElementById("email")
const submit = document.getElementById("submit")


submit.addEventListener("click", function(e){
    
        alert(`Your username is ${userName.value}
Your email is ${email.value}
`)
console.log(typeof userName.value)
e.preventDefault();
    
})