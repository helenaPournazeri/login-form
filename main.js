const userInput = document.querySelector(".user-input");
const passInput = document.querySelector(".password-input");
const conformPasswordInput = document.querySelector(".conform-password-input")
let usernameMsg = document.querySelector(".user-msg");
let passwordMsg = document.querySelector(".password-msg");
let conformMsg = document.querySelector(".conform-password-msg")
let linkDiv = document.querySelector(".link");
const loginBtn = document.querySelector(".login-button")



loginBtn.addEventListener("click", signIn)

function signIn (event) {
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    conformMsg.innerText = ""
    let usernameValue = userInput.value;
    let passwordValue = passInput.value;
    let conformValue = conformPasswordInput.value;
    let ifSendData = true;

    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordRegex = /^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$@%&? "_-]).*$/;


    let emailValidation = emailRegex.test(usernameValue);
    let passwordValidation = passwordRegex.test(passwordValue);

    if (emailValidation === false) {
        usernameMsg.innerText = "please enter a valid email"
        ifSendData = false;
    }
    if (passwordValidation === false) {
        passwordMsg.innerText = "your password must have 8 characters contain: at least one capital letter,special letter and number"
        ifSendData = false;
    }
    if(conformValue !== passwordValue || conformValue === null) {
        conformMsg.innerText = "please conform your password"
        ifSendData = false;
    }

    if (ifSendData) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameValue,
                password: passwordValue,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => 
            {if(response.ok) {
                linkDiv.innerText = "you signed in seccesfully"
                linkDiv.style.fontSize = "20px"
                linkDiv.style.color = "green"
            }}
            )
    }
    

}           







