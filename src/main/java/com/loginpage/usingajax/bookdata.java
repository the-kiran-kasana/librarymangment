package com.loginpage.usingajax;

public class bookdata {
    private String book_id;
    private String book_name;

   public bookdata(String book_id,String book_name)
    {
       this.book_id=book_id;
       this.book_name=book_name;
    }
    @Override
    public String toString() {
        return "jsonresponse{" +
                "name='" + book_name + '\'' +
                ", id=" + book_id +
                '}';
    }
    
}
