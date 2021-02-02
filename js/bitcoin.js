$(document).ready(function () {
  $.ajax({
    url:
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=59f2efdf482744f78e2788f1d5f5fcda",
    type: "get",
    dataType: "json",
    success: function (data) {
      for (i = 0; i < data.articles.length; i++) {
        $("<article>")
          .appendTo(".content section")
          .append(
            '<div><div class="cover" style="background-image:url(' +
              data.articles[i].urlToImage +
              ')"/><span>' +
              data.articles[i].title +
              "</span><p>" +
              data.articles[i].description +
              "</p></div>"
          )
          .append(
            '<button><a href="' +
              data.articles[i].url +
              '" target="_blank">Lien article</a></button></article>'
          );
      }
    },
    error: function (data) {
      $(".error").append(
        "La requête a échouée avec le code : " + data.status + "."
      );
      $(".error").append(
        "<br/> Le message d'erreur renvoyé est le suivant : " +
          data.responseJSON.message
      );
      $(".error").css("display", "block");
    },
  });
});
