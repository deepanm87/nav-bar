const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const navHome = document.getElementById('nav-home')
const navAbout = document.getElementById('nav-about')
const navSkills = document.getElementById('nav-skills')
const navProjects = document.getElementById('nav-projects')
const navContact = document.getElementById('nav-contact')
const navItems = [navHome, navAbout, navSkills, navProjects, navContact]

function navAnimation(directionOne, directionTwo) {
    navItems.forEach( (navItem, i) => {
        navItem.classList.replace(`slide-${directionOne}-${i + 1}`, `slide-${directionTwo}-${i + 1}`)
    })

}

function toggleNav() {
    menuBars.classList.toggle('change')
    overlay.classList.toggle('overlay-active')
    if(overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        navAnimation('out', 'in')
        
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        navAnimation('in', 'out')
    }
}

menuBars.addEventListener('click', toggleNav)
navItems.forEach(navItem => {
    navItem.addEventListener('click', toggleNav)
})

