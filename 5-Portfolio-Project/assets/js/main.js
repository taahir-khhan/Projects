/*===== MENU SHOW Y HIDDEN =====*/

const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')
const navMenu = document.getElementById('nav-menu')

// SHOW

toggleMenu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
})

// HIDDEN

closeMenu.addEventListener('click', () => {
      navMenu.classList.remove('show')
})


/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll('.nav__links')

function linkAction() {
      navMenu.classList.remove('show')
}

navLinks.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
