var work = {
  jobs : [{
    employer : "UW Health",
    title : "Senior Web Developer",
    location : "Madison, WI",
    dates : "October 2012 - Present",
    description : "Back and front end development for internal and public web applications."
  }],
  display : function() {
    for (job in this.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployerTitle = formatDisplay(HTMLworkEmployer, this.jobs[job].employer) + formatDisplay(HTMLworkTitle, this.jobs[job].title);
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formatDisplay(HTMLworkLocation, this.jobs[job].location));
      $(".work-entry:last").append(formatDisplay(HTMLworkDates, this.jobs[job].dates));
      $(".work-entry:last").append(formatDisplay(HTMLworkDescription, this.jobs[job].description));
    }
  }

var projects = {
	projects : [
  {
    title : "Photo Release Gallery",
    dates : "October 2012 - July 2014",
    description : "Internal application to track photo releases for clients.",
    images : []
  }],
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

var bio = {
  name : "TJ Dooley",
  role : "Senior Web Developer",
  welcomeMessage : "Welcome to my resume page.  Thanks for checking it out.",
  contacts : {
  	mobile : "608-443-6064",
  	email : "tjdooley@gmail.com",
  	github : "tjdooley",
    twitter: "@tjdooley",
    location : "Middleton, WI"
  },
  skills : ["Java", "Spring", "Tomcat", "Web Applications", "SQL"],
  biopic : "images/fry.jpg",
  display : function() {
    $("#header").append(formatDisplay(HTMLheaderName, this.name)).append(formatDisplay(HTMLheaderRole, this.role));
    $("#header").append(formatDisplay(HTMLmobile, this.contacts.mobile));
    $("#header").append(formatDisplay(HTMLemail, this.contacts.email));
    $("#header").append(formatDisplay(HTMLgithub, this.contacts.github));
    $("#header").append(formatDisplay(HTMLtwitter, this.contacts.twitter));
    $("#header").append(formatDisplay(HTMLlocation, this.contacts.location));
  }
};


var education = {
  schools : [{
  	name : "UW Madison",
  	location : "Madison, WI",
  	degree : "BS",
  	majors : ["Computer Science"],
  	dates : "2003",
  	url : "http://www.wisc.edu"
  }],
  onlineCourses : [],
  display : function() {}
};

function formatDisplay(original, replacement) {
  return original.replace('%data%', replacement);
}

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

bio.display();
work.display();

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	$('#skills').append(HTMLskills.replace('%data%', bio.skills));
}

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

