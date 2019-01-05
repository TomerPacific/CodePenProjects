function showSearchResults(){
  var data = document.getElementById("searchField").value;
  var URL ="https://en.wikipedia.org//w/api.php?action=query&list=search&srsearch="+data+"&format=json&callback=?";
  $.getJSON(URL).done(success).fail(error);
}



function success(result)
{
  var li;
  var p;
  var header;
  var queryResults = result.query.search;
  var resultList = document.getElementById("resultList");

  resultList.innerHTML = "";

  for(var i = 0; i < queryResults.length; i++)
  {
    li = document.createElement("li")
    header = document.createElement("h2");
    var headerText = document.createTextNode(queryResults[i].title);
    header.appendChild(headerText);
    li.appendChild(header);
    p = document.createElement("p");
    p.innerHTML = queryResults[i].snippet;
    p.setAttribute("class", "snippets");
    li.appendChild(p);
    li.classList.add("article");
    resultList.appendChild(li);
  }


}

function error(err)
{
  console.log("Getting error when trying to use Wikipedia's API " + err);
}

