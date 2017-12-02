(function() {
  "use strict";

  // March 11, 1861 the Confederate Constitution of seven state signatories – South Carolina, Mississippi, Florida, Alabama, Georgia, Louisiana, and Texas – replaced the February 7 Provisional Confederate States Constitution with one stating in its preamble a desire for a "permanent federal government".
  var DEFAULT_DATE = moment("03-11-1861", "MM-DD-YYYY");
  var date;

  if (location.hash === "") {
    date = DEFAULT_DATE;
  } else {
    date = moment(location.hash.replace(/#/, ""), "MM-DD-YYYY");
  }

  var heading = document.getElementById('date');
  heading.innerHTML = date.format('MMMM DD, YYYY');
}());
