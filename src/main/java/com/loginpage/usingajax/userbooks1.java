package com.loginpage.usingajax;

public class userbooks1 {
    private int id;
    private int book_id;

    public userbooks1(int  id,int book_id) {
        this.id = id;
        this.book_id = book_id;
        
      
    }
    public userbooks1() {
    }



    public int  getid() {
        return id;
    }

    public void setid(int id) {
        this.id = id;
    }

    public int getbook_id() {
        return book_id;
    }

    public void setbook_id(int book_id) {
        this.book_id = book_id;
    }

    
    

    @Override
    public String toString() {
        return "{"
                    + "\"id\":\"" + id + "\","
                    + "\"book_id\":\"" + book_id + "\""
                + "}";
    }
}
