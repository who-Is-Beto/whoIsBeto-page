import '../styles/index.scss'
import { router } from './router/index.routes'

window.onload = () => {
  const loader = document.getElementById('loader')
  loader.classList.add('none')

  const body = document.querySelector('body')
  body.classList.remove('hidden')
}
const init = () => {
  router(window.location.hash);

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
};
window.addEventListener("load", init());

