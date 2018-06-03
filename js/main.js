/*
$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      $('#card').addClass('animated bounceOutLeft').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
        function () {
          $(this).removeClass("animiated bounceOutLeft")
        });
      break;
    case 39: // right
      $('#card').addClass('animated bounceOutRight').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
        function () {
          $(this).removeClass("animiated bounceOutRight")
        });
      break;
    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});

function update_card_params() {
}

document.getElementsByClassName("category-select").onclick = function () { 

  initMap();

  document.getElementBy

}

/*
document.getElementById("category-select").onclick = function () {

  lib = lib({ token: 'oPHeCfIJRq8LnoJYuG9TvFgxb7w2JaF4vPaTUMYj_E3H5_nmeHTq1eZIyZvhS8_i' });

  const sms = lib.messagebird.sms['@0.1.3'];

  let result = sms.create({
    recipient: "16472683922", // (required)
    body: "Hello World 2.0" // (required)
  });

};
*/