import PopoversWidget from "./PopoversWidget";

document.addEventListener("DOMContentLoaded", () => {
  const buttonElements = document.querySelectorAll("button");
  for (const buttonElement of buttonElements) {
    new PopoversWidget(buttonElement);
  }
});
