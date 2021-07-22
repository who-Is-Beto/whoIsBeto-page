import views from "../views/about.html";

export default () => {
  const divElement = document.createElement("main");
  divElement.setAttribute("id", "about");

  divElement.innerHTML = views;
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return divElement;
};
