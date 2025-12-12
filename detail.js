document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("main-product-img");
  const thumbnails = document.querySelectorAll(
    ".product-thumbnails .thumbnail"
  );
  const colorSwatches = document.querySelectorAll(
    ".product-options.color-options .swatch"
  );
  const sizeButtons = document.querySelectorAll(
    ".product-options.size-options .size-btn"
  );
  const selectedColorDisplay = document.getElementById("selected-color");

  // --- 1. Image Gallery Interaction ---
  if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach((thumb) => {
      thumb.addEventListener("click", function () {
        // Update main image source (using placeholder logic)
        mainImage.src = this.src;

        // Update active class
        thumbnails.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }

  // --- 2. Color Swatch Selection ---
  if (selectedColorDisplay && colorSwatches.length > 0) {
    colorSwatches.forEach((swatch) => {
      swatch.addEventListener("click", function () {
        // Remove 'active' from all swatches
        colorSwatches.forEach((s) => s.classList.remove("active"));
        // Add 'active' to the clicked swatch
        this.classList.add("active");

        // Update text display
        const colorClass = Array.from(this.classList).find(
          (cls) => cls !== "swatch" && cls !== "active"
        );
        if (colorClass) {
          selectedColorDisplay.textContent = colorClass;
        }
      });
    });
  }

  // --- 3. Size Button Selection ---
  if (sizeButtons.length > 0) {
    sizeButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove 'active' from all size buttons
        sizeButtons.forEach((b) => b.classList.remove("active"));
        // Add 'active' to the clicked button
        this.classList.add("active");
      });
    });
  }

  // --- 4. Quantity Control ---
  const quantityControl = document.querySelector(".quantity-control");
  const quantityInput = quantityControl
    ? quantityControl.querySelector("input")
    : null;
  const minusBtn = quantityControl
    ? quantityControl.querySelector("button:first-child")
    : null;
  const plusBtn = quantityControl
    ? quantityControl.querySelector("button:last-child")
    : null;

  if (quantityInput && minusBtn && plusBtn) {
    minusBtn.addEventListener("click", function () {
      let currentQty = parseInt(quantityInput.value);
      if (currentQty > 1) {
        quantityInput.value = currentQty - 1;
      }
    });

    plusBtn.addEventListener("click", function () {
      let currentQty = parseInt(quantityInput.value);
      quantityInput.value = currentQty + 1;
    });
  }

  // --- 5. Tabbed Content Interaction ---
  const tabButtons = document.querySelectorAll(".tabs-header .tab-btn");
  const tabContents = document.querySelectorAll(
    ".product-tabs-section .tab-content"
  );

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTabId = this.getAttribute("data-tab");

      // Deactivate all buttons and hide all content
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Activate the clicked button
      this.classList.add("active");

      // Show the corresponding content
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});
