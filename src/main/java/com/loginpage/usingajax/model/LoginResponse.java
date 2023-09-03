package com.loginpage.usingajax.model;

public class LoginResponse {
    private String username;
    private String password;
     private int id;
    
   
    

    public LoginResponse(String username, String password, int id) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public LoginResponse() {
    }


    public String getusername() {
        return username;
    }

    public void setusername(String username) {
        this.username = username;
    }

    public String password() {
        return password;
    }

    public void setpassword(String password) {
        this.password = password;
    }

    public int getid() {
        return id;
    }

    public void setid(int id) {
        this.id = id;
    }


    @Override
    public String toString() {
        return "LoginResponse{" +
                "name='" + username + '\'' +
                ", psw='" + password + '\'' +
                ", id=" + id +
                '}';
    }
}
