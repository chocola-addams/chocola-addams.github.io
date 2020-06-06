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
/*récupération des données de bdd-image.json*/
var requestURL = 'https://github.com/chocola-addams/chocola-addams.github.io/tree/master/json/bdd-mage.json';
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
  var row = document.createElement('div');
  var col1=document.createElement('div').setAttribute('class','column');
  var col2=document.createElement('div').setAttribute('class','columnl');
  var col3=document.createElement('div').setAttribute('class','column');
  document.getElementsByClassName("row").appendChild(row);
  row.appendChild(col1)
  row.appendChild(col2)
  row.appendChild(col3)
  for (var i = 0; i < photos.length/3+1; i++) {
    row.col1.appendChild("i")
    row.col1.appendChild("i+1")
    row.col1.appendChild("i+2")
  }
}