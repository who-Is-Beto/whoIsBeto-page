import '../styles/index.scss'
import { router } from './router/index.routes'

const init = () => {
  console.log('load')
  router(window.location.hash);

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
};
console.log('loading...')
window.addEventListener("load", init());

