document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector(
    ".ultimate-license .toggle-switch"
  );
  const licensePrice = document.querySelector(".license-price");
  const licenseType = document.querySelector(".license-type");

  if (toggleSwitch && licensePrice) {
    toggleSwitch.addEventListener("click", function () {
      // Check if it's currently showing monthly price (default is $68/mo)
      const isMonthly = licensePrice.textContent.includes("$68");

      if (isMonthly) {
        // Switch to Yearly price (e.g., $680/yr - assumed)
        licensePrice.innerHTML = "$680 <span>/yr</span>";
        licenseType.textContent = "Unlimited License (Annual)";
        toggleSwitch.querySelector(".switch").style.backgroundColor =
          "var(--accent-color)";
        console.log("Switched to Yearly Pricing");
      } else {
        // Switch back to Monthly price
        licensePrice.innerHTML = "$68 <span>/mo</span>";
        licenseType.textContent = "Unlimited License";
        toggleSwitch.querySelector(".switch").style.backgroundColor =
          "var(--light-bg)";
        console.log("Switched to Monthly Pricing");
      }
    });
  }
});
