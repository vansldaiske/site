
//это тестовые скрипты были для сайта


var pageSettings = {
  red: 200,
  green: 200,
  blue: 200,
  background: []
};

var bgColor = 'rgb(' + pageSettings.red + ', ' +
    pageSettings.green + ', ' + pageSettings.blue + ')';

document.body.style.backgroundColor = bgColor;

var header = document.getElementById('header');

var i = 0;

function getRandom(anyArray) {
  var randomNumber = Math.floor(Math.random() * anyArray.length);
  var randomElement = anyArray.randomNumber;
  return randomElement;
}

document.body.style.backgroundImage = getRandom(pageSettings.background);

var cards = document.getElementsByClassName('rules');

window.addEventListener('scroll', function () {
  var scrollY = window.pageYOffset;
  var bgValue = 'rbg(' + (pageSettings.red - scrollY / 4) + ',' +
  (pageSettings.green - scrollY / 4) + ',' + (pageSettings.blue - scrollY / 4) + ')';
  document.body.style.backgroundColor = bgValue;
  for (var c = 0; c < cards.length; c ++) {
    var card = cards[c];
    card.style.color = 'rgb(' + (pageSettings.red * 0 + scrollY / 4) + ',' +
    (pageSettings.green * 0 + scrollY / 4) + ',' + (pageSettings.blue * 0 + scrollY / 4) + ')';
  }
});

// это кнопки в шапке
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// эта функция автоматического слайда в шапке
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Меняйте изображение каждые 3 секунды
}