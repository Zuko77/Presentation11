document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Product Variant (Color) Switching ---

  const mainProductImg = document.getElementById("main-product-img");
  const colorSwatches = document.querySelectorAll(".swatch");
  const selectedColorText = document.getElementById("selected-color");
  const variantPrice = document.getElementById("variant-price");
  const originalPrice = document.getElementById("original-price");

  colorSwatches.forEach((swatch) => {
    swatch.addEventListener("click", function () {
      // a. Remove 'active' from all swatches
      colorSwatches.forEach((s) => s.classList.remove("active"));
      
      // b. Add 'active' to the clicked swatch
      this.classList.add("active");

      // c. Update Main Image
      const newImage = this.getAttribute("data-variant-image");
      if (mainProductImg && newImage) {
        mainProductImg.src = newImage;
        mainProductImg.alt = this.getAttribute("data-color-name") + " Hoodie";
      }

      // d. Update Selected Color Text
      const newColorName = this.getAttribute("data-color-name");
      if (selectedColorText) {
        selectedColorText.textContent = newColorName;
      }
      
      // e. Update Price
      const newPrice = this.getAttribute("data-variant-price");
      const newOriginalPrice = this.getAttribute("data-original-price");
      if (variantPrice) {
        variantPrice.textContent = `$${parseFloat(newPrice).toFixed(2)}`;
      }
      if (originalPrice) {
        originalPrice.textContent = `$${parseFloat(newOriginalPrice).toFixed(2)}`;
      }
      
      // f. Update Thumbnails (Optional: If you have different thumbnails per color)
      // For this example, we'll keep the thumbnails static or assume they update 
      // based on the main image change if they share the same source.
    });
  });

  // --- 2. Size Button Toggling ---
  const sizeButtons = document.querySelectorAll(".size-btn");

  sizeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove 'active' from all size buttons
      sizeButtons.forEach((b) => b.classList.remove("active"));
      // Add 'active' to the clicked button
      this.classList.add("active");
    });
  });

  // --- 3. Quantity Control (+ / -) ---
  const quantityInput = document.getElementById("quantity-input");
  const quantityMinus = document.querySelector(".quantity-minus");
  const quantityPlus = document.querySelector(".quantity-plus");
  const minQuantity = parseInt(quantityInput?.getAttribute("data-min") || 1);

  if (quantityInput && quantityMinus && quantityPlus) {
    quantityMinus.addEventListener("click", function () {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > minQuantity) {
        quantityInput.value = currentValue - 1;
      }
    });

    quantityPlus.addEventListener("click", function () {
      let currentValue = parseInt(quantityInput.value);
      // Assuming no max limit for this basic script
      quantityInput.value = currentValue + 1;
    });

    // Ensure input field only accepts valid numbers greater than or equal to min
    quantityInput.addEventListener('change', function() {
        let value = parseInt(this.value);
        if (isNaN(value) || value < minQuantity) {
            this.value = minQuantity;
        }
    });
  }


  // --- 4. Product Tabs Functionality ---
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTabId = this.getAttribute("data-tab");

      // Deactivate all buttons and content
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Activate the clicked button
      this.classList.add("active");

      // Activate the corresponding content
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});