
// Кнопки LIKE
// начальное состояние кнопки — не кликнута
//var isClicked = false;
// вписываю id тега кнопки в скобки
var button = document.getElementById('likes');
//var img = document.querySelectorAll('like');
// при клике по кнопке скрипт начинает работать
function myFunction() {
  if (isClicked) {
    // при нажатии кнопка становится белой
    button.classList = '';
    isClicked = false;
  } else {
    // при нажатии кнопка становится красной в CSS .clicked{}
    button.classList.add('clicked');
    isClicked = true;
  }
};

//var i;
//var button = document.querySelectorAll('clicked');
//for (i = 0; i < button.length; i++) {
//    result[i].button.display = "none";
//  }
//
//document.getElementById("likes").value = result;

//var result = document.querySelectorAll('clicked');
//var button = document.getElementById('likes');
//for (var i=0; i < button.length; i++) {
//    result += "\n  " + button[i].textContent;
//}

// начальное состояние кнопки — не кликнута
var isClicked = false;
// вписываю переменную кнопки в скобки
var button2 = document.getElementsByTagName('button2')[0];
// при клике по кнопке скрипт начинает работать
button2.onclick = function() {
  if (isClicked) {
    // при нажатии кнопка становится белой в CSS .clicked1{}
    button2.classList = 'like';
    isClicked = false;
  } else {
    // при нажатии кнопка становится красной в CSS .clicked{}
    button2.classList.add('clicked');
    isClicked = true;
  }
};

// начальное состояние кнопки — не кликнута
var isClicked = false;
// вписываю переменную кнопки в скобки
var button3 = document.getElementsByTagName('button3')[0];
// при клике по кнопке скрипт начинает работать
button3.onclick = function() {
  if (isClicked) {
    // при нажатии кнопка становится белой в CSS .clicked1{}
    button3.classList = 'like';
    isClicked = false;
  } else {
    // при нажатии кнопка становится красной в CSS .clicked{}
    button3.classList.add('clicked');
    isClicked = true;
  }
};

// начальное состояние кнопки — не кликнута
var isClicked = false;
// вписываю переменную кнопки в скобки
var button4 = document.getElementsByTagName('button4')[0];
// при клике по кнопке скрипт начинает работать
button4.onclick = function() {
  if (isClicked) {
    // при нажатии кнопка становится белой в CSS .clicked1{}
    button4.classList = 'like';
    isClicked = false;
  } else {
    // при нажатии кнопка становится красной в CSS .clicked{}
    button4.classList.add('clicked');
    isClicked = true;
  }
};

// начальное состояние кнопки — не кликнута
var isClicked = false;
// вписываю переменную кнопки в скобки
var button5 = document.getElementsByTagName('button5')[0];
// при клике по кнопке скрипт начинает работать
button5.onclick = function() {
  if (isClicked) {
    // при нажатии кнопка становится белой в CSS .clicked1{}
    button5.classList = 'like';
    isClicked = false;
  } else {
    // при нажатии кнопка становится красной в CSS .clicked{}
    button5.classList.add('clicked');
    isClicked = true;
  }
};

// начальное состояние кнопки — не кликнута
var isClicked = false;
// вписываю переменную кнопки в скобки
var button6 = document.getElementsByTagName('button6')[0];
// при клике по кнопке скрипт начинает работать
button6.onclick = function() {
  if (isClicked) {
    // при нажатии кнопка становится белой в CSS .clicked1{}
    button6.classList = 'like';
    isClicked = false;
  } else {
    // при нажатии кнопка становится красной в CSS .clicked{}
    button6.classList.add('clicked');
    isClicked = true;
  }
};

// начальное состояние кнопки — не кликнута
var isClicked = false;
// вписываю переменную кнопки в скобки
var button7 = document.getElementsByTagName('button7')[0];
// при клике по кнопке скрипт начинает работать
button7.onclick = function() {
  if (isClicked) {
    // при нажатии кнопка становится белой в CSS .clicked1{}
    button7.classList = 'like';
    isClicked = false;
  } else {
    // при нажатии кнопка становится красной в CSS .clicked{}
    button7.classList.add('clicked');
    isClicked = true;
  }
};

// начальное состояние кнопки — не кликнута
var isClicked = false;
// вписываю переменную кнопки в скобки
var button8 = document.getElementsByTagName('button8')[0];
// при клике по кнопке скрипт начинает работать
button8.onclick = function() {
  if (isClicked) {
    // при нажатии кнопка становится белой в CSS .clicked1{}
    button8.classList = 'like';
    isClicked = false;
  } else {
    // при нажатии кнопка становится красной в CSS .clicked{}
    button8.classList.add('clicked');
    isClicked = true;
  }
};
//Конец кнопок LIKE

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Модальное окно быстрого просмотра 1
/*var modal = document.getElementById("myModal8");*/
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById('myImg');*/
var button = document.getElementById("myBtn1");
//var modalImg = document.getElementById("img01");
/*var captionText = document.getElementById("caption");*/ //текст на фотографии
button.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    /*captionText.innerHTML = this.alt;*/
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//конец модального окна

