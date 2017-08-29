function showSearchResults(){
  var data = document.getElementById("searchField").value;
  var URL ="http://en.wikipedia.org//w/api.php?action=query&list=search&srsearch="+data+"&format=json&callback=?";
  $.getJSON(URL).done(success).fail(error);
}



function success(result)
{
  var li;
  var p;
  var queryResults = result.query.search;
  var resultList = document.getElementById("resultList");
  for(var i = 0; i < queryResults.length; i++)
  {
    li = document.createElement("li");
    li.appendChild(document.createTextNode(queryResults[i].title));
    p = document.createElement("p");
    p.innerHTML = queryResults[i].snippet;
    p.setAttribute("class", "snippets");
    li.appendChild(p);
    resultList.appendChild(li);
  }


}

function error(err)
{
  console.log("Getting error when trying to use Wikipedia's API");
}

