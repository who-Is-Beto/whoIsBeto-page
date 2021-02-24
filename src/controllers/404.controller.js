import views from '../views/404.html'

export default () => {

  const divElement = document.createElement('main')
  divElement.setAttribute("id", "notfound")

  divElement.innerHTML = views

  return divElement
}