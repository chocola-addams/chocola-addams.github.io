
/* PHOTO GRID TEST */
/*récupération des données de bdd-image.json*/
var requestURL = 'https://raw.githubusercontent.com/chocola-addams/chocola-addams.github.io/master/json/bdd-image.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  var album = request.response;
  showGrid(album);
  showPic(album);
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
  var cols = [col1, col2, col3];

  var indexPhoto = 0;
  var indexCol = 0;
  while (indexPhoto < photos.length - 1) {
    var img = new Image();
    img.src = photos[indexPhoto].path;
    cols[indexCol].appendChild(img);
    img.className="hover-shadow";
    img.setAttribute("onclick","openModal();currentSlide("+indexPhoto+1+")");
    indexPhoto++;
    indexCol++;
    if (indexCol == cols.length) {
      indexCol = 0;
    }

  }

}

function showPic(jsonObj){
  var photos = jsonObj['photos'];
  var indexPhoto = 0;
  while (indexPhoto < photos.length - 1) {
    var mySlides=document.createElement('div');
    mySlides.setAttribute('class','mySlides');
    document.getElementById('modal-content').appendChild(mySlides);
    var numbertext=document.createElement('div');
    numbertext.setAttribute('class','numbertext');
    numbertext.textContent=indexPhoto+1+' / '+photos.length+' - '+photos[indexPhoto].year;
    console.log(photos[indexPhoto])
    console.log(photos[indexPhoto].year)
    console.log(photos[indexPhoto].path)
    mySlides.appendChild(numbertext);
    var img = new Image();
    img.src = photos[indexPhoto].path;
    mySlides.appendChild(img);
    img.className="modal-img ml-auto mr-auto";
    indexPhoto++;
  }
}

/*MODAL*/
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