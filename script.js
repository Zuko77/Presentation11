document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card");
  const colorFilterOptions = document.querySelectorAll(".color-filter-option");
  const categoryFilterOptions = document.querySelectorAll(
    ".filter-content.product-category-filters .filter-option"
  );
  const resultCountElement = document.getElementById("result-count");
  const searchInput = document.getElementById("product-search-input");

  // --- Core Filtering Logic ---
  function applyFilters() {
    // 1. Determine active filters
    const activeColorFilter =
      document.querySelector(".color-filter-option.active")?.dataset.filter || "all";
    const activeCategoryFilter =
      document.querySelector(".filter-content.product-category-filters .filter-option.active")?.dataset.filter || "all";
    const searchTerm = searchInput.value.toLowerCase().trim(); // Get current search term

    let visibleCount = 0;

    // 2. Iterate over all products
    productCards.forEach((card) => {
      const productColor = card.dataset.color;
      const productCategory = card.dataset.category;
      const productTitle = card.querySelector(".product-title").textContent.toLowerCase();

      // Check color and category match (from previous logic)
      const isColorMatch =
        activeColorFilter === "all" || productColor === activeColorFilter;
      const isCategoryMatch =
        activeCategoryFilter === "all" || productCategory === activeCategoryFilter;

      // Check search term match
      const isSearchMatch =
        searchTerm === "" || productTitle.includes(searchTerm);

      // 3. Show or hide the card based on ALL filter matches
      if (isColorMatch && isCategoryMatch && isSearchMatch) {
        card.style.display = "block"; // Show product
        visibleCount++;
      } else {
        card.style.display = "none"; // Hide product
      }
    });

    // 4. Update the results count display
    resultCountElement.textContent = `Showing 1–${visibleCount} of ${productCards.length} results`;
  }

  // --- New: Search Input Listener ---
  if (searchInput) {
    // Trigger filtering immediately on key press
    searchInput.addEventListener("keyup", applyFilters);
    // Also trigger if input is cleared by other means
    searchInput.addEventListener("change", applyFilters);
  }

  // --- Filter Interaction / Active State Management (Reused from previous step) ---
  function setupFilterInteraction(options) {
    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Remove 'active' from all siblings in the same group
        options.forEach((sibling) => {
          sibling.classList.remove("active");
        });
        
        // Add 'active' to the clicked item
        this.classList.add("active");

        // Apply the new filters (includes the search filter now)
        applyFilters();
      });
    });
  }

  // Apply interaction to color swatches
  setupFilterInteraction(colorFilterOptions);

  // Apply interaction to category filters
  setupFilterInteraction(categoryFilterOptions);

  // --- Product Card Hover Simulation (Existing Logic) ---
  productCards.forEach((card) => {
    const wrapper = card.querySelector(".product-image-wrapper");
    const hoverActions = card.querySelector(".hover-actions");

    if (wrapper && hoverActions) {
      wrapper.addEventListener("mouseenter", function () {
        hoverActions.style.opacity = 1;
      });

      wrapper.addEventListener("mouseleave", function () {
        hoverActions.style.opacity = 0;
      });
    }
  });

  // Initial call to set the correct result count 
  applyFilters();
});