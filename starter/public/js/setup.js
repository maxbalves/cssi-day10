const dbRef = firebase.database().ref();
const usernameInput = document.querySelector("#usernameSetup");
const passwordInput = document.querySelector("#passwordSetup");
const registerBtn = document.querySelector("#register-btn");

let SHA256_Hasher = new Hashes.SHA256;

const register = (data) => {
    let u = usernameInput.value;
    let p = passwordInput.value;

    // hash the password
    p = SHA256_Hasher.hex(p)
    dbRef.push({
        username: u,
        password: p
    });

    usernameInput.value = "";
    passwordInput.value = "";
    console.log("User registered!");

    window.location.assign("https://5000-cs-315976410954-default.cs-us-east1-vpcf.cloudshell.dev/");
};

// function isDuplicateUser(username) {
//     console.log("checking");
//     let ret = false;
//     dbRef.on('value', (snapshot) => {
//         const data = snapshot.val();  // JSON that contains all unique objects in database
//         // loop through all user sets
//         for(userInfo in data){
//             userInfo = data[userInfo]; // getting unique user set
//             if(username == userInfo.username){
//                 ret = true;
//             }
//         }
//     })
//     return ret;
// };

registerBtn.addEventListener("click", (e) => {
    register();
});

usernameInput.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        registerBtn.click();
    }
});

passwordInput.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        registerBtn.click();
    }
});