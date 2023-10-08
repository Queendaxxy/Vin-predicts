const form2 = document.getElementById("form2");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form2.addEventListener('submit' , (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if (usernameValue === ''){
        setErrorFor(username, 'Username must be at least 6 characters long');
    }
    else{
        setSuccessFor(username);
    }

    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }
    else{
        setSuccessFor(email);
    }
    
    if (passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else if (passwordValue.length < 8)  {
        setErrorFor(password, 'Password must be at least 8 characters long');
    }
    else{
        setSuccessFor(password);
    }
    
    if (password2Value === ''){
        setErrorFor(password2, 'This field cannot be blank');
    }
    else if (passwordValue !== password2Value){
        setErrorFor(password2, "Password does not match");
    }
    else{
        setSuccessFor(password2);
    }
    
}
function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    small.innerText = message
    formControl.className = "form-control error";
}
function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = "form-control success";
}