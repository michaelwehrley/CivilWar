(function() {
  "use strict";
  // (c) ammap.com | SVG (in JSON format) map of USA
  // areas: {id:"US-AK"},{id:"US-AL"},{id:"US-AR"},{id:"US-AZ"},{id:"US-CA"},{id:"US-CO"},{id:"US-CT"},{id:"US-DC"},{id:"US-DE"},{id:"US-FL"},{id:"US-GA"},{id:"US-HI"},{id:"US-IA"},{id:"US-ID"},{id:"US-IL"},{id:"US-IN"},{id:"US-KS"},{id:"US-KY"},{id:"US-LA"},{id:"US-MA"},{id:"US-MD"},{id:"US-ME"},{id:"US-MI"},{id:"US-MN"},{id:"US-MO"},{id:"US-MS"},{id:"US-MT"},{id:"US-NC"},{id:"US-ND"},{id:"US-NE"},{id:"US-NH"},{id:"US-NJ"},{id:"US-NM"},{id:"US-NV"},{id:"US-NY"},{id:"US-OH"},{id:"US-OK"},{id:"US-OR"},{id:"US-PA"},{id:"US-RI"},{id:"US-SC"},{id:"US-SD"},{id:"US-TN"},{id:"US-TX"},{id:"US-UT"},{id:"US-VA"},{id:"US-VT"},{id:"US-WA"},{id:"US-WI"},{id:"US-WV"},{id:"US-WY"}

  // February 4 until May 29, 1861, in the Alabama State Capitol.
  // Six states created the Confederate States of America there on February 8, 1861.

  var paths = [
    {
      "id":"US-Washington-DC",
      "startDate": "07-16-1790",
      "endDate": undefined,
      "allegiance":"union",
      "title":"Washington DC",
      "cx": "965",
      "cy": "290",
      "r": "3"
    },
    {
      // February 4, 1861
      "id":"CS-Montgomery",
      "startDate": "02-04-1861",
      "endDate":  "05-29-1861",
      "allegiance":"Confederacy",
      "title":"Montgomery",
      "cx": "815",
      "cy": "470",
      "r": "3"
    },
    {
      // May 30, 1861 - May 9, 1865
      "id":"CS-Richmond",
      "startDate": "05-30-1861",
      "endDate": "04-03-1865",
      "allegiance":"Confederacy",
      "title":"Richmond",
      "cx": "967",
      "cy": "325",
      "r": "3"
    }
  ]

  function build() { 
    paths.forEach(function(path) {
      if (isCapital(path)) {
        document
          .getElementById("united-states")
          .innerHTML += '<circle cx="' +  path.cx + '" cy="' + path.cy + '" r="' + path.r + '" fill="gold" stroke="black" />'
      }
    });
  }

  function formatedDate(date) {
    if (date) {
      return moment(date, CivilWar.dates.format);
    } else {
      return moment();
    }
  }

  function isCapital(capital) {
    var startDate = moment(capital.startDate, CivilWar.dates.format);
    var endDate = formatedDate(capital.endDate);
    var selectedDate = moment(CivilWar.dates.selected, CivilWar.dates.format);

    return CivilWar.dates.selected > startDate && CivilWar.dates.selected < endDate;
  }

  function listenTo(slider) { 
    slider.addEventListener("input", function (event) {
      build();
    }, false);
  }

  CivilWar.capitals = {
    build: build,
    listenTo: listenTo
  }
}());
