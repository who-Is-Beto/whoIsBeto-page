import { pages } from '../../controllers/index'
import removeStyles from '../removeStyles'

const APP = document.getElementById('root')

const router = async (route) => {
  APP.innerHTML = ''
  removeStyles()
  switch (route) {

    case '' || '#/': {
      HOME.classList.add('nav__item-active')
      return APP.appendChild(pages.home())
    }

    case '#/about': {
      ABOUT.classList.add('nav__item-active')
      return APP.appendChild(pages.about())
    }

    case '#/projects': {
      PROJECTS.classList.add('nav__item-active')
      return APP.appendChild(await pages.projects())
    }

    case '#/contact': {
      CONTACT.classList.add('nav__item-active')
      return APP.appendChild(pages.contact())
    }

    default: {
      return console.log('ERROR 404 NOT FOUND')
    }

  }
}

export { router }

