(function() {
  var header = document.getElementById("page-header");

  function listenTo(slider) {
    slider.addEventListener("input", function (event) {
      update();
    }, false);
  }

  function update() {
    header.innerHTML = CivilWar.dates.selected.format("MMMM DD, YYYY");
  }

  CivilWar.header = {
    listenTo: listenTo,
    update: update
  }
}());
