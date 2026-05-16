let log_btn = document.querySelector("#logbtn");

log_btn.addEventListener("click", (e) => {
    e.preventDefault(); // stops form refresh
    let email = document.querySelector("#email").value.trim();
    let pass = document.querySelector("#pass").value.trim();

       console.log(email);
       console.log(pass);

    if(email == "sankalp1349@gmail.com" && pass =="1234"){
    console.log("login sucessful");
    alert("Login successful");
}else{
    console.log("login failed");
    alert("Login failed");
}
 
})

let login = document.querySelector("#log_page");
console.log(login.innerText);

let signup = document.querySelector("#signup_page");
console.log(signup.innerText);

console.log("end---------");