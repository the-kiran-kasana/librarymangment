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



// function getBooksAndList() {
//     var bookListString = getBooksFromServer();
//     var parseResponse = JSON.parse(bookListString);
//     var buildDivForBooks = null;
//     for (i in parseResponse) {
//         if (buildDivForBooks == null) {
//             buildDivForBooks = getDiv(parseResponse[i].book_id, parseResponse[i].book_name)
//         } else {
//             buildDivForBooks += getDiv(parseResponse[i].book_id, parseResponse[i].book_name)
//         }
//     }
//     document.getElementById("booksList").innerHTML = buildDivForBooks;
// }



function getDiv(bookId, bookName) {
    return "<div style=\"border: 1px solid #ddd; padding: 20px;  height:380px;  width: 200px;  background-color: lightblack; margin-bottom: 50px; margin-top: 20px;\">" +
    "        <img src=\"/images/book_" + bookId + ".png\" alt=\"Book Cover\" style=\"width: 200px; height: 220; background-color: aqua;\">" +
    "        <div style=\"background-color: white; height:70px;width: 200px;\">" +
    "            <h3>" + bookName + "</h3>" +
    "            <p>Book_id : " + bookId + "</p>" +
    "            <button>click me</button>"+
    "        </div>" +  
    "    </div>";
}

