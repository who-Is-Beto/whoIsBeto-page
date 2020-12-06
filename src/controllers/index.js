import Home from './home.controllers'
import Projects from './projects.controller'
import notFound from './404.controller'

const pages = {
  home: Home,
  projects: Projects,
  notFound: notFound,

}

export { pages }