"use strict";

// Images are listed directly in HTML, so the gallery also works without JavaScript.
document.querySelectorAll(".preview img").forEach(image => {
  function showError() {
    const message = document.createElement("span");
    message.className = "preview-error";
    message.textContent = "SVG unavailable";
    image.replaceWith(message);
  }
  image.addEventListener("error", showError, { once: true });
  if (image.complete && image.naturalWidth === 0) showError();
});
