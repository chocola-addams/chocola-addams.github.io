function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

/* PHOTO GRID TEST */
/*var img1 = new Image();
img1.src = "../img/photos/kirby-vanquin/VNK2017-06-28_7888.jpg";
var img2 = new Image();
img2.src = "../img/photos/kirby-vanquin/VNK2017-06-28_7875.jpg";
var img3 = new Image();
img3.src = "../img/photos/kirby-vanquin/VNK2017-06-28_7890.jpg";
var img4 = new Image();
img4.src = "../img/photos/kirby-vanquin/VNK2017-06-28_7921.jpg";
var photos = [img1, img2, img3, img4];*/
/*récupération des données de bdd-image.json*/
var grid = document.querySelector('grid')
var requestURL = 'https://raw.githubusercontent.com/chocola-addams/chocola-addams.github.io/master/json/bdd-image.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  var album = request.response;
  showGrid(album);
};

/*création de la grille*/
function showGrid(jsonObj) {
  var photos = jsonObj['photos'];
  var col1 = document.createElement('div');
  col1.setAttribute('class', 'column');
  var col2 = document.createElement('div');
  col2.setAttribute('class', 'column');
  var col3 = document.createElement('div');
  col3.setAttribute('class', 'column');
  document.getElementById("row").appendChild(col1);
  document.getElementById("row").appendChild(col2);
  document.getElementById("row").appendChild(col3);
  for (var i = 0; i < photos.length + 2; i=+3) {
    var img1 = new Image();
    img1.src=photos[i].path;
    var img2 = new Image();
    img2.src=photos[i+1].path;
    var img3 = new Image();
    img3.src=photos[i+2].path;
    col1.appendChild(img1);
    col2.appendChild(img2);
    col3.appendChild(img3);
  };
}