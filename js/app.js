console.log("linked!");

//THIS IS THE JQUERY FOR THE TRANSFORMS


//=============== GRABBERS ==============

var $aheading = $("#aHeading");
var $bheading = $("#bHeading");
var $cheading = $("#cHeading");
var $dheading = $("#dHeading");

//=============== HANDLERS ==============

var normalizeA = function() {
  $aheading.attr("class", "normal");
};
var normalizeB = function() {
  $bheading.attr("class", "normal");
};
var normalizeC = function() {
  $cheading.attr("class", "normal");
};
var normalizeD = function() {
  $dheading.attr("class", "normal");
};

//=============== LISTENERS ==============


$aheading.on("click", normalizeA);
$bheading.on("click", normalizeB);
$cheading.on("click", normalizeC);
$dheading.on("click", normalizeD);
