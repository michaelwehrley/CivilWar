(function() {
  CivilWar.Header = {
    update: function update(event) {
      var days = event.currentTarget.value;

      CivilWar.dates.selectedDate = _selectedDate().add(days, "days");

      _h1().innerHTML = CivilWar.dates.selectedDate.format("MMMM DD, YYYY");
    }
  }

  // run file load
  _h1().innerHTML = CivilWar.dates.selectedDate.format("MMMM DD, YYYY");  

  // listening events
  document.getElementById("date-slider").onchange = function(event) {
    CivilWar.Header.update(event);
  };

  // private functions
  function _selectedDate() {
    return moment(CivilWar.dates.startDate._d);
  }

  function _h1() {
    return document.getElementById("page-header")
  }
}());
