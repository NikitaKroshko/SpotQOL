document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("change_button");

  // When the button is clicked in the popup, do the following
  button.addEventListener("click", () => {
    // get the inputs from the user
    const bgColorInput = document.getElementById("bg");
    const txtColorInput = document.getElementById("txt");

    // set defaults if no input is given
    const bgColor = bgColorInput.value || "#21141b";
    const txtColor = txtColorInput.value || "red";

    // send a message to the content script with the new colours
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      // gets the right tab to send the message to
      const activeTab = tabs[0];

      // sends the message with the bg and txt colours
      browser.tabs.sendMessage(activeTab.id, {
        type: "updateColours",
        bgColor,
        txtColor,
      });
    });
  });
});
