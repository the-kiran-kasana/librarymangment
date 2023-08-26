function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = { username, password };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', "http://localhost:8080/kiran", true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    var response=this.responseText;
    
    console.log(this.responseText);
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200 && response==="true") {
              document.getElementById('message').innerText = 'Login successful';
              location.replace("http://localhost:8080/home");
          } else {
              document.getElementById('message').innerText = 'Login failed';
          }
      }
  };
 
  body=JSON.stringify(user)
  xhr.send(body);
}




















