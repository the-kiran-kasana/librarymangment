package com.loginpage.usingajax;

public class booksview {
    private int book_id;
    private String book_name;

    public booksview(int book_id, String book_name) {
        this.book_id = book_id;
        this.book_name = book_name;
    }
    public booksview () {
    }

    public int getbook_id() {
        return book_id;
    }

    public void setbook_id(int book_id) {
        this.book_id = book_id;
    }

    public String getbook_name() {
        return book_name;
    }

    public void setbook_name(String book_name) {
        this.book_name = book_name;
    }

    

    @Override
    public String toString() {
        return "{"
                    + "\"book_id\":\"" + book_id + "\","
                    + "\"book_name\":\"" + book_name + "\""
                + "}";
    }
}
