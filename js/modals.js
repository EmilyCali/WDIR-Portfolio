console.log("modals linked");

//THIS IS THE JQUERY FOR THE MODALS


//=============== GRABBERS ==============

//LINKED IN PRIVACY POLICIES WOULD NOT ALLOW LINKING

//linkedIn
// var $openLinkedInModal = $("#linkedin");
// var $linkedInModal = $("#linkedInModal");
// var $closeLinkedInModal = $("#closeLinkedInModal");

//Project 1
var $openWarModal = $("#war");
var $warModal = $("#warModal");
var $closeWarModal = $("#closeWarModal");

//Project 2
var $openGardenModal = $("#garden");
var $gardenModal = $("#gardenModal");
var $closeGardenModal = $("#closeGardenModal");

//Project 3
var $openBeerBookModal = $("#beerbooks");
var $beerBookModal = $("#beerBookModal");
var $closeBeerBookModal = $("#closeBeerBookModal");

//Project 4
var $openHungryModal = $("#hungry");
var $hungryModal = $("#hungryModal");
var $closeHungryModal = $("#closeHungryModal");

//Project 5 Final Project
var $openQuiltModal = $("#quilt");
var $quiltModal = $("#quiltModal");
var $closeQuiltModal = $("#closeQuiltModal");

//GITHUB PRIVACY POLICIES WOULD NOT ALLOW LINKING

//Github Profile
// var $openGithubModal = $("#git");
// var $githubModal = $("#githubModal");
// var $closeGithubModal = $("#closeGithubFrame");

//Flickr
var $openFlickrModal = $("#flickr");
var $flickrModal = $("#flickrModal");
var $closeFlickrModal = $("#closeFlickrModal");

//ETSY AND INSTAGRAM REFUSED TO LINK, CLIENT BLOCKERS

//Instagram
// var $openInstagramModal = $("#insta");
// var $instagramModal = $("#instaModal");
// var $closeInstagramModal = $("#closeInstaModal");

//Etsy
// var $openEtsyModal = $("#etsy");
// var $etsyModal = $("#etsyModal");
// var $closeEtsyModal = $("#closeEtsyModal");


//=============== HANDLERS ==============


//when you click on the about this app link open the modal
//when you click on the close link inside the modal close the modal

//LinkedIn
// var openLinkedInModal = function() {
//   $linkedInModal.css("display", "block");
// };
// var closeLinkedInModal = function() {
//   $linkedInModal.css("display", "none");
// };

//Project 1
var openWarModal = function() {
  $warModal.css("display", "block");
};
var closeWarModal = function() {
  $warModal.css("display", "none");
};

//Project 2
var openGardenModal = function() {
  $gardenModal.css("display", "block");
};
var closeGardenModal = function() {
  $gardenModal.css("display", "none");
};

//Project 3
var openBeerBookModal = function() {
  $beerBookModal.css("display", "block");
};
var closeBeerBookModal = function() {
  $beerBookModal.css("display", "none");
};

//Project 4
var openHungryModal = function() {
  $hungryModal.css("display", "block");
};
var closeHungryModal = function() {
  $hungryModal.css("display", "none");
};

//Project 5
var openQuiltModal = function() {
  $quiltModal.css("display", "block");
};
var closeQuiltModal = function() {
  $quiltModal.css("display", "none");
};

//github profile
// var openGithubModal = function() {
//   $githubModal.css("display", "block");
// };
// var closeGithubModal = function() {
//   $githubModal.css("display", "none");
// };


//Flickr
var openFlickrModal = function() {
  $flickrModal.css("display", "block");
};
var closeFlickrModal = function() {
  $flickrModal.css("display", "none");
};

//instagram
// var openInstagramModal = function() {
//   $instagramModal.css("display", "block");
// };
// var closeInstagramModal = function() {
//   $instagramModal.css("display", "none");
// };

//etsy
// var openEtsyModal = function() {
//   $etsyModal.css("display", "block");
// };
// var closeEtsyModal = function() {
//   $etsyModal.css("display", "none");
// };

//=============== LISTENERS ==============

//grabbing the open to click and run show
//grabbing the close to click and hide
// $openLinkedInModal.on("click", openLinkedInModal);
// $closeLinkedInModal.on("click", closeLinkedInModal);

$openWarModal.on("click", openWarModal);
$closeWarModal.on("click", closeWarModal);

$openGardenModal.on("click", openGardenModal);
$closeGardenModal.on("click", closeGardenModal);

$openBeerBookModal.on("click", openBeerBookModal);
$closeBeerBookModal.on("click", closeBeerBookModal);

$openHungryModal.on("click", openHungryModal);
$closeHungryModal.on("click", closeHungryModal);

$openQuiltModal.on("click", openQuiltModal);
$closeQuiltModal.on("click", closeQuiltModal);

// $openGithubModal.on("click", openGithubModal);
// $closeGithubModal.on("click", closeGithubModal);

$openFlickrModal.on("click", openFlickrModal);
$closeFlickrModal.on("click", closeFlickrModal);

// $openInstagramModal.on("click", openInstagramModal);
// $closeInstagramModal.on("click", closeInstagramModal);

// $openEtsyModal.on("click", openEtsyModal);
// $closeEtsyModal.on("click", closeEtsyModal);
