let username = document.getElementById("username");
let password = document.getElementById("password");
function validator () {
    let bool = true;
    if(username.value == "")
    {
        document.getElementById("user-error").textContent = "field cannot be empty";
        document.getElementById("user-error").style.height = "auto";
        bool = false;
    }
    else if(username.value.length < 3)
    {
        document.getElementById("user-error").textContent = "useranme cannot be shorter than 3 characters";
        document.getElementById("user-error").style.height = "auto";
        bool = false;
    }
    else{
        document.getElementById("user-error").textContent = "";
        document.getElementById("user-error").style.height = "0";
        bool = true;
    }


    if(password.value == "")
    {
        document.getElementById("password-error").textContent = "field cannot be empty";
        document.getElementById("password-error").style.height = "auto";
        bool = false;
    }
    else if(password.value.length < 3)
    {
        document.getElementById("password-error").textContent = "password cannot be shorter than 3 characters";
        document.getElementById("password-error").style.height = "auto";
        bool = false;
    }
    else{
        document.getElementById("password-error").textContent = "";
        document.getElementById("password-error").style.height = "0";
        bool = true;
    }


    return bool;
}