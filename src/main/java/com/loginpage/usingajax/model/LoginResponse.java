package com.loginpage.usingajax.model;

public class LoginResponse {
    private int id;
    private String name;
    private String psw;
    
   
    

    public LoginResponse(String name, String psw, int id) {
        this.id = id;
        this.name = name;
        this.psw = psw;
    }

    public LoginResponse() {
    }


    public String getname() {
        return name;
    }

    public void setname(String name) {
        this.name = name;
    }

    public String psw() {
        return psw;
    }

    public void setAuthKey(String psw) {
        this.psw = psw;
    }

    public int getUserId() {
        return id;
    }

    public void setUserId(int id) {
        this.id = id;
    }


    @Override
    public String toString() {
        return "LoginResponse{" +
                "name='" + name + '\'' +
                ", psw='" + psw + '\'' +
                ", id=" + id +
                '}';
    }
}
