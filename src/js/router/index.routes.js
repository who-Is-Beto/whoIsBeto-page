import { pages } from '../../controllers/index'

let APP = document.getElementById('root')
const router = async (route) => {
  APP.innerHTML = ''
  console.log(route)

  switch (route) {

    case '': {
      window.footer.style.marginTop = "0px"
      return APP.appendChild(pages.home())
    }
    case '#/': {
      window.footer.style.marginTop = "0px"
      return APP.appendChild(pages.home())
    }

    case '#/about': {
      window.footer.style.marginTop = "0px"
      return APP.appendChild(pages.about())
    }

    case '#/projects': {
      window.footer.style.position = "static";
      return APP.appendChild(await pages.projects())
    }

    case '#/projects/2': {
      window.footer.style.position = "static";
      return APP.appendChild(await pages.projects2())
    }

    case '#/contact': {
      window.footer.style.marginTop = "0px"
      return console.log('#/contact')
    }

    default: {
      window.footer.style.marginTop = "0px"
      return console.log('ERROR 404 NOT FOUND')
    }

  }
}

export { router }