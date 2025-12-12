document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Color Selection (Step 2) ---
  const colorOptions = document.querySelectorAll(
    ".color-picker-list .color-option"
  );
  colorOptions.forEach((option) => {
    option.addEventListener("click", function () {
      colorOptions.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");
      // In a real app, you'd update the product preview here
      console.log(
        "Color selected:",
        Array.from(this.classList).find(
          (cls) => cls !== "color-option" && cls !== "active"
        )
      );
    });
  });

  // --- 2. Size Selection (Step 3) ---
  const sizeButtons = document.querySelectorAll(
    ".size-selector-list .size-btn"
  );
  sizeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      sizeButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      console.log("Size selected:", this.textContent);
    });
  });

  // --- 3. Material Selection (Step 4) ---
  const materialCards = document.querySelectorAll(
    ".material-list .material-card"
  );
  materialCards.forEach((card) => {
    card.addEventListener("click", function () {
      materialCards.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");
      const materialName = this.querySelector("p").textContent;
      console.log("Material selected:", materialName);
    });
  });

  // --- 4. Quantity Control (Reused Logic) ---
  const quantityControl = document.querySelector(
    ".checkout-bar .quantity-control"
  );
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

  // --- 5. File Upload Simulation (Step 1) ---
  const uploadArea = document.querySelector(".file-upload-area");
  const browseButton = document.querySelector(".upload-box .secondary-btn");

  function simulateFileUpload(element) {
    if (element) {
      element.addEventListener("click", function (e) {
        // Prevent button click from bubbling if click handler is on the whole box
        if (e.target.tagName !== "BUTTON") {
          // Simulate opening a file dialog
        }
        console.log("Simulating file upload dialog...");
        // In a real app, this would trigger an <input type="file"> click

        // Change text to show file is 'uploaded'
        const uploadBox = element.querySelector(".upload-box");
        if (uploadBox) {
          uploadBox.innerHTML = `
                        <i class="fas fa-check-circle" style="font-size: 40px; color: var(--accent-color);"></i>
                        <p>Design uploaded successfully!</p>
                        <button class="secondary-btn">Change File</button>
                    `;
          // Re-bind the click listener to the new 'Change File' button if necessary
        }
      });
    }
  }

  simulateFileUpload(uploadArea);
});
