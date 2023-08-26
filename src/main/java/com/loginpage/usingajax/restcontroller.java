 package com.loginpage.usingajax;


//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;


import java.util.ArrayList;
import java.util.List;
import com.loginpage.usingajax.model.LoginRequestBody;
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

          if(datafromdb.size()==0)
          {
             return "false";
          }
          else{
            return "true";
          }

      }
      


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
 
}

// This commit is not valid, Im updating this commit, Dont make nonsense commit again in my code repo.


    //   @RequestMapping("/library")
    //   public booksview libry()
    //   {
            
    //       booksview book=new booksview(1,"kiran");
         
    //       System.out.println(book);
    //       return book;
    //   }

      
