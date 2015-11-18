// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

var bio = {
  "name": "Ayima Okeeva",
  "role": "Front End Developer",
  "contacts": {
    "mobile": "00418889900",
    "email": "ayima.okeeva@gmail.com",
    "github": "https://github.com/ayimaster",
    "twitter": "@ayimaster",
    "location": "Lausanne, Switzerland"
  },
  "welcomeMessage": "Welome to my page!",
  "bioPic": "images/fry.jpg",
  "skills": ["HTML", "CSS", "JavaScript", "Github"],
};

bio.display = function () {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGitHub);
  $("#topContacts").append(formattedtwitter);
  $("#topContacts").append(formattedLocation);

  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGitHub);
  $("#footerContacts").append(formattedtwitter);
  $("#footerContacts").append(formattedLocation);

  $("#header").append(formattedMessage);
  $("#header").prepend(formattedbioPic);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      var skillsSet = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(skillsSet);
    }
  }
};

bio.display();

var education = {
  "schools": [
    {
      "name": "American University of Central Asia",
      "location": "Bishkek, Kyrgyzstan",
      "degree": "Bachelor of Arts",
      "majors": "American Studies",
      "years": "1999-2003",
      "url": "https://www.auca.kg/"

    },
    {
      "name": "Palacky University",
      "location": "Olomouc, Czech Republic",
      "degree": "Masters of Arts",
      "majors": "European Institutions",
      "years": "2006-2008",
      "url": "www.upol.cz/en/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "September 2015 - present",
      "url": "https://www.udacity.com/",
      "location": "Nyon, Switzerland"
    },
    {
      "title": "Web Development",
      "school": "Treehouse",
      "dates": "February 2015 - present",
      "url": "https://www.treehouse.com/",
      "location": "Switzerland"
  }
  ]
};

education.display = function () {
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var educationName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var educationLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    var educationDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var educationMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    var educationYears = HTMLschoolDates.replace("%data%", education.schools[i].years);

    $(".education-entry:last").append(educationName);
    $(".education-entry:last").append(educationLocation);
    $(".education-entry:last").append(educationDegree);
    $(".education-entry:last").append(educationMajors);
    $(".education-entry:last").append(educationYears);
  }
  $("#education").append(HTMLonlineClasses);
  for (var i = 0; i < education.onlineCourses.length; i++) {
    $("#education").append(HTMLschoolStart);


    var onlineCoursesTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var onlineCoursesSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var onlineCoursesDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    var onlineCoursesURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

    $(".education-entry:last").append(onlineCoursesTitle);
    $(".education-entry:last").append(onlineCoursesSchool);
    $(".education-entry:last").append(onlineCoursesDates);
    $(".education-entry:last").append(onlineCoursesURL);
  }
};
education.display();


var work = {
  "jobs": [
    {
      "employer": "WIPO/UPOV",
      "title": "Consultant",
      "location": "Geneva, Switzerland",
      "dates": "03/2015-06/2015",
      "description": "Consultant"
    },
    {
      "employer": "IOM",
      "title": "Senior Research and Data Analysis Coordinator",
      "location": "Geneva, Switzerland",
      "dates": "02/2014-09/2014",
      "description": "Consultant"
    },
    {
      "employer": "UNECE",
      "title": "Project Officer",
      "location": "Geneva, Switzerland",
      "dates": "2009-2012",
      "description": "Consultant"
    }
  ]
};



work.display = function () {
  $('#workExperience').append(HTMLworkStart);
  if (work.jobs.length > 0) {
    for (var i = 0; i < work.jobs.length; i++) {
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

      $(".work-entry:last").append(formattedWorkEmployer);
      $(".work-entry:last").append(formattedWorkTitle);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkDescription);
    }
  }
};
work.display();


var recentProjects = {
  "webProjects": [
    {
      "title": "Udacity Projects",
      "date": "September 2015",
      "description": "First project for the Udacity Front End Nano Degree",
      "images": "images/project2.png"
    },
    {
      "title": "Non-profit",
      "date": "July 2015 - present",
      "description": "Development of a website for T. Okeev Public Foundation",
      "images": "images/project1.png"
    },
    {
      "title": "Tests",
      "date": "June 2015",
      "description": "Commercial Products",
      "images": "images/project3.png"
    }
  ]
};


recentProjects.display = function() {
  for (var i = 0; i < recentProjects.webProjects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var projectTitle = HTMLprojectTitle.replace("%data%", recentProjects.webProjects[i].title);
    var projectDate = HTMLprojectDates.replace("%data%", recentProjects.webProjects[i].date);
    var projectDescription = HTMLprojectDescription.replace("%data%", recentProjects.webProjects[i].description);
    var projectImages = HTMLprojectImage.replace("%data%", recentProjects.webProjects[i].images);

    $(".project-entry:last").append(projectTitle);
    $(".project-entry:last").append(projectDate);
    $(".project-entry:last").append(projectDescription);
    $(".project-entry:last").append(projectImages);
  }
};
recentProjects.display();




//$("#main").append(internationalizeButton);
//
//
//function inName(name) {
//	var name = bio.name.split(" ");
//	var lastNameCap = name[1].toUpperCase();
//	var firstName = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//	fullName = firstName + " " + lastNameCap;
//	return fullName;
//};


$("#mapDiv").append(googleMap);