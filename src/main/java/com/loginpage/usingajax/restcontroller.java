 package com.loginpage.usingajax;


//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;


import java.util.ArrayList;
import java.util.List;
import com.loginpage.usingajax.model.LoginRequestBody;
import com.loginpage.usingajax.model.dataofuserbook;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RestController;
import com.loginpage.usingajax.model.newuserdata;

// import com.loginpage.usingajax.booksview;
// import com.loginpage.usingajax.newbok;

// import com.loginpage.usingajax.bookdata;



 
 
@RestController
 public class restcontroller 
 {

    private final JdbcTemplate jdbcTemplate;
    public restcontroller(JdbcTemplate jdbcTemplat)
    {
        this.jdbcTemplate=jdbcTemplat;
    }

    @PostMapping("/kiran")
    public String saveUsers(@RequestBody LoginRequestBody data)
     {
          String username=data.getUsername();
          String password=data.getPassword();
          System.out.println(data.getUsername());
          System.out.println(data.getPassword());
          List<newuserdata> datafromdb = new ArrayList<>();
          String query="select *from users_details where name= '"+username+"' and psw= '"+password+"';";
          jdbcTemplate.execute(query);
          jdbcTemplate.query(query,rs ->{  
          String a=rs.getString("id");
          String b=rs.getString("name");
          String c=rs.getString("psw");
          newuserdata user1 = new newuserdata(a,b,c);
          datafromdb.add(user1);
          });
          System.out.println(datafromdb);
          System.out.println(datafromdb.size());

          //return datafromdb.toString();
          
          if(datafromdb.size()==0)
          {
             return "false";
          }
          else{
            return "true";
          }
      }
      

/**************************************************************************************************************
/**************************************************************************************************************/



    // @PostMapping("/kiran")
    // public  List<newuserdata> forid(@RequestBody LoginRequestBody data)
    //  {
    //       String username=data.getUsername();
    //       String password=data.getPassword();
    //       System.out.println(data.getUsername());
    //       System.out.println(data.getPassword());
    //       List<newuserdata> datafromdb = new ArrayList<>();
    //       String query="select *from users_details where name= '"+username+"' and psw= '"+password+"';";
    //       jdbcTemplate.execute(query);
    //       jdbcTemplate.query(query,rs ->{  
    //       String a=rs.getString("id");
    //       String b=rs.getString("name");
    //       String c=rs.getString("psw");
    //       newuserdata user1 = new newuserdata(a,b,c);
    //       datafromdb.add(user1);
    //       });
    //       System.out.println(datafromdb);
    //       System.out.println(datafromdb.size());

    //       return datafromdb;  
    //   }
      


/**************************************************************************************************************
 **************************************************************************************************************/

 //SHOW ALL BOOKS IN LIBRARY

    @RequestMapping("/library")
    public List<booksview> extractData()
    {
        List<booksview> dataList = new ArrayList<>();
        String sql = "SELECT *FROM books";
        jdbcTemplate.query(sql,rs -> {
        booksview data = new booksview();
        data.setbook_id(rs.getInt("book_id"));
        data.setbook_name(rs.getString("book_name"));
        dataList.add(data);
         });
        return dataList;

     }
 

/**************************************************************************************************************
 **************************************************************************************************************/

 //INSERT DATA INTO TABLE THAT TOOK BY STUDENTS

     @PostMapping("/borrowapi")
     public String borrowbyuser(@RequestBody userbooks book)
     {
        String  userid=book.getid();
        String  bookid=book.getbook_id();
        System.out.println(book.getid());
        System.out.println(book.getbook_id());
        List<dataofuserbook> bookdata = new ArrayList<>();
        String query1="insert into userbooks value(" + userid + ",' " + bookid + " ');";
        String query="select *from userbooks;";
        jdbcTemplate.execute(query1);
        jdbcTemplate.query(query,rs ->{  
        String a=rs.getString("id");
        String b=rs.getString("book_id");
        dataofuserbook book1 = new dataofuserbook(a,b);
        bookdata.add(book1);
        });
        System.out.println(bookdata);
        return bookdata.toString();
     }


/**************************************************************************************************************
 **************************************************************************************************************/


// SHOW THE ALL BOOKS THAT BORROW BY ALL STUDENTS

    @RequestMapping("/borrowby")
    public List<userbooks> extractDatafromUB()
    {
        List<userbooks> userbookList = new ArrayList<>();
        String sql = "SELECT *FROM userbooks";
        jdbcTemplate.query(sql,rs -> {
        userbooks data = new userbooks();
        data.setid(rs.getString("id"));
        data.setbook_id(rs.getString("book_id"));
        userbookList.add(data);
         });
        return userbookList;

     }

/**************************************************************************************************************
 **************************************************************************************************************/


// SHOW THE ALL BOOKS THAT BORROW BY A UNIEQ ID

//  @RequestMapping("/borrowbyme")
//     public List<userbooks> extractDatafromUBBM()
//     {
//         List<userbooks> userbookList = new ArrayList<>();
//         String sql = "SELECT *FROM userbooks where  id = '"+userid+"';";
//         jdbcTemplate.query(sql,rs -> {
//         userbooks data = new userbooks();
//         data.setid(rs.getString("id"));
//         data.setbook_id(rs.getString("book_id"));
//         userbookList.add(data);
//          });
//         return userbookList;

//      }


/**************************************************************************************************************
 **************************************************************************************************************/





//    @RequestMapping("/borrowapi")
//    public String borrowby()
//    {
//       String query1="select *from userbooks;";
//       //  System.out.println("table :"+query1);
//         jdbcTemplate.execute(query1);
//         StringBuilder result = new StringBuilder();
//          jdbcTemplate.query(query1, rs -> {
//             String column1Value = rs.getString("id");
//              String column2Value = rs.getString("book_id");
//              result.append("id: ").append(column1Value).append(", book_id: ").append(column2Value);
//          });
 
//         return result.toString();
   
//    }

 }


// This commit is not valid, Im updating this commit, Dont make nonsense commit again in my code repo.


    //   @RequestMapping("/library")
    //   public booksview libry()
    //   {
            
    //       booksview book=new booksview(1,"kiran");
         
    //       System.out.println(book);
    //       return book;
    //   }

      
