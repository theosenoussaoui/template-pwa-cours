$(document).ready(function () {
    $.ajax({
        url:
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=59f2efdf482744f78e2788f1d5f5fcda",
        type: "get",
        dataType: "json",
        success: function (data) {
            console.log(data.articles);
            for (i = 0; i < data.articles.length; i++) {
                $("#news").append("<li>" + data.articles[i].title + "</li>");
            }
        },
    });
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}
