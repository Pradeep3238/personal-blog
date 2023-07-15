window.addEventListener("load",start,false);
function start(){
    document.getElementById("featuredpost").addEventListener("mousemove",move,false);
    document.getElementById("featuredpost").addEventListener("mouseout",out,false);
    document.getElementById("image").addEventListener("mouseover",over,false);
    document.getElementById("image").addEventListener("mouseout",out2,false);
}
function move(){
    card=document.getElementById("featuredpost");
    card.style.height="45%";
    card.style.width="45%";
}
function out(){
    card=document.getElementById("featuredpost");
    card.style.height="40%";
    card.style.width="40%";
}
function over(e){
    image=document.getElementById("image").setAttribute("src","baby.jpg");
}
function out2(){
    image=document.getElementById("image").setAttribute("src","profile.jpeg");
}




function Validateform(){
    var username=document.forms["feedback"]["username"];
    var mail=document.forms["feedback"]["email"];
    var message=document.forms["feedback"]["message"];
    var rating=document.forms["feedback"]["rating"];

    if (username.value==""){
      window.alert("Please Enter your name");
      username.focus();
      return(false);
    }
    else if(username.value.length <10 || username.value.length > 20){
        window.alert("Username should be 10 to 20 charcters")
        username.focus();
    }
    if(mail.value==""){
      window.alert("Please enter a email");
      return (false);
    }    
}