import '../styles/index.scss'
import { router } from './router/index.routes'

const init = () => {
  router(window.location.hash);

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
};

const categoriesButton = document.querySelectorAll('#nav .nav__button')
categoriesButton.forEach((item) => {
  item.addEventListener('click', (event) => {
    categoriesButton.forEach((element) => {
      console.log('removing')
      element.classList.remove('nav__item-active')
    })

    event.currentTarget.classList.toggle('nav__item-active')
  })
})

window.addEventListener("load", init());

