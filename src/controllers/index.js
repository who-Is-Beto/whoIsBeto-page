import Home from './home.controllers'
import Projects from './projects.controller'
import Projects2 from './projects2.controller'
import notFound from './404.controller'
import About from './about.controller'

const pages = {
  home: Home,
  about: About,
  projects: Projects,
  notFound: notFound,
  projects2: Projects2,
}

export { pages }