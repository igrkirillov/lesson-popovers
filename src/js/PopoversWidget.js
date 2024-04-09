import {placements} from "./placements";

export default class PopoversWidget {
  constructor(ownerElement) {
    this.id = performance.now();
    this.element = this.createElement(ownerElement);
    this.placement = ownerElement.dataset["placement"];
    this.ownerElement = ownerElement;
    this.addOpenCloseActionsListener(ownerElement);
  }

  createElement(ownerElement) {
    const titleStr = ownerElement.dataset["title"];
    const contentStr = ownerElement.dataset["content"];
    const innerMarkup =
        `<div class="popovers-title">
          ${titleStr}
        </div>
        <div class="popovers-content">
            <span>
                ${contentStr}
            </span>          
        </div>`;
    const popoversElement = document.createElement("div");
    popoversElement.classList.add("popovers");
    popoversElement.classList.add("popovers-hidden");
    popoversElement.dataset["id"] = String(this.id);
    popoversElement.innerHTML = innerMarkup;

    document.body.appendChild(popoversElement);

    return popoversElement;
  }

  addOpenCloseActionsListener(ownerElement) {
    const widget = this;
    ownerElement.addEventListener("click", () => {
      if (widget.isVisible()) {
        widget.close();
      } else {
        widget.open();
      }
    })
  }

  isVisible() {
    return !this.element.classList.contains("popovers-hidden");
  }

  open() {
    this.element.classList.remove("popovers-hidden");
    const ownerRect = this.ownerElement.getBoundingClientRect();
    this.locatePosition(ownerRect);
  }

  close() {
    this.element.classList.add("popovers-hidden");
  }

  locatePosition(ownerRect) {
    if (this.placement === placements.top) {
      this.element.style.left = ownerRect.left + ownerRect.width / 2 - this.element.offsetWidth / 2 + "px";
      this.element.style.top = (ownerRect.top - 2 - this.element.offsetHeight) + "px";
    } else if (this.placement === placements.bottom) {
      this.element.style.left = ownerRect.left + ownerRect.width / 2 - this.element.offsetWidth / 2 + "px";
      this.element.style.top = (ownerRect.bottom + 2) + "px";
    } else if (this.placement === placements.left) {
      this.element.style.left = (ownerRect.left - 5) - this.element.offsetWidth + "px";
      this.element.style.top = (ownerRect.top + ownerRect.height / 2 - this.element.offsetHeight / 2) + "px";
    } else {
      this.element.style.left = (ownerRect.right + 5) + "px";
      this.element.style.top = (ownerRect.top + ownerRect.height / 2 - this.element.offsetHeight / 2) + "px";
    }
  }
}
