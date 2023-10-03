
//show  books that was borrow by the students

function BorrowBy() {

console.log("hi kiran kasana");
   
var result = null;
var xht = new XMLHttpRequest();
xht.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
      // Return books details from server
      if (this.responseText != null) 
      {
        bookListString = this.responseText;
        console.log(bookListString);
        var parseResponse = JSON.parse(bookListString);
        var buildDivForBooks = null;
        for (i in parseResponse)
        {
          if (buildDivForBooks == null) 
          {
              buildDivForBooks = getDiv1(parseResponse[i].id, parseResponse[i].book_id)
          } else 
          {
             buildDivForBooks += getDiv1(parseResponse[i].id, parseResponse[i].book_id)
          }
        }
         document.getElementById("borrow_by").innerHTML = buildDivForBooks;
        }
     }
};
xht.open("GET", "http://localhost:8080/borrowby", true);
xht.setRequestHeader("Accept", "application/json");
xht.setRequestHeader("Content-Type", "application/json");
xht.send();
}

function getDiv1(id, book_id) {
return "<div style=\"display: inline-block; border: 1px solid black;  padding: 20px;  height:80px;  width: 100px;  background-color: lightblack; margin-bottom: 50px; margin-top: 20px;\">" +
"       <p>student_id : " + id + "</p>" +
"       <p>Book_id : " + book_id + "</p>"+
"       </div>";
}


/********************** ********** ********** ********** ********** ********** ********** ********** ********** 
********** ********** ********** ********** ********** ********** ********** ********** ********** ********** */

//show books that was by a student

function BBYme()

{
var id=document.cookie;
    const getbook={id};
    var xmlhr=new XMLHttpRequest();
    xmlhr.open('POST',"http://localhost:8080/borrowbyme",true);
    xmlhr.setRequestHeader('Content-Type', 'application/json');
    xmlhr.onreadystatechange = function () {
        var response=this.responseText;
        console.log(this.responseText);
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText != null) 
            {
              bookListString = this.responseText;
              console.log(bookListString);
              var parseResponse = JSON.parse(bookListString);
              var buildDivForBooks = null;
              for (i in parseResponse)
              {
                if (buildDivForBooks == null) 
                {
                    buildDivForBooks = getDiv2(parseResponse[i].id, parseResponse[i].book_id,parseResponse[i].bookcpy)
                } else 
                {
                   buildDivForBooks += getDiv2(parseResponse[i].id, parseResponse[i].book_id,parseResponse[i].bookcpy)
                }
              }
               document.getElementById("borrow_by").innerHTML = buildDivForBooks;
              }
           }
      };      
    body=JSON.stringify(getbook);
    xmlhr.send(body);
    }

    function getDiv2(id, book_id,bookcpy) {
        return "<div style=\"display: inline-block; border: 1px solid black;  padding: 20px;  height:100px;  width: 100px;  background-color: lightblack; margin-bottom: 50px; margin-top: 20px;\">" +
        "       <p>student_id : " + id + "</p>" +
        "       <p>Book_id : " + book_id + "</p>"+
        "       <button style=\"background-color:rgb(60, 100, 215);background-color: transparent \"onclick='clickfun1("+book_id+"," +bookcpy+");'>Return_book</button>"+
        "       </div>";
        }

        

    function clickfun1(bookid,bookcpy)
    {

      var book_id=bookid;
      console.log("student id : "+book_id);
      const getbook={book_id};
      var xmlhr=new XMLHttpRequest();
      xmlhr.open('POST',"http://localhost:8080/returnapi",true);
      xmlhr.setRequestHeader('Content-Type', 'application/json');
      xmlhr.onreadystatechange = function () {
          var response=this.responseText;
       };      
      body=JSON.stringify(getbook);
      xmlhr.send(body);
  

      var bookcpy=bookcpy + 1;
      const setbookcpy={bookcpy,book_id};
      var xhr=new XMLHttpRequest();
      xhr.open('POST',"http://localhost:8080/setcpys",true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function () {
       var response=this.responseText;
           console.log(this.responseText);
      };
      body1=JSON.stringify(setbookcpy);
      xhr.send(body1);


    }
        
/********************** ********** ********** ********** ********** ********** ********** ********** ********** 
********** ********** ********** ********** ********** ********** ********** ********** ********** ********** */


//show all books that is present in library

    
function getBooks() {
    // Some hardcoded books
    return "[{\"book_id\":\"101\", \"book_name\":\"Let us C\"}, {\"book_id\":\"102\", \"book_name\":\"C++\"}]"
}
function getBooksAndList() {
    var result = null;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          // Return books details from server
          if (this.responseText != null)  {
            bookListString = this.responseText;
            console.log(bookListString);
            var parseResponse = JSON.parse(bookListString);
            var buildDivForBooks = null;
            for (i in parseResponse) {
              if (buildDivForBooks == null) {
                  buildDivForBooks = getDiv(parseResponse[i].book_id, parseResponse[i].book_name,parseResponse[i].bookcpy)
              } else 
              {
                 buildDivForBooks += getDiv(parseResponse[i].book_id, parseResponse[i].book_name,parseResponse[i].bookcpy)
              }
            }
  
             document.getElementById("booksList").innerHTML =buildDivForBooks;
            }
         }
        else 
        {
            result = getBooks()
        }
    };
    xhttp.open("GET", "http://localhost:8080/library", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
    //return result;
}

function getDiv(bookId, bookName,bookcpy) {
    return "  <div style=\" display: inline-block; padding: 20px; background-color: lightblack; margin-bottom: 50px; margin-top: 20px;\">" +
    "        <img src=\"/images/book_" + bookId + ".png\" alt=\"Book Cover\" style=\"width: 200px; height: 220; background-color: aqua;\">" +
    "        <div style=\"background-color: transparent; height:70px;width: 200px;\">" +
    "            <h3>" + bookName + "</h3>" +
    "            <p>Book_id : " + bookId + "</p>" +
    "            <button style=\"background-color:rgb(60, 100, 215);background-color: transparent \"onclick='clickfun("+bookId+ "," +bookcpy+");'>Borrow_book</button>"+
    "            <p>book copy available :" + bookcpy +"</p>"+
    "        </div>" +  
    "    </div>";
}


/********************** ********** ********** ********** ********** ********** ********** ********** ********** 
********** ********** ********** ********** ********** ********** ********** ********** ********** ********** */

//insert books function


function clickfun(bookid,bookcpy)
{
    console.log("hi kiran kasana");

    var book_id=bookid;
    console.log(book_id);
    var id=document.cookie;
    const getbook={id, book_id};
    var xmlhr=new XMLHttpRequest();
    xmlhr.open('POST',"http://localhost:8080/borrowapi",true);
    xmlhr.setRequestHeader('Content-Type', 'application/json');
    xmlhr.onreadystatechange = function () {
        var response=this.responseText;
        console.log(this.responseText);
     };      
    body=JSON.stringify(getbook);
    xmlhr.send(body);



//set the copy of the books

   var bookcpy=bookcpy-1;
   const setbookcpy={bookcpy,book_id};
   var xhr=new XMLHttpRequest();
   xhr.open('POST',"http://localhost:8080/setcpys",true);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.onreadystatechange = function () {
    var response=this.responseText;
        console.log(this.responseText);
   };

   body1=JSON.stringify(setbookcpy);
   xhr.send(body1);

}

/********************** ********** ********** ********** ********** ********** ********** ********** ********** 
********** ********** ********** ********** ********** ********** ********** ********** ********** ********** */

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}