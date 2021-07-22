import views from "../views/contact.html";

export default () => {
  const divElement = document.createElement("main");
  divElement.setAttribute("id", "contact");

  divElement.innerHTML = views;
  const $form = divElement.querySelector("#form");

  function handleSubmitEmail(event) {
    event.preventDefault();

    const formData = new FormData(this);
    trucazo.setAttribute(
      "href",
      `mailto:whoisbeto@gmail.com?=${formData.get("name")}${formData.get(
        "email"
      )}&body=${formData.get("message")}`
    );
    trucazo.click();
  }
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  $form.addEventListener("submit", handleSubmitEmail);
  return divElement;
};
