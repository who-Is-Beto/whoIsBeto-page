import views from "../views/home.html";

export default () => {
  const divElement = document.createElement("main");
  divElement.setAttribute("id", "home");

  divElement.innerHTML = views;
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return divElement;
};
