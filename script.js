document.addEventListener("DOMContentLoaded", function () {
  // Get all content headings
  const contentHeadings = document.querySelectorAll(".content-heading");

  // Loop through each content heading
  contentHeadings.forEach(function (heading) {
    // Find the open and close buttons within this content heading
    const openBtn = heading.querySelector(".open");
    const closeBtn = heading.querySelector(".close");

    // Find the closest content container and its text container
    const content = heading.closest(".content");
    const textContainer = content.querySelector(".text-container");

    // Check the initial state of the text container and adjust button visibility.
    if (textContainer.classList.contains("hide")) {
      closeBtn.classList.add("hide");
    } else {
      openBtn.classList.add("hide");
    }

    // Add click event listener to the heading
    heading.addEventListener("click", function () {
      // Toggle visibility of open and close buttons
      openBtn.classList.toggle("hide");
      closeBtn.classList.toggle("hide");

      // Toggle visibility of the text container
      textContainer.classList.toggle("hide");
    });
  });
});
