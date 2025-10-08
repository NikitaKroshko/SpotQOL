function applyStoredColours() {
  // This is for the first initial load of the page, to make sure the initial base colours load
  const bgColour = "#21141b";
  const txtColour = "red";

  // Change the title of the page to a funny message
  document.getElementById("spot_title").innerHTML = "SpotQOL";

  // Change the size of the due assessments table dix to show more upcoming assessments
  document.getElementById("due_assessments").style.height = "240px";

  // Loop through the array of all elements and set their background and text colour
  Array.from(document.querySelectorAll("*")).forEach((element) => {
    element.style.backgroundColor = bgColour;
    element.style.color = txtColour;
  });

  // Loop through the array of all table sections and set their border to a solid line
  // (This is because without this there is a nasty white line between the thead and tbody sections of the table)
  const tableSections = document.querySelectorAll("thead, tbody");
  tableSections.forEach((section) => {
    section.style.border = "2px solid rgb(50, 50, 50)";
  });

  // Find the thead elements and make their sticky position look better
  const theadElements = document.querySelectorAll("thead");
  theadElements.forEach((thead) => {
    thead.style.position = "sticky";
    thead.style.top = "-4px";
  });
}
// run the function to apply the stored colours (for initial load)

applyStoredColours();

// wait for message from the popup

browser.runtime.onMessage.addListener((message) => {
  if (message.type === "updateColours") {
    // Get the background and text colours from the message
    const { bgColor, txtColor } = message;

    // Loop through the array of all elements and set their background and text colour
    Array.from(document.querySelectorAll("*")).forEach((element) => {
      element.style.backgroundColor = bgColor;
      element.style.color = txtColor;
    });

    // Loop through the array of all table sections and set their border to a solid line
    // (This is because without this there is a nasty white line between the thead and tbody sections of the table)
    const tableSections = document.querySelectorAll("thead, tbody");
    tableSections.forEach((section) => {
      section.style.border = "2px solid rgb(50, 50, 50)";
    });

    // Find the thead elements and make their sticky position look better
    const theadElements = document.querySelectorAll("thead");
    theadElements.forEach((thead) => {
      thead.style.position = "sticky";
      thead.style.top = "-4px";
    });
  }
});
