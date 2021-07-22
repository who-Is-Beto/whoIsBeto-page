import Home from './home.controllers'
import Projects from './projects.controller'
import notFound from './404.controller'
import About from './about.controller'
import Contact from './contact.controller'

const pages = {
  home: Home,
  about: About,
  projects: Projects,
  notFound: notFound,
  contact: Contact,
}

export { pages }