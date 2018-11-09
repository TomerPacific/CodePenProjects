let otherParagraph = document.querySelector("#leftDiv")

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
 
    ev.target.appendChild(document.getElementById(data));

    console.log(ev.target);

    let paragraph = event.target.querySelector("p");
    var temp = otherParagraph.innerHTML
    otherParagraph.innerHTML = paragraph.innerHTML;
    paragraph.innerHTML = temp;

    otherParagraph = paragraph;
  
}

function allowDrop(ev) {
    ev.preventDefault();
}