package com.loginpage.usingajax.model;

public class newuserdata1 {
    private int id;
    private String name;
    private String psw;


    public newuserdata1(int id, String name ,  String psw) {
        this.id = id;
        this.name = name;
        this.psw=psw;
    }
    public newuserdata1() {
    }

    public int getid() {
        return id;
    }

    public void setid(int id) {
        this.id = id;
    }

    public String getname() {
        return name;
    }

    public void setname(String name) {
        this.name = name;
    }

    public String getpsw() {
        return psw;
    }

    public void setpsw(String psw) {
        this.psw = psw;
    }
    

    @Override
    public String toString() {
        return "{"
                    + "\"id\":\"" + id + "\","
                    + "\"name\":\"" + name + "\""
                    +"\"psw\":\"" + psw + "\""
                + "}";
    }
}
