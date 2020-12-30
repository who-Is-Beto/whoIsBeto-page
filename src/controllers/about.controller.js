import views from '../views/about.html'

export default () => {

  const divElement = document.createElement('main')
  divElement.setAttribute("id", "about")

  divElement.innerHTML = views

  return divElement
}