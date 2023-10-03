
//login page


function login() {


  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  const user = { username, password };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', "http://localhost:8080/login_rest", true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    var response=this.responseText;
    var parseResponse = JSON.parse(response);
    console.log(parseResponse);

    for(i in parseResponse)
    {
      var id=parseResponse[i].id;
      var name=parseResponse[i].name;
      var pass=parseResponse[i].psw;
      console.log(id,name,pass);
    }
    
    //delete cookie
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "username; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    //SET cooie
    document.cookie=id;


      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          if (name===username && pass===password ) {
              document.getElementById('message').innerText = 'Login successful';
              location.replace("http://localhost:8080/home_page");
          } else {
              alert("login falied");
          }
      }
  };
 
  body=JSON.stringify(user);
  xhr.send(body);
}


/***********************************************************************************************************************
***********************************************************************************************************************/


function signup()
{
  location.replace("http://localhost:8080/signpage");
}
