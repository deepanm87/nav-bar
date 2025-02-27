const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const navHome = document.getElementById('nav-home')
const navAbout = document.getElementById('nav-about')
const navSkills = document.getElementById('nav-skills')
const navProjects = document.getElementById('nav-projects')
const navContact = document.getElementById('nav-contact')

function toggleNav() {
    menuBars.classList.toggle('change')
    overlay.classList.toggle('overlay-active')
    if(overlay.classList.contains('overlay-active')) {
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
    } else {
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
    }
}

menuBars.addEventListener('click', toggleNav)
navHome.addEventListener('click', toggleNav)
navAbout.addEventListener('click', toggleNav)
navSkills.addEventListener('click', toggleNav)
navProjects.addEventListener('click', toggleNav)
navContact.addEventListener('click', toggleNav)

