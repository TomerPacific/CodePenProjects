const udemyClientID = 'cavNLmqcFxQDyt7a5uDrCrEpho6mKh9sDetXXCKQ';
const udemyKey = '  CbnWRzHyM0J5kRH0EbDbvneHo69RbybPaN3iNbCAIR1paYmkNPnb12DLMaxPDUFATlfiq9BqVfJkUi9W6X58IaymL6ZA35gynObfx80cvW3DCJS5V00uCrMjKf46yOrD';

const apiCall = 'https://cors-anywhere.herokuapp.com/http://www.udemy.com/api-2.0/';


function getUdemyData(){

    var http = new XMLHttpRequest();
    var url = apiCall;
    var params = '';
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    

    http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
         }
    }
    http.send(params);
  //   $.ajax({
  //           url: 'https://cors-anywhere.herokuapp.com/http://www.udemy.com/api-2.0/courses',
  //           beforeSend: function(xhr) {
  //                xhr.setRequestHeader("Authorization", 'X-Udemy-Client-Id: {'+udemyClientID+'}','X-Udemy-Client-Secret: {'+udemyKey+'}')
  //               //process the JSON data etc
  //           }, success : function(data){
  //           	alert(data);
  //           }
  //   });
}