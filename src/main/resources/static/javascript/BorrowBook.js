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
                  buildDivForBooks = getDiv(parseResponse[i].book_id, parseResponse[i].book_name)
              } else 
              {
                 buildDivForBooks += getDiv(parseResponse[i].book_id, parseResponse[i].book_name)
              }
            }
             document.getElementById("booksList").innerHTML = buildDivForBooks;
            }
         }
        else 
        {
            // Return hardcoded books
            result = getBooks()
        }
    };
    xhttp.open("GET", "http://localhost:8080/library", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
    //return result;
}

function getDiv(bookId, bookName) {
    return "<div style=\"border: 1px solid #ddd; padding: 20px;  height:380px;  width: 200px;  background-color: lightblack; margin-bottom: 50px; margin-top: 20px;\">" +
    "        <img src=\"/images/book_" + bookId + ".png\" alt=\"Book Cover\" style=\"width: 200px; height: 220; background-color: aqua;\">" +
    "        <div style=\"background-color: white; height:70px;width: 200px;\">" +
    "            <h3>" + bookName + "</h3>" +
    "            <p>Book_id : " + bookId + "</p>" +
    "            <button onclick='clickfun("+bookId+");'>Borrow_book</button>"+
    "        </div>" +  
    "    </div>";
}






/**************************************************************************************************************
 **************************************************************************************************************/



function clickfun(bookid)
{
    var book_id=bookid;
    console.log(book_id);
    var data=document.cookie;

    const getbook={data, book_id };

    var xmlhr=new XMLHttpRequest();
    xmlhr.open('POST',"http://localhost:8080/borrowapi",true);
    xmlhr.setRequestHeader('Content-Type', 'application/json');

    xmlhr.onreadystatechange = function () {
        var response=this.responseText;
        console.log(this.responseText);
        document.getElementById('borrowby').innerText = response;
     };
          
    body=JSON.stringify(getbook);
    xmlhr.send(body);
}



/**************************************************************************************************************
 **************************************************************************************************************/


function BorrowBy() {
   // location.replace("http://localhost:8080/second");
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
    return "<p>student_id : " + id + "</p>" +
    "       <p>Book_id : " + book_id + "</p>"+
    "       <hr>";
}



/**************************************************************************************************************
 **************************************************************************************************************/

function BBM()
{
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
                  buildDivForBooks = getDiv2(parseResponse[i].id, parseResponse[i].book_id)
              } else 
              {
                 buildDivForBooks += getDiv2(parseResponse[i].id, parseResponse[i].book_id)
              }
            }
             document.getElementById("borrow_by_me").innerHTML = buildDivForBooks;
            }
         }
    };
    xht.open("GET", "http://localhost:8080/borrowbyme", true);
    xht.setRequestHeader("Accept", "application/json");
    xht.setRequestHeader("Content-Type", "application/json");
    xht.send();
}

function getDiv2(id, book_id) {
    return "<p>student_id : " + id + "</p>" +
    "       <p>Book_id : " + book_id + "</p>"+
    "       <hr>";
}




/**************************************************************************************************************
 **************************************************************************************************************/






// function clickfun()
// {
//     var xmlhr=new XMLHttpRequest();
//     xmlhr.open("GET","http://localhost:8080/borrowapi",true);
//     xmlhr.onreadystatechange = function () {
//         var response=this.responseText;   
//         console.log(this.responseText);
//         document.getElementById('borrowby').innerText = response;
//           }
//           xmlhr.send();
// };

//  