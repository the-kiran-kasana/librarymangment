package com.loginpage.usingajax;

public class userbooks {
    private String id;
    private String  book_id;

    public userbooks(String  id,String  book_id) {
        this.id = id;
        this.book_id = book_id;
        
      
    }
    public userbooks() {
    }



    public String  getid() {
        return id;
    }

    public void setid(String  id) {
        this.id = id;
    }

    public String  getbook_id() {
        return book_id;
    }

    public void setbook_id(String  book_id) {
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


