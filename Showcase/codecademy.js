const codecademyJSON = "https://cors-anywhere.herokuapp.com/http://www.codecademy.com/api/v1/users/tomerpacific/achievements.json13";
const codecademyPoints = 1571;
const skills = ["Make A Website", "Learn SQL", "Learn Sass", "Learn ReactJS : Part 1", "Learn The Command Line", "Learn Javascript", "Learn Git"];

function publishSkills(){
	var skillsParagraph = document.getElementById("skills");
	skills.forEach(function(skill, index, array){
		if(index === array.length - 1){
			skillsParagraph.innerHTML += skill;
		}
		else
		{
			skillsParagraph.innerHTML += skill + " | ";
		}
		
	});
}

function publishLessons(badges){
	var lessonsCompletedUl = document.getElementById("codecademyCompleted");
	badges.forEach(function(badge){
		var lessonLi = document.createElement("li");
		if(badge['name'].search("Lesson") >= 0){
			lessonLi.innerHTML = badge['name'];
			lessonsCompletedUl.appendChild(lessonLi);
		}
   });
}