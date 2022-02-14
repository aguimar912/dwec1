document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("#password").addEventListener("copy", function (evt) {
    evt.preventDefault();
  });
  document
    .getElementById("#password")
    .addEventListener("paste", function (evt) {
      evt.preventDefault();
    });
});
