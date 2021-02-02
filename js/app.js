if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

$(".right button").click(function () {
  $("body").toggleClass("dark");
  if (localStorage.theme === "dark") localStorage.theme = "light";
  else localStorage.theme = "dark";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
