(function () {
  "use strict";

  document.getElementById("date-slider").oninput = function(event) {
    CivilWar.Header.update(event);
  };
}());