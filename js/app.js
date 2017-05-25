console.log("linked!");

//THIS IS THE JQUERY FOR THE TRANSFORMS


// create a toggle maybe for the showing of the divs that contain more information, and to change the headers to horizontal... this way works for now but does not let them rotate back

//=============== GRABBERS ==============

var $aheading = $("#aHeading");
var $bheading = $("#bHeading");
var $cheading = $("#cHeading");
var $dheading = $("#dHeading");

var $aText = $("#about-text");
var $bText = $("#bio-text");
var $cText = $("#github-text");
var $dText = $("#social-text");

//=============== HANDLERS ==============

var normalizeA = function() {
  $aheading.attr("class", "normal");
  $aText.css("display", "block");
};
var normalizeB = function() {
  $bheading.attr("class", "normal");
  $bText.css("display", "block");
};
var normalizeC = function() {
  $cheading.attr("class", "normal");
  $cText.css("display", "block");
};
var normalizeD = function() {
  $dheading.attr("class", "normal");
  $dText.css("display", "block");
};

//=============== LISTENERS ==============


$aheading.on("click", normalizeA);
$bheading.on("click", normalizeB);
$cheading.on("click", normalizeC);
$dheading.on("click", normalizeD);
