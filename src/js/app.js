import PopoversWidget from "./PopoversWidget";

document.addEventListener("DOMContentLoaded", () => {
  const buttonElements = document.querySelectorAll("button");
  for (const buttonElement of buttonElements) {
    const tipTitle = buttonElement.dataset["title"];
    const tipContent = buttonElement.dataset["content"];
    const tipPlacement = buttonElement.dataset["placement"];
    const popoverWidget = new PopoversWidget(tipTitle, tipContent, tipPlacement);
    addTipShowHideActionsListener(buttonElement, popoverWidget);
  }
});

function addTipShowHideActionsListener(buttonElement, popoverWidget) {
  buttonElement.addEventListener("click", () => {
    if (popoverWidget.isVisible()) {
      popoverWidget.close();
    } else {
      popoverWidget.open(buttonElement);
    }
  })
}
