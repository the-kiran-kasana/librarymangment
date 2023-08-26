package com.loginpage.usingajax.model;

public class newuserdata {
     private String id;
     private String name;
     private String psw;

    public newuserdata(String id,String name,String psw)
     {
        this.id=id;
        this.name=name;
        this.psw=psw;
     }
     @Override
     public String toString() {
         return "sqlresponse{" +
                 "name='" + name + '\'' +
                 ", psw='" + psw + '\'' +
                 ", id=" + id +
                 '}';
     }
}
