function getBooks() {
    // Some hardcoded books
    return "[{\"book_id\":\"101\", \"book_name\":\"Let us C\"}, {\"book_id\":\"102\", \"book_name\":\"C++\"}]"
}


function getBooksFromServer() {
    var result = null;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Return books details from server
            if (this.responseText != null) {
                result = this.responseText;
            }
        } else {
            // Return hardcoded books
            result = getBooks()
        }
    };
    xhttp.open("GET", "http://localhost:8080/library", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
    return result;
}

function getBooksAndList() {
    var bookListString = getBooksFromServer();
    var parseResponse = JSON.parse(bookListString);
    var buildDivForBooks = null;
    for (i in parseResponse) {
        if (buildDivForBooks == null) {
            buildDivForBooks = getDiv(parseResponse[i].book_id, parseResponse[i].book_name)
        } else {
            buildDivForBooks += getDiv(parseResponse[i].book_id, parseResponse[i].book_name)
        }
    }
    document.getElementById("booksList").innerHTML = buildDivForBooks;
}

function getDiv(bookId, bookName) {
    return "<div style=\"border: 1px solid #ddd; padding: 10px; display: flex;  width: 200px; background-color: #722212; margin-top: 20px;\">\n" +
    "        <img src=\"../static/images/book_" + bookId + ".png\" alt=\"Book Cover\" style=\"width: 100px; height: auto; margin-right: 10px; background-color: aqua;\">\n" +
    "        <div style=\"font-family: Arial, sans-serif; background-color: #04AA6D;\">\n" +
    "            <h3>" + bookName + "</h3>\n" +
    "            <p>Book Id : " + bookId + "</p>\n" +
    "        </div>\n" +
    "    </div>";
}
