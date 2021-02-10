import views from '../views/projects.html'

export default () => {

  const divElement = document.createElement('main')
  divElement.setAttribute("id", "projects")

  divElement.innerHTML = views
  return divElement
}