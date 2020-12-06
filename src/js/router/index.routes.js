import { pages } from '../../controllers/index'

let APP = document.getElementById('root')

const router = (route) => {

  APP.innerHTML = ''
  console.log(route)

  switch (route) {
    case '#/': {
      return APP.appendChild(pages.home())
    }

    case '#/about': {
      return console.log('#/about')
    }

    case '#/projects': {
      return APP.appendChild(pages.projects())
    }

    case '#/contact': {
      return console.log('#/contact')
    }

    default: {
      return console.log('ERROR 404 NOT FOUND')
    }

  }
}

export { router }