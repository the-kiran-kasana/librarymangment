package com.loginpage.usingajax.model;

public class dataofuserbook {
    private String id;
    private String book_id;
   

   public dataofuserbook(String id,String book_id)
    {
       this.id=id;
       this.book_id=book_id;
    }

    @Override
    public String toString() {
        return "insertsql{" +
                "id='" + id + '\'' +
                ", book_id='" + book_id + '\''+
                '}';
    }
}
