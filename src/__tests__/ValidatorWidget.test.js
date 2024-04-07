import PopoversWidget from "../js/PopoversWidget";

describe("checking validity", () => {
  test.each([
    { numberStr: "4532286210295683", expected: true },
    { numberStr: "5555555555555555", expected: false },
  ])("ValidatorWidget", ({ numberStr, expected }) => {
    document.body.innerHTML =
      '<div class="container">\n' +
      '    <form class="validator">\n' +
      '      <div class="cards">\n' +
      '        <div class="card" inactive="true" data-type="visa">\n' +
      '          <img class="card-icon" src="icons/visa.png"/>\n' +
      "        </div>\n" +
      '        <div class="card" inactive="true" data-type="mastercard">\n' +
      '          <img class="card-icon" src="icons/mastrcard.png"/>\n' +
      "        </div>\n" +
      '        <div class="card" inactive="true" data-type="mir">\n' +
      '          <img class="card-icon" src="icons/mir.png"/>\n' +
      "        </div>\n" +
      "      </div>\n" +
      '      <div class="input-container">\n' +
      '        <input type="text" class="number">\n' +
      '        <input type="submit" class="submit" value="Click to validate">\n' +
      "      </div>\n" +
      "    </form>\n" +
      "  </div>";
    const widget = new PopoversWidget(".validator");
    widget.input.value = numberStr;
    widget.submit.click();
    expect(widget.submit.getAttribute("valid")).toBe(
      String(expected).toString()
    );
  });
});
