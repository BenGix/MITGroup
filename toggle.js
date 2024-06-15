document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;

  // Load the user's preference from localStorage
  if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
    themeIcon.textContent = "dark_mode";
  } else {
    htmlElement.classList.remove("dark");
    themeIcon.textContent = "light_mode";
  }
  console.log(toggleButton);
  toggleButton.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
      console.log("click");
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      themeIcon.textContent = "dark_mode";
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");

      themeIcon.textContent = "light_mode";
    }
  });
});
