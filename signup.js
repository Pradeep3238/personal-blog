window.addEventListener("load",start,false);
function start(){
    document.getElementById("email").addEventListener("focus",focus1,false);
    document.getElementById("uname").addEventListener("focus",focus2,false);
    document.getElementById("pass").addEventListener("focus",focus3,false);
    document.getElementById("conpass").addEventListener("focus",focus4,false);
    
    document.getElementById("email").addEventListener("blur",blur1,false);
    document.getElementById("uname").addEventListener("blur",blur2,false);
    document.getElementById("pass").addEventListener("blur",blur3,false);
    document.getElementById("conpass").addEventListener("blur",blur4,false);
}
function focus1(){
    document.getElementById("email").style.borderBlockColor="blue";
}
function focus2(){
    document.getElementById("uname").style.borderBlockColor="blue";
}
function focus3(){
    document.getElementById("pass").style.borderBlockColor="blue";
}
function focus4(){
    document.getElementById("conpass").style.borderBlockColor="b    lue";
}

function blur1(){
    document.getElementById("email").style.borderBlockColor="green";
}
function blur2(){
    document.getElementById("uname").style.borderBlockColor="green";
}
function blur3(){
    document.getElementById("pass").style.borderBlockColor="green";
}
function blur4(){
    document.getElementById("conpass").style.borderBlockColor="green";
}


function validate(){
    var mail=document.forms["signup"]["email"];
    var username=document.forms["signup"]["username"];
    var password=document.forms["signup"]["password"];
    var confirmpass=document.forms["signup"]["confirmpassword"];
    var check=document.forms["signup"]["check"];
    
    if(mail.value==""){
        window.alert("Please enter a email");
        return (false);
    } 
    
    if (username.value==""){
    window.alert("Please Enter your name");
    username.focus();
    return(false);
    }
    else if(username.value.length <10 || username.value.length > 20){
        window.alert("Username should be 10 to 20 charcters")
        username.focus();
    }
    
    if (password.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return (false);
    }
    if(password.value != confirmpass.value){
        window.alert("Password mismatch");
        return (false);
    }  

    var regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,16})/;
    if(password.length < 6 || password.length > 15){
        return false;
    }
    if(!regex.test(password.value)) {
        alert("password should contain atleast one number and one special character");
        return false;
    }
    if(check.checked===false){
        alert("Are you sure not to get notified on new posts");
        return false;
    }
}