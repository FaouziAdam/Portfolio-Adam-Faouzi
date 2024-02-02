// Changement d'arrire plan :

function backGroundChange4(){
    let backGroundVideo = document.getElementById('myVideo');
    let sourceVideo = document.getElementById('videoSource'); 

    sourceVideo.src= './BGVideos/pexels_videos_2324166 (2160p).mp4';
    backGroundVideo.load();
}

function backGroundChange2(){
    let backGroundVideo = document.getElementById('myVideo');
    let sourceVideo = document.getElementById('videoSource');

    sourceVideo.src= './BGVideos/video (2160p) (1).mp4';
    backGroundVideo.load();
}

function backGroundChange1(){
    let backGroundVideo = document.getElementById('myVideo');
    let sourceVideo = document.getElementById('videoSource');

    sourceVideo.src= './BGVideos/video (2160p).mp4';
    backGroundVideo.load();
}

// Affichage Nom :

function animateText(elementId, text) {
    var element = document.getElementById(elementId);
    element.innerHTML = "";

    for (var i = 0; i < text.length; i++) {
        setTimeout(function (index) {
            return function () {
                element.innerHTML += text[index];
            };
        }(i), i * 150);
    }
}

function revealText(elementId) {
    var element = document.getElementById(elementId);
    element.style.opacity = 1;
    element.style.transform = "translateY(0)";
}

setTimeout(function () { animateText("name", "Ahmed Adam FAOUZI"); revealText("name"); }, 0);
setTimeout(function () { animateText("role1", "Full Stack Developer | Software Engineer | Business Analyst"); revealText("role1"); }, 2000);


// Affichage et fermeture des rubriques : 

// ============================= ABOUT ============================= 

function displayAbout(){
    let contentAbout = document.getElementById('about');
    let titleContent = document.getElementById('containerHome');
    
    closeDisplayResume();
    closeDisplaySkills();
    closeDisplayProjects();
    closeDisplayContact();

    contentAbout.style.transform='translateY(0)';
    contentAbout.style.opacity='0.8';
    contentAbout.style.transition='transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
        
    titleContent.style.alignItems = 'flex-start';
}

function closeDisplayAbout(){
    let contentAbout = document.getElementById('about');
    let titleContent = document.getElementById('containerHome');
    
    contentAbout.style.transition='transform 1.5s, opacity 1.5s';
    contentAbout.style.transform='translateY(-100%)';
    contentAbout.style.opacity='0';

    titleContent.style.alignItems = 'center';
}

// ============================ RESUME ================================ 

function displayResume(){
    let contentResume = document.getElementById('resume');
    let titleContent = document.getElementById('containerHome');

    closeDisplayAbout();
    closeDisplaySkills();
    closeDisplayProjects();
    closeDisplayContact();

    contentResume.style.transform='translateY(0)';
    contentResume.style.opacity='0.8';
    contentResume.style.transition='transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
    
    titleContent.style.alignItems = 'flex-start';
}

function closeDisplayResume(){
    let contentResume = document.getElementById('resume');
    let titleContent = document.getElementById('containerHome');
    
    contentResume.style.transition='transform 1.5s, opacity 1.5s';
    contentResume.style.transform='translateY(-150%)';
    contentResume.style.opacity='0';

    titleContent.style.alignItems = 'center';
}

// ============================ SKILLS ================================

function displaySkills(){
    let contentSkills = document.getElementById('skills');
    let titleContent = document.getElementById('containerHome');

    closeDisplayAbout();
    closeDisplayResume();
    closeDisplayProjects();
    closeDisplayContact();

    contentSkills.style.transform='translateY(0)';
    contentSkills.style.opacity='0.8';
    contentSkills.style.transition='transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
    
    titleContent.style.alignItems = 'flex-start';
}

function closeDisplaySkills(){
    let contentSkills = document.getElementById('skills');
    let titleContent = document.getElementById('containerHome');
    
    contentSkills.style.transition='transform 1.5s, opacity 1.5s';
    contentSkills.style.transform='translateY(-150%)';
    contentSkills.style.opacity='0';

    titleContent.style.alignItems = 'center';
}

// ============================ PROJECTS ===============================

function displayProjects(){
    let contentProjects = document.getElementById('projects');
    let titleContent = document.getElementById('containerHome');

    closeDisplayAbout();
    closeDisplayResume();
    closeDisplaySkills();
    closeDisplayContact();

    contentProjects.style.transform='translateY(0)';
    contentProjects.style.opacity='0.8';
    contentProjects.style.transition='transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
    
    titleContent.style.alignItems = 'flex-start';
}

function closeDisplayProjects(){
    let contentProjects = document.getElementById('projects');
    let titleContent = document.getElementById('containerHome');
    
    contentProjects.style.transition='transform 1.5s, opacity 1.5s';
    contentProjects.style.transform='translateY(-150%)';
    contentProjects.style.opacity='0';

    titleContent.style.alignItems = 'center';
}

// ============================ CONTACT ===============================

function displayContact(){
    let contentContact = document.getElementById('contact');
    let titleContent = document.getElementById('containerHome');

    closeDisplayAbout();
    closeDisplayResume();
    closeDisplaySkills();
    closeDisplayProjects();

    contentContact.style.transform='translateY(0)';
    contentContact.style.opacity='0.8';
    contentContact.style.transition='transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
    
    titleContent.style.alignItems = 'flex-start';
}

function closeDisplayContact(){
    let contentContact = document.getElementById('contact');
    let titleContent = document.getElementById('containerHome');
    
    contentContact.style.transition='transform 1.5s, opacity 1.5s';
    contentContact.style.transform='translateY(-150%)';
    contentContact.style.opacity='0';

    titleContent.style.alignItems = 'center';
}

