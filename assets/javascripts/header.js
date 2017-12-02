(function() {
  var header = document.getElementById("page-header");
  var slider = document.getElementById("date-slider");

  function listen() {
    slider.addEventListener("input", function (event) {
      update();
    }, false);
  }

  function update() {
    header.innerHTML = CivilWar.dates.selected.format("MMMM DD, YYYY");
  }

  CivilWar.header = {
    listen: listen,
    update: update
  }
}());
