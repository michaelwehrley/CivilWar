(function () {
  "use strict";

  function emit() {
    var element = document.getElementById("date-slider");

    element.oninput = function(event) {
      var days = event.currentTarget.value;

      CivilWar.dates.selected = moment(CivilWar.dates.start._d).add(days, "days");
    };
  }

  CivilWar.slider = {
    emit: emit
  }
}());