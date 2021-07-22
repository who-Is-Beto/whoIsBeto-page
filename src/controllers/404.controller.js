import views from "../views/404.html";

export default () => {
  const divElement = document.createElement("main");
  divElement.setAttribute("id", "notfound");

  divElement.innerHTML = views;
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return divElement;
};
