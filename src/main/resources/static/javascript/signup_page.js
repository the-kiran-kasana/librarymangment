
function signup() {

  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var cnfpaswd =  document.getElementById('confirmpsw').value;
    var stdname  =  document.getElementById('stdname').value;
    var stdpsw   =  document.getElementById('stdpsw').value;
    console.log(username,password,cnfpaswd);
  
    if(username==="" || password==="" || stdname==="" || stdpsw==="")
    {
      document.getElementById("message").innerHTML="fill the form";
      alert("please fill the details");
    }
    else{
      console.log("form is fill now");
      const user = { username, password };
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:8080/signbyuser", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    xhr.onreadystatechange = function () {
      var response=this.responseText;
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        if(password===cnfpaswd)
        {
          location.replace("http://localhost:8080/home_page");
          console.log(response);
        }
        else{
          document.getElementById("message").innerHTML="incorrect password";
        }
    }
    };
    body=JSON.stringify(user)
    xhr.send(body);
  }
  }
   
    
  
  
  
  
  