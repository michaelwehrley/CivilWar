(function() {
  "use strict";

  // December 20, 1860 - South Carolina secedes from the Union. Followed within two months by Mississippi, Florida, Alabama, Georgia, Louisiana and Texas.
  // March 11, 1861 the Confederate Constitution of seven state signatories – South Carolina, Mississippi, Florida, Alabama, Georgia, Louisiana, and Texas – replaced the February 7 Provisional Confederate States Constitution with one stating in its preamble a desire for a "permanent federal government".
  // War: April 12, 1861 – May 9, 1865

  var START_DATE = "12-20-1860";

  // if (location.hash === "") {
  //   date = moment(START_DATE, "MM-DD-YYYY");
  // } else {
  //   date = moment(location.hash.replace(/#/, ""), "MM-DD-YYYY");
  // }

  CivilWar.dates = {
    selectedDate: moment(START_DATE, "MM-DD-YYYY"),
    startDate: moment(START_DATE, "MM-DD-YYYY")
  }
}());
