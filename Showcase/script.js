const codeSchoolJSON = "https://cors-anywhere.herokuapp.com/http://www.codeschool.com/users/TomerBenRachel.json"

var completedCoursesArray = [];
var incompleteCoursesArray = [];
var badgesArray = [];

getJSON(codeSchoolJSON, function(err, data) {
  if (err !== null) {
   console.log("Error " + err);
  } 
  else
  {
   var user = data['user'];
   var avatar = user['avatar'];
   var total_score = user['total_score'];
   var courses = data['courses'];
   var completedCourses = courses['completed'];
   var inProgressCourses = courses['in_progress'];
   var badges = data['badges'];

   var userName = document.getElementById("codeSchoolUserName");
   userName.innerHTML = '- ' + '<a href= https://www.codeschool.com/users/TomerBenRachel target=_blank>' + user['username'] + '</a> -';
   var scoreHeader = document.getElementById("codeSchoolPoints");
   var scoreAsString = total_score.toString();
   var modifiedScore = "";
   for(var i = 0; i < scoreAsString.length; i++){
   		if(i !== 0 && i % 3 === 0){
   			modifiedScore += ",";
   		}
   		modifiedScore += scoreAsString[i];
   }

   scoreHeader.innerHTML = "Total Score : " + modifiedScore;
   createCompleteCourses(completedCourses);
   createIncompleteCourses(inProgressCourses);
   addBadgesToCourses(badges);
   transferBadges();
   setupDataInLists(completedCoursesArray, "codeSchoolCompleted");
   setupDataInLists(incompleteCoursesArray, "codeSchoolInProgress");
   countUp("codeSchoolPoints", "0", modifiedScore, 2000); 
  } // end else
});

function createCompleteCourses(sourceArray){
	var courseObj = {};
	 sourceArray.forEach(function(course){
   		courseObj['name'] = course['title'];
   		courseObj['url'] = course['url'];
   		courseObj['icon'] = course['badge'];
   		courseObj['badges'] = [];
   		completedCoursesArray.push(courseObj);
   		courseObj = {};
  	 });
}

function createIncompleteCourses(sourceArray){
	var courseObj = {};
	 sourceArray.forEach(function(course){
   		courseObj['name'] = course['title'];
   		courseObj['url'] = course['url'];
   		courseObj['icon'] = course['badge'];
   		courseObj['badges'] = [];
   		incompleteCoursesArray.push(courseObj);
   		courseObj = {};
   });
}

function addBadgesToCourses(badges){
	badges.forEach(function(badgeInfo){
   		var badgeName = badgeInfo['name'];
   		var indexOfLevel = badgeName.search("Level");
   		if(indexOfLevel >= 0){
   			var startOfCourseName = badgeName.indexOf("on");
   			var courseName = badgeName.substr(startOfCourseName+3);
   			courseName = courseName.trim();
   			var indexInBadgesArray = findInBadgesArray(courseName);
   			if(indexInBadgesArray > -1){
   				badgesArray[indexInBadgesArray]['badges'].push(badgeInfo['badge']);
   			}
   			else
   			{
   				var badgeObj = {};
   				badgeObj['name'] = courseName;
   				badgeObj['badges'] = [];
   				badgeObj['badges'].push(badgeInfo['badge']);
   				badgesArray.push(badgeObj);
   			}
   		}
   });
}

function findPlaceOfCourse(courseName){
	for(var i = 0; i < completedCoursesArray.length; i++){
		if(completedCoursesArray[i]['name'].toLowerCase() === courseName.toLowerCase()){
			return completedCoursesArray[i];
		}
	}
	for(var i = 0; i < incompleteCoursesArray.length; i++){

		if(incompleteCoursesArray[i]['name'].toLowerCase() === courseName.toLowerCase()){
			return incompleteCoursesArray[i];
		}
	}
	return null;
}

function printCourses(){
	completedCoursesArray.forEach(function(course){
		console.log("Course name " + course['name'] + " Course icon " + course['icon']);
		console.log("Course Badges : ");
		course['badges'].forEach(function(badgeInfo){
			console.log(badgeInfo);
		});
	});

	console.log("----------------------------------------------");

	incompleteCoursesArray.forEach(function(course){
		console.log("Course name " + course['name'] + " Course icon " + course['icon']);
		console.log("Course Badges ");
		course['badges'].forEach(function(badgeInfo){
			console.log(badgeInfo);
		});
	});

}

function findInBadgesArray(courseName){
	for(var i = 0; i < badgesArray.length; i++){
		var obj = badgesArray[i];
		if(obj['name'] === courseName){
			return i;
		}
	}
	return -1;
}

function transferBadges(){
	badgesArray.forEach(function(badgeObj){
		var courseName = badgeObj['name'];	
		var courseObj = findPlaceOfCourse(courseName);
		if(courseObj != null){
			courseObj['badges'] = badgeObj['badges'].reverse();
		}
	});
}

function setupDataInLists(arr, ulName){
	var ulToAddElementsTo = document.getElementById(ulName);

	arr.forEach(function(course){
		var badges = course['badges'];
		if(badges.length !== 0){
			var courseLi = document.createElement('li');
			courseLi.innerHTML = '<a href='+course['url']+'>'+course['name']+'</a>';
			var nestedDiv = document.createElement('div');
			badges.forEach(function(badge){
				var img = document.createElement('img');
				img.src = badge;
            img.className = "codeSchoolBadge"
				nestedDiv.appendChild(img);
			});
			
			courseLi.appendChild(nestedDiv);
			ulToAddElementsTo.appendChild(courseLi);
		}
	});

}