// Слайд картинок в модальном окне 1
var slideIndex = 1;
showSlides1(slideIndex);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides1(slideIndex = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1")
  /*var dots = document.getElementsByClassName("demo");*/
  /*var captionText = document.getElementById("caption");*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  /*dots[slideIndex-1].className += " active";*/
  /*captionText.innerHTML = dots[slideIndex-1].alt;*/
}

/* Боковая панель купить в 1 клик 1*/
function openNav() {
    document.getElementById("mySidenav1").style.width = "300px"; /* ширина боковой панели */
}

function closeNav() {
    document.getElementById("mySidenav1").style.width = "0"; /* кнопка закрытия боковой панели */
}

//Модальное окно быстрого просмотра 2
/*var modal = document.getElementById("myModal8");*/
var modalImg2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById('myImg');*/
var button = document.getElementById("myBtn2");
/*var modalImg = document.getElementById("img01");*/
/*var captionText = document.getElementById("caption");*/ //текст на фотографии
button.onclick = function(){
    modalImg2.style.display = "block";
    modalImg.src = this.src;
    /*captionText.innerHTML = this.alt;*/
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//конец модального окна

// Слайд картинок в модальном окне 2
var slideIndex = 1;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2")
  /*var dots = document.getElementsByClassName("demo");*/
  /*var captionText = document.getElementById("caption");*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  /*dots[slideIndex-1].className += " active";*/
  /*captionText.innerHTML = dots[slideIndex-1].alt;*/
}

/* Боковая панель купить в 1 клик 2*/
function openNav() {
    document.getElementById("mySidenav2").style.width = "300px"; /* ширина боковой панели */
}

function closeNav() {
    document.getElementById("mySidenav2").style.width = "0"; /* кнопка закрытия боковой панели */
}

//Модальное окно быстрого просмотра 3
/*var modal = document.getElementById("myModal8");*/
var modalImg3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById('myImg');*/
var button = document.getElementById("myBtn3");
/*var modalImg = document.getElementById("img01");*/
/*var captionText = document.getElementById("caption");*/ //текст на фотографии
button.onclick = function(){
    modalImg3.style.display = "block";
    modalImg.src = this.src;
    /*captionText.innerHTML = this.alt;*/
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//конец модального окна

// Слайд картинок в модальном окне 3
var slideIndex = 1;
showSlides3(slideIndex);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides3(slideIndex = n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3")
  /*var dots = document.getElementsByClassName("demo");*/
  /*var captionText = document.getElementById("caption");*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  /*dots[slideIndex-1].className += " active";*/
  /*captionText.innerHTML = dots[slideIndex-1].alt;*/
}

/* Боковая панель купить в 1 клик 3*/
function openNav() {
    document.getElementById("mySidenav3").style.width = "300px"; /* ширина боковой панели */
}

function closeNav() {
    document.getElementById("mySidenav3").style.width = "0"; /* кнопка закрытия боковой панели */
}

//Модальное окно быстрого просмотра 5
/*var modal = document.getElementById("myModal8");*/
var modalImg4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById('myImg');*/
var button = document.getElementById("myBtn4");
/*var modalImg = document.getElementById("img01");*/
/*var captionText = document.getElementById("caption");*/ //текст на фотографии
button.onclick = function(){
    modalImg4.style.display = "block";
    modalImg.src = this.src;
    /*captionText.innerHTML = this.alt;*/
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//конец модального окна

// Слайд картинок в модальном окне 4
var slideIndex = 1;
showSlides4(slideIndex);

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides4(slideIndex = n);
}

function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides4")
  /*var dots = document.getElementsByClassName("demo");*/
  /*var captionText = document.getElementById("caption");*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  /*dots[slideIndex-1].className += " active";*/
  /*captionText.innerHTML = dots[slideIndex-1].alt;*/
}

/* Боковая панель купить в 1 клик 4*/
function openNav() {
    document.getElementById("mySidenav4").style.width = "300px"; /* ширина боковой панели */
}

function closeNav() {
    document.getElementById("mySidenav4").style.width = "0"; /* кнопка закрытия боковой панели */
}

