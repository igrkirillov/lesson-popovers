import PopoversWidget from "../js/PopoversWidget";

describe("checking popovers visible", () => {
  test.each([
    { placement: "top", expectedAfterFirstClick: true, expectedAfterSecondClick: false },
    { placement: "right", expectedAfterFirstClick: true, expectedAfterSecondClick: false },
    { placement: "bottom", expectedAfterFirstClick: true, expectedAfterSecondClick: false },
    { placement: "left", expectedAfterFirstClick: true, expectedAfterSecondClick: false },
  ])("PopopersWidget", ({ placement, expectedAfterFirstClick, expectedAfterSecondClick }) => {
    document.body.innerHTML =
      `<main>
            <button type="button"
                    data-placement="${placement}" data-title="popover"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                Popover on ${placement}
            </button>
        </main>`;
    const buttonElement = document.querySelector("button");
    const widget = new PopoversWidget("title", "content", placement);
    buttonElement.addEventListener("click", () => {
      if (!widget.isVisible()) {
        widget.open(buttonElement);
      } else {
        widget.close();
      }
    })
    buttonElement.click();
    expect(widget.isVisible()).toBe(expectedAfterFirstClick);
    buttonElement.click();
    expect(widget.isVisible()).toBe(expectedAfterSecondClick);
  });
});
