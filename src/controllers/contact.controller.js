import views from '../views/contact.html'

export default () => {

  const divElement = document.createElement('main')
  divElement.setAttribute("id", "contact")

  divElement.innerHTML = views
  return divElement
}