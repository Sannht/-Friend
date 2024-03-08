document.addEventListener("DOMContentLoaded", function() {
  const start = document.getElementById("star");
  start.addEventListener("click", function() {
    setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 1000);
  });
});
