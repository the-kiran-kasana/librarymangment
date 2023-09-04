package com.loginpage.usingajax;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class controller {
    
    @GetMapping("/html")
    String temp()  
    {
        return "front";
    }

   // @GetMapping("/hello")
    @RequestMapping("/hello")
     String two()
    {
        return "check";
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

      @GetMapping("/first")
      String libry()
      {
        return "first";
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
