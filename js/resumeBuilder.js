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
};

var projects = {
	projects : [
  {
    title : "Photo Release Gallery",
    dates : "October 2012 - July 2013",
    description : "Created internal application to track photo releases for clients.  Utilized Java, Stripes, Hibernate, SQL Server, and JSP pages.",
    images : ["images/197x148.gif", "images/197x148.gif"]
  },
  {
  	title : "Cybersale",
  	dates : "July 2013 - November 2013",
  	description : "Developed an internal Craigslist-like app for company use.  Utilized Java, Spring, MyBatis, SQL Server, and JSP pages.",
    images : ["images/197x148.gif"]
  }],
	display : function() {
		for (proj in this.projects) {
			$('#projects').append(HTMLprojectStart);

			$(".project-entry:last").append(formatDisplay(HTMLprojectTitle, this.projects[proj].title));
			$(".project-entry:last").append(formatDisplay(HTMLprojectDates, this.projects[proj].dates));
			$(".project-entry:last").append(formatDisplay(HTMLprojectDescription, this.projects[proj].description));

			for (image in this.projects[proj].images) {
				$(".project-entry:last").append(formatDisplay(HTMLprojectImage, this.projects[proj].images[image]));
			}
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
  skills : ["Java", "Spring", "Tomcat", "Web Applications", "SQL", "JSP", "Hibernate", "MyBatis"],
  biopic : "images/fry.jpg",
  display : function() {

  	var contactRow = formatDisplay(HTMLmobile, this.contacts.mobile) +
		formatDisplay(HTMLemail, this.contacts.email) +
		formatDisplay(HTMLgithub, this.contacts.github) +
		formatDisplay(HTMLtwitter, this.contacts.twitter) +
		formatDisplay(HTMLlocation, this.contacts.location);

    $("#header").prepend(formatDisplay(HTMLheaderRole, this.role)).prepend(formatDisplay(HTMLheaderName, this.name));
    $("#topContacts").append(contactRow);
    $("#footerContacts").append(contactRow);

    $("#header").append(formatDisplay(HTMLbioPic, this.biopic));
    $("#header").append(formatDisplay(HTMLWelcomeMsg, this.welcomeMessage));

    $("#header").append(HTMLskillsStart)
    for (skill in this.skills) {
    	$("#skills").append(formatDisplay(HTMLskills, this.skills[skill]));
    }

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
  onlineCourses : [{
  	title: "Front-End Web Developer Nanodegree",
  	school: "Udacity",
  	date: "2015",
  	url: "http://www.udacity.com"
  }],
  display : function() {
  	for (school in this.schools) {
  		$("#education").append(HTMLschoolStart);
  		$(".education-entry:last").append(formatDisplay(HTMLschoolName, this.schools[school].name));
  		$(".education-entry:last").append(formatDisplay(HTMLschoolDegree, this.schools[school].degree));
  		$(".education-entry:last").append(formatDisplay(HTMLschoolDates, this.schools[school].dates));
  		$(".education-entry:last").append(formatDisplay(HTMLschoolLocation, this.schools[school].location));
  		$(".education-entry:last").append(formatDisplay(HTMLschoolMajor, this.schools[school].majors));
  	}

  	$(".education-entry:last").append(HTMLonlineClasses);

  	for (course in this.onlineCourses) {
  		$(".education-entry:last").append(formatDisplay(HTMLonlineTitle, this.onlineCourses[course].title));
  		$(".education-entry:last").append(formatDisplay(HTMLonlineSchool, this.onlineCourses[course].school));
  		$(".education-entry:last").append(formatDisplay(HTMLonlineDates, this.onlineCourses[course].date));
  		$(".education-entry:last").append(formatDisplay(HTMLonlineURL, this.onlineCourses[course].url));
  	}
  }
};

//Utility method for string replacement
function formatDisplay(original, replacement) {
  return original.replace('%data%', replacement);
}

//internationalize name
function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);