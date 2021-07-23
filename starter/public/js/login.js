const dbRef = firebase.database().ref();
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#login-btn");
const registerBtn = document.querySelector("#register-btn");

let SHA256_Hasher = new Hashes.SHA256;

const login = () => {
    dbRef.on('value', (snapshot) => {
        const data = snapshot.val();  // JSON that contains all unique objects in database
        checkCredentials(data);
    });
};

const checkCredentials = (data) => {
    let username = usernameInput.value;
    let password = passwordInput.value;

    // hash password to check
    password = SHA256_Hasher.hex(password);

    for(userInfo in data){
        userInfo = data[userInfo]; // getting unique user set
        console.log(userInfo);
        if(username == userInfo.username && password == userInfo.password){
            window.location.assign("https://5000-cs-315976410954-default.cs-us-east1-vpcf.cloudshell.dev/home.html");
            console.log("Logged in");
        }
    }
};

loginBtn.addEventListener("click", (e) => {
    login();
});

usernameInput.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        loginBtn.click();
    }
});

passwordInput.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        loginBtn.click();
    }
});