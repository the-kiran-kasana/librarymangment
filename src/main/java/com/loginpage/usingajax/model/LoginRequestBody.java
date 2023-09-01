package com.loginpage.usingajax.model;

public class LoginRequestBody {
   
    private String username;
    private String password;
    private String id;
   

    public LoginRequestBody(String username, String password,String id) {
        this.username = username;
        this.password = password;
        this.id=id;
      
    }

    public LoginRequestBody() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getid() {
        return id;
    }

    public void setid(String id) {
        this.id= id;
    }

    

    @Override
    public String toString() {
        return "LoginRequestBody{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ",id='" + id + 
                
                '}';
    }
}
