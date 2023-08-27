
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  class books
//  {
//    constructor(  book_id  ,book_name){
//       this.book_id=book_id;
//       this.book_name=book_name;
//    }
//  }




//  function convertResponseToUser(input) {
//    var id;
//    var name;
//    try { id = input.book_id; } catch(err) { id = "-1" }
//    try { name = input.book_name; } catch(err) { name = "" }
//    console.log(id,name);
//    return new books(id, name);
//  }



//  var xmlhttp = new XMLHttpRequest();
//  xmlhttp.getResponseHeader("Content-type", "application/json");
//  xmlhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200)
//    {
//      var value=this.responseText
//      console.log(value);
//      var myObj = JSON.parse(value);
//      var Lst = [];
//      for(i in myObj) {
//        Lst.push(convertResponseToUser(myObj[i]));
//        console.log(Lst[i]);
//        document.getElementById("demo").innerHTML=Lst;
//       }};

//  }
//  xmlhttp.open("GET", "http://localhost:8080/library", true);
//  xmlhttp.send();


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  function getNewDiv(imgPath) {

//   var firstname="Image";
//   var divv ="<img src='"+imgPath+"' alt='"+firstname+"' style='width: 100%; height: 100%;'>"
//   return divv;
// }
// var imgPath =  "images/book_7.png";
// var node=document.getElementById("demo1");
// node.innerHTML = "";
// node.innerHTML += getNewDiv(imgPath);
 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// class books
//  {
//    constructor(  book_id  ,book_name){
//       this.book_id=book_id;
//       this.book_name=book_name;
//    }
//  }

// /*---------End of the function Send HTTP request and return -----------*/

// function getNewDiv(className,firstname,brdcolor,imgPath, bookId,book_id) {

//   var divv = "<a onclick='ShowDetailsOfUser("+bookId+");' style='cursor: pointer; margin-left: "+ leftPer +"%; width:"+ wdth +"%; min-width:100px; height:98%;'>" +
//                 "<div class="+ className +" id="+book_id +" style='  width: 100%; height: " + 20 + "%; top: "+ toptr +"%; background-color:#ffffff; float: left; border: 5px solid "+brdcolor+"; border-radius: 10px; vertical-align: middle; position: relative;'>" +
//                     "<div style='height: 100%; width:100%;' class='container'>" +
//                         "<img src='"+imgPath+"' alt='"+firstname+"' style='width: 100%; height: 100%;'>" +
//                         "<div class='overlay'>" +
//                             "<div class='text'>" +
//                                 "<p style='font-size: 14px;'> <u>" + firstname + "</u></p>" +
//                             "</div>" +
//                         "</div>" +
//                     "</div>" +
//                 "</div>" +
//              "</a>";
//   return divv;
// }



// function adddetails() {
//   var respList ;
//   spouseLst = [];
//   prntList = [];
//   spouseLst = convertResponseToUserList(SHRARRTSF());
//   for(i = 0; i < respList.length; i++) {
//     prntList.push(respList[i]);
//     if(respList[i].book_id == bookId) {
//         for(j = 0; j < spouseLst.length; j++) {
//             spouseLst[j].isSpouse = 1;
//             prntList.push(spouseLst[j]);
//         }
//     }
//   }
//   var node = document.getElementById("demo");
//   var index = 1;
//   node.innerHTML = "";

//   for(index = 1; index <= prntList.length; index++) {
//     var brdcolor = "#f2f2f2";
//     var imgPath =  "images/book_"+prntList[index-1].book_id+".png";
//     node.innerHTML += getNewDiv(DivId+index,prntList[index-1].book_name.split(" ")[0], brdcolor,imgPath,prntList[index-1].book_id ,book_id);
//   }
// }


//  function convertResponseToUser(input) {
//    var id;
//    var name;
//    try { id = input.book_id; } catch(err) { id = "-1" }
//    try { name = input.book_name; } catch(err) { name = "" }
//    console.log(id,name);
//    return new books(id, name);
//  }

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function()
//     {
//        if(this.readyState==4 && this.status == 200)
//        {
//           if(this.responseText!=null) {
//             result = this.responseText; 
//             response = JSON.parse(result);
//             var Lst = [];
//             for(i in response) {
//               Lst.push(convertResponseToUser(response[i]));
//               console.log(Lst[i]);
//           }
//           return Lst;
//           }
// 		   }
//     };
//     xhttp.open("GET","http://localhost:8080/library",true);
//     xhttp.setRequestHeader("Accept","application/json");
//     xhttp.setRequestHeader("Content-Type","application/json");
//     xhttp.send();

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
