$(document).ready(function () {
  let $img = $(".carousel img"),
    i_img = $img.length - 1,
    i = 0,
    $current_img = $img.eq(i);

  $img.css("filter", "saturate(0)");
  $current_img.css("filter", "saturate(1)");

  $(".content").append(
    '<div class="controls"><button class="prev">Précédent</button><button class="next">Suivant</button></div>'
  );

  $(".next").click(function () {
    i++;
    if (i <= i_img) {
      $img.css("filter", "saturate(0)");
      $current_img = $img.eq(i);
      $current_img.css("filter", "saturate(1)");
    } else i = i_img;
  });

  $(".prev").click(function () {
    i--;
    if (i >= 0) {
      $img.css("filter", "saturate(0)");
      $current_img = $img.eq(i);
      $current_img.css("filter", "saturate(1)");
    } else i = 0;
  });

  function slide_i() {
    setTimeout(function () {
      if (i < i_img) i++;
      else i = 0;
      $img.css("filter", "saturate(0)");
      $current_img = $img.eq(i);
      $current_img.css("filter", "saturate(1)");
      slide_i();
    }, 7000);
  }

  slide_i();
});
