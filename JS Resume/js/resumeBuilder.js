 var bio = {
    "name": "Niklas Donges",
    "role": "Web Developer",
    "contacts": {
        "mobile": "015141233439",
        "email": "n.donges@gmx.de",
        //"github": "NiklasDonges",
        //"twitter": "None",
        "location": "Marburg, Germany"
    },
    "welcomeMessage": "",
    "skills": [
    "always on time", "reliable", "competent", "communicative"],
    "biopic": "http://www.clker.com/cliparts/d/L/P/X/z/i/no-image-icon-md.png"
};

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var projects = {
    "projects": [
    {
        "title":"einlagen-sicherheitsschuhe-donges.de",
        "location":"Biedenkopf",
        "dates":"2017",
        "images": ["http://einlagen-sicherheitsschuhe-donges.de/project.png"],
        "description": "Website for a local business with 6 pages, build up with HTML, CSS and JavaScript."
    },
    {
        "title":"Google Maps Web Application",
        //"location":"",
        "dates":"2017",
        "images": ["http://einlagen-sicherheitsschuhe-donges.de/web-app.png"],
        "description": "A single page application featuring a map of Marburg with highlighted locations, Google StreetView image and Wikipedia article. I used the KnockoutJS Framework and third-party APIs that provide the data sets."
    },
    {
        "title":"Arcade Game Frogger",
        //"location":"",
        "dates":"2017",
        "images": [""],
        "description": "I developed my own version of the classical arcade game Frogger using Object Oriented Javascript."
    },
   ]
};

var education = {
    "schools": [
    {
        "name":"Stadtschule",
        "location":"Biedenkopf",
        "degree":"mittlere Reife",
        "dates":"2013",
        "majors":["heyeins"],
        "url":"www.de"
    },
    {
        "name":"Fachoberschule",
        "location":"Biedenkopfzwei",
        "degree":"Fachhochschulreife",
        "dates":"2015",
        "majors":["heyeins"],
        "url":"www.de"
    }
    ],
    "onlineCourses": [
    {
        "title":"Front-End Web Developer Nanodegree",
        "school":"Udacity",
        "dates":"2017",
        "url":"www.udacity.de"
    }
  ]
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Software-Developer");
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", "Niklas Donges");
    $("#header").prepend(formattedName);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    var formattedname = HTMLmobile.replace("%data%", bio.contacts.mobile );
    $("#topContacts").append(formattedname);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email );
    $("#topContacts").append(formattedemail);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github );
    //$("#topContacts").append(formattedgithub);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter );
    //$("#topContacts").append(formattedtwitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location );
    $("#topContacts").append(formattedlocation);
    var formattedworkDescription = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage );
    $("#header").append(formattedworkDescription);
$("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0] );
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1] );
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2] );
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3] );
    $("#skills").append(formattedSkill);
    var formattedname = HTMLmobile.replace("%data%", bio.contacts.mobile );
    $("#footerContacts").append(formattedname);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email );
    $("#footerContacts").append(formattedemail);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github );
    //$("#footerContacts").append(formattedgithub);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter );
    //$("#footerContacts").append(formattedtwitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location );
    $("#footerContacts").append(formattedlocation);
}

work.display = function() {
for (var i= 0; i < work.jobs.length; i++) {
   /* $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);*/
}
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

$("#mapDiv").append(googleMap);

projects.display = function() {
        for (var i= 0; i < projects.projects.length; i++){
        $("#projects").append(HTMLprojectStart);    
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[i]);
        $(".project-entry:last").append(formattedImage); 
        //var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[i]);
        //$(".project-entry:last").append(formattedImage); 
        };
}

education.display = function() {
    for (var i= 0; i < education.schools.length; i++){
   /* $("#education").append(HTMLschoolStart);
    var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedschoolTitle = formattedschoolname + formattedschooldegree;
    $(".education-entry:last").prepend(formattedschoolTitle);
    var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedschooldates);
    var formattedschoolcity = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedschoolcity);
    var formattedschollmajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    $(".education-entry:last").append(formattedschollmajors);*/
    }
    for (var i= 0; i < education.onlineCourses.length; i++){
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedonlineschoolTitle = formattedonlineTitle + formattedonlineSchool;
    $(".education-entry:last").append(formattedonlineschoolTitle);
    var formattedonlineschooldates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedonlineschooldates);
    var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedonlineUrl);
}
}

bio.display();
work.display();
projects.display();
education.display();

