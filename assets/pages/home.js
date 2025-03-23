// alert("connected......")
const getstarted = document.getElementById("getstartedbtn")
const popup = document.getElementById("popupcontainer")
const close = document.getElementById("close-btn")
const form = document.getElementById("formContainer")
console.log(getstarted)

// events are what happens when i carry out a particular action

getstarted.addEventListener('click', function(){
    popup.style.display = "flex"
})
close.addEventListener('click', function(){
    popup.style.display = "none"
    // console.log("you clicked me.....")
})
form.addEventListener('submit', function(){
    // perform action when we submit the form
    // we need the password value and the confirm password value
    const password = document.getElementById('password').value
    const confirmpassword = document.getElementById('confirmpassword').value
    // console.log("this is my password", password)
    if (password!==confirmpassword){
        alert("password does not match")
        return;
    }
})


// ASSIGNMENT: RESEARCH ON;
// 