package com.loginpage.usingajax;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controller {
    
    @GetMapping("/login_ctr")
    String temp()  
    {
        return "login_html";
    }

   
    @GetMapping("/home")
      String homepage()
      {
        return "home";
      }

      @GetMapping("/borrow")
      String forborrow()
      {
        return "borrow";
      }

      @GetMapping("/home_page")
      String libry()
      {
        return "home_page";
      }
      

      @GetMapping("/second")
      String libry1()
      {
        return "second";
      }
      
     @GetMapping("/signpage")
      String sign12()
      {
        return "signupage";
      }

      @GetMapping("/main")
      String main()
      {
        return "mainpage";
      }
      

}
