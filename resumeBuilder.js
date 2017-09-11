//biography json object
var bio = {
    "name": "Prateek Porwal",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9035187531",
        "email": "porwalp25@gmail.com",
        "twitter": "@prateek",
        "github": "myPortfolio",
        "location": "Bengaluru"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Hello! Welcome to my Resume",
    "skills": ["HTML", "CSS", "JavaScript", "Arduino"]
};

//display skills function

function displaySkills() {
    if (bio.skills.length > 0) {
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(formattedSkill);
        }
    }
}

//display biography
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedBioPic);



    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedLocation);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGitHub);

    $("#header").append(formattedWelcomeMessage);


    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedLocation);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGitHub);

    $("#header").append(HTMLskillsStart);
    displaySkills();

};

//function call to diaplay bio
bio.display();




//work json object
var work = {
    "jobs": [{
        "title": "Associate Trainee Engineer",
        "employer": "Infosys",
        "dates": "Sep 2017 - Future",
        "location": "Mysore,Karnataka",
        "description": "Working as a trainee learning many new technical skills in web development."
    }]
};
//display work function
work.display = function() {
    for (var item = 0; item < work.jobs.length; item++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
        //$("#workExperience").append(formattedEmployer);
        var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[item].title);
        var formattedEmployerTitle = formattedEmployer + "   " + formattedPosition;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedyearsWorked = HTMLworkDates.replace("%data%", work.jobs[item].dates);
        $(".work-entry:last").append(formattedyearsWorked);

        var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[item].location);
        $(".work-entry:last").append(formattedCity);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

//project object
var projects = {
    "projects": [{
            "title": "IoT: Home Automation",
            "dates": "May 2017",
            "description": "This project presents the overall design of Home Automation System (HAS) with low cost and wireless system",
            "images": ["images/light-control.svg"]
        },
        {
            "title": "Animal Trading Card",
            "dates": "Aug 2017",
            "description": "This project makes the animal tading cards applying concepts of HTML and CSS",
            "images": ["images/frog.svg"]
        }
    ]
};

//display project
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);


        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formattedURL = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedURL);
        }
    }

};
//call display project
projects.display();

$("main").append(projects.title);

//education json object
var education = {
    "schools": [{
            "name": "B.R. Birla Public School",
            "location": "Pali,Rajasthan",
            "degree": "Secondary School",
            "majors": ["English", "Hindi", "Social Science", "Science", "Maths"],
            "dates": "1997-2010",
            "url": "akalsaklsakl.in"
        },
        {

            "name": "Emmanuael Mission Public School",
            "location": "Pali,Rjasthan",
            "degree": "Senior Secondaary School",
            "majors": ["Physics", "Chemistry", "Maths"],
            "dates": "2011-2012",
            "url": "akalsaklsakl.in"

        },
        {
            "name": "Bangalore Institute of Technology",
            "location": "Bengaluru",
            "degree": "B.E",
            "majors": ["Computer Science"],
            "dates": "2013-2017",
            "url": "bitbangalore.com"
        }
    ],
    "onlineCourses": [{
        "title": "Udacity FrontEnd Developer",
        "school": "Udacity",
        "dates": "pursuing",
        "url": "udacity.com"
    }]
};

//display online course
function displayOnlineCourse() {
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        $(".education-entry:last").append(formattedOnlineTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedURL);
    }
}

//display education

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        for (var j = 0; j < education.schools[i].majors.length; j++) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
    displayOnlineCourse();

};
education.display();




$("#mapDiv").append(googleMap);

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#main").append(internationalizeButton);


function inName(oldName) {
    var newName = oldName.split(" ");
    var firstName = newName[0].slice(0, 1).toUpperCase() + newName[0].slice(1).toLowerCase();
    var lastName = newName[1].toUpperCase();
    var internationalizeName = firstName + " " + lastName;
    return internationalizeName;
}


//reducing size of project images
var project = $("#projects");
var imgTag = project.find('img');
var shortIMG = imgTag.css({
    "max-width": "200px",
    "max-height": "200px"
});

//add shadow on mouse over

shortIMG.hover(function() {
        $(this).css({
            "box-shadow": "10px 10px 10px #888888"
        });
    },
    function() {
        $(this).css({
            "box-shadow": ""
        });
    });