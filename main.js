let n;
init();
setInterval(() => {
  //$(selector).one("transitionend", function(e) {});
  makeLeave(getImage(n)).one("transitionend", e => {
    makeEnter($(e.currentTarget));
  });
  makeCurrent(getImage(n + 1));
  n++;
}, 3000);

function init() {
  n = 1;
  getImage(n)
    .addClass("current")
    .siblings()
    .addClass("enter");
}

function getImage(n) {
  return $(`.images > img:nth-child(${setIndex(n)})`);
}

function setIndex(n) {
  if (n > 3) {
    if (n % 3 === 0) {
      return 3;
    } else {
      return n % 3;
    }
  } else {
    return n;
  }
}

function makeLeave($image) {
  return $image.addClass("leave").removeClass("current enter");
}

function makeCurrent($image) {
  return $image.addClass("current").removeClass("leave enter");
}

function makeEnter($image) {
  return $image.addClass("enter").removeClass("leave current");
}
