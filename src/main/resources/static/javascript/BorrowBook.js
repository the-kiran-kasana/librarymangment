
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


