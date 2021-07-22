const HOME = document.querySelector('#HOME')
const ABOUT = document.querySelector('#ABOUT')
const PROJECTS = document.querySelector('#PROJECTS')
const CONTACT = document.querySelector('#CONTACT')

export default function removeStyles() {

  HOME.classList.remove('nav__item-active')
  ABOUT.classList.remove('nav__item-active')
  PROJECTS.classList.remove('nav__item-active')
  CONTACT.classList.remove('nav__item-active')
}