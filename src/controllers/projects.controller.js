import views from '../views/projects.html'
import data from '../../db.json'
export default () => {

  const divElement = document.createElement('main')
  divElement.setAttribute("id", "projects")

  divElement.innerHTML = views

  const projectsList = divElement.querySelector('#projects__list')
  const NProjects = divElement.querySelector('#projects__number')

  NProjects.innerHTML = `${data.projects.length}`

  data.projects.map((prj) => {
    projectsList.innerHTML += `
    <li class = 'project__item fadeInUp' >
      <div class="project__card">
        <img src=${prj.image} alt="${prj.name} photo" />
        <div class="project__info">
          <h3>${prj.name}</h3>
          <p>${prj.description}</p>
          <a class="project__btn" href=${prj.link}>Visit ${prj.name}!</a>
        </div>
      </div>
    </li>
    `
  })

  return divElement
}