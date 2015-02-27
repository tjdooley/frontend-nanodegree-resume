var work = {
	jobs : []
};

work.jobs.push({
	employer : "UW Health",
	title : "Senior Web Developer",
	location : "Madison",
	dates : "October 2013 - Present",
	description : "Work on a variety of web applications."
});

var projects = {
	projects : [],
	display : function() {
		for (proj in this.projects) {
			$('#projects').append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace('%data%', this.projects[proj].title);
			var formattedDates = HTMLprojectDates.replace('%data%', this.projects[proj].dates);
			var formattedDescription = HTMLprojectDescription.replace('%data%', this.projects[proj].description);

			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
		}
	}
};

projects.projects.push({
	title : "Photo Release Gallery",
	dates : "October 2013 - July 2014",
	description : "",
	images : []
});

var bio = {
	name : "TJ Dooley",
	role : "Senior Web Developer",
	welcomeMessage : "Welcome",
	contacts : {
		mobile : "608-443-6064",
		email : "tjdooley@gmail.com"
	},
	skills : ["Java"]
};

var education = {
	schools : [{
		name : "UW Madison",
		location : "Madison",
		degree : "BS",
		majors : ["Computer Science"],
		dates : "August 1998 - May 2003",
		url : "http://www.wisc.edu"
	}],
	onlineCourses : []
};

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	$('#skills').append(HTMLskills.replace('%data%', bio.skills));
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

$(document).click(function(loc) { 
	logClicks(loc.pageX, loc.pageY);
});

$('#main').append(internationalizeButton);

function inName() {
	var parts = bio.name.split(" ");
	parts[0] = parts[0].slice(0,1).toUpperCase() + parts[0].slice(1);
	parts[1] = parts[1].toUpperCase();
	return parts[0].concat(' ').concat(parts[1]);
}

projects.display();

$("#mapDiv").append(googleMap);