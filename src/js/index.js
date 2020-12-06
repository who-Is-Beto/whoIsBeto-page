import '../styles/index.scss'
import Home from '../controllers/home.controllers'
import { router } from './router/index.routes'

router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

