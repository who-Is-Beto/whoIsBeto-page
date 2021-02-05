import views from '../views/projects.html'

export default () => {

  const homeIcon = document.getElementById('PROJECTS__ICON')
  homeIcon.setAttribute("class", "nav__item-active")

  const divElement = document.createElement('main')
  divElement.setAttribute("id", "projects")

  divElement.innerHTML = views
  return divElement
}