function login(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username!=""){
        if(password!=""){
            if(username==="Shashank" || username==="Laddu"){
                if(password==="Shashank@123" || password==="Laddu@123"){
                    window.location.href="logged.html";
                }
                else{
                    alert("Wrong passworrd");
                }
            }
            else{
                alert("Wrong username");
            }
        }
        else{
            alert("Enter pasword");
        }
    }
    else{
        alert("Enter Username");
    }
}