//Модальное окно быстрого просмотра 5
/*var modal = document.getElementById("myModal8");*/
var modalImg5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById('myImg');*/
var button = document.getElementById("myBtn5");
/*var modalImg = document.getElementById("img01");*/
/*var captionText = document.getElementById("caption");*/ //текст на фотографии
button.onclick = function(){
    modalImg5.style.display = "block";
    modalImg.src = this.src;
    /*captionText.innerHTML = this.alt;*/
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//конец модального окна

// Слайд картинок в модальном окне 5
var slideIndex = 1;
showSlides5(slideIndex);

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides5(slideIndex = n);
}

function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides5")
  /*var dots = document.getElementsByClassName("demo");*/
  /*var captionText = document.getElementById("caption");*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  /*dots[slideIndex-1].className += " active";*/
  /*captionText.innerHTML = dots[slideIndex-1].alt;*/
}

/* Боковая панель купить в 1 клик 5*/
function openNav() {
    document.getElementById("mySidenav5").style.width = "300px"; /* ширина боковой панели */
}

function closeNav() {
    document.getElementById("mySidenav5").style.width = "0"; /* кнопка закрытия боковой панели */
}

//Модальное окно быстрого просмотра 6
/*var modal = document.getElementById("myModal8");*/
var modalImg6 = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById('myImg');*/
var button = document.getElementById("myBtn6");
/*var modalImg = document.getElementById("img01");*/
/*var captionText = document.getElementById("caption");*/ //текст на фотографии
button.onclick = function(){
    modalImg6.style.display = "block";
    modalImg.src = this.src;
    /*captionText.innerHTML = this.alt;*/
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//конец модального окна

// Слайд картинок в модальном окне 6
var slideIndex = 1;
showSlides6(slideIndex);

// Next/previous controls
function plusSlides6(n) {
  showSlides6(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides6(slideIndex = n);
}

function showSlides6(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides6")
  /*var dots = document.getElementsByClassName("demo");*/
  /*var captionText = document.getElementById("caption");*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  /*dots[slideIndex-1].className += " active";*/
  /*captionText.innerHTML = dots[slideIndex-1].alt;*/
}

/* Боковая панель купить в 1 клик 6*/
function openNav() {
    document.getElementById("mySidenav6").style.width = "300px"; /* ширина боковой панели */
}

function closeNav() {
    document.getElementById("mySidenav6").style.width = "0"; /* кнопка закрытия боковой панели */
}

//Модальное окно быстрого просмотра 7
/*var modal = document.getElementById("myModal8");*/
var modalImg7 = document.getElementById("myModal7");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById('myImg');*/
var button = document.getElementById("myBtn7");
/*var modalImg = document.getElementById("img01");*/
/*var captionText = document.getElementById("caption");*/ //текст на фотографии
button.onclick = function(){
    modalImg7.style.display = "block";
    modalImg.src = this.src;
    /*captionText.innerHTML = this.alt;*/
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//конец модального окна

// Слайд картинок в модальном окне 7
var slideIndex = 1;
showSlides7(slideIndex);

// Next/previous controls
function plusSlides7(n) {
  showSlides7(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides7(slideIndex = n);
}

function showSlides7(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides7")
  /*var dots = document.getElementsByClassName("demo");*/
  /*var captionText = document.getElementById("caption");*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  /*dots[slideIndex-1].className += " active";*/
  /*captionText.innerHTML = dots[slideIndex-1].alt;*/
}

/* Боковая панель купить в 1 клик 7*/
function openNav() {
    document.getElementById("mySidenav7").style.width = "300px"; /* ширина боковой панели */
}

function closeNav() {
    document.getElementById("mySidenav7").style.width = "0"; /* кнопка закрытия боковой панели */
}

//Модальное окно быстрого просмотра 8
/*var modal = document.getElementById("myModal8");*/
var modalImg8 = document.getElementById("myModal8");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById('myImg');*/
var button = document.getElementById("myBtn8");
/*var modalImg = document.getElementById("img01");*/
/*var captionText = document.getElementById("caption");*/ //текст на фотографии
button.onclick = function(){
    modalImg8.style.display = "block";
    modalImg.src = this.src;
    /*captionText.innerHTML = this.alt;*/
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//конец модального окна

// Слайд картинок в модальном окне 8
var slideIndex = 1;
showSlides8(slideIndex);

// Next/previous controls
function plusSlides8(n) {
  showSlides8(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides8(slideIndex = n);
}

function showSlides8(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides8")
  /*var dots = document.getElementsByClassName("demo");*/
  /*var captionText = document.getElementById("caption");*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  /*dots[slideIndex-1].className += " active";*/
  /*captionText.innerHTML = dots[slideIndex-1].alt;*/
}

/* Боковая панель купить в 1 клик 8*/
function openNav() {
    document.getElementById("mySidenav8").style.width = "300px"; /* ширина боковой панели */
}

function closeNav() {
    document.getElementById("mySidenav8").style.width = "0"; /* кнопка закрытия боковой панели */
}