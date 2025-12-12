document.addEventListener("DOMContentLoaded", function () {
  // --- Filter Toggling (For mobile/smaller screens - if applicable) ---
  const filterToggle = document.querySelector(".filter-toggle-button");
  const filterSidebar = document.querySelector(".product-filters");

  if (filterToggle && filterSidebar) {
    filterToggle.addEventListener("click", function () {
      filterSidebar.classList.toggle("active");
    });
  }

  // --- Filter Option Interaction (Active State) ---

  function setupFilterInteraction(selector) {
    const options = document.querySelectorAll(selector);
    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Remove 'active' from all siblings in the same group
        const parent = this.closest(".filter-group");
        if (parent) {
          parent.querySelectorAll(selector).forEach((sibling) => {
            sibling.classList.remove("active");
          });
        }
        // Add 'active' to the clicked item
        this.classList.add("active");
      });
    });
  }

  // Apply interaction to color swatches and size buttons (reused from shop view)
  setupFilterInteraction(".color-filter-swatch");
  setupFilterInteraction(".size-filter-btn");

  // --- Product Card Quick View Hover Simulation ---
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    const wrapper = card.querySelector(".product-image-wrapper");
    if (wrapper) {
      wrapper.addEventListener("mouseenter", function () {
        // Show Quick View buttons on hover (simulating an interactive card)
        const quickView = wrapper.querySelector(".quick-view-overlay");
        if (quickView) {
          quickView.style.opacity = 1;
          quickView.style.transform = "translateY(0)";
        }
      });
      wrapper.addEventListener("mouseleave", function () {
        // Hide Quick View buttons
        const quickView = wrapper.querySelector(".quick-view-overlay");
        if (quickView) {
          quickView.style.opacity = 0;
          quickView.style.transform = "translateY(100%)";
        }
      });
    }
  });
});
