
function doLike(e) {
    console.log(e)
    e.target.classList = 'clicked';
    } else {
      e.target.classList.add('like'); }
    console.log(e.target)
}


// Кнопки LIKE
// начальное состояние кнопки — не кликнута
var isClicked = false;
// вписываю переменную кнопки в скобки
var button = document.getElementsByTagName('button')[0];



// при клике по кнопке скрипт начинает работать
button.onclick = function() {
  if (isClicked) {
    // при нажатии кнопка становится белой в CSS .clicked1{}
    button.classList = 'like';
    isClicked = false;
  } else {
    // при нажатии кнопка становится красной в CSS .clicked{}
    button.classList.add('clicked');
    isClicked = true;
  }
};
//Конец кнопок LIKE

//// Кнопки LIKE
////// начальное состояние кнопки — не кликнута
////var isClicked = false;
////// вписываю переменную кнопки в скобки
////var button2 = document.getElementsByTagName('button2')[1];
////// при клике по кнопке скрипт начинает работать
////button2.onclick = function() {
////  if (isClicked) {
////    // при нажатии кнопка становится белой в CSS .clicked1{}
////    button2.classList = 'like';
////    isClicked = false;
////  } else {
////    // при нажатии кнопка становится красной в CSS .clicked{}
////    button2.classList.add('clicked');
////    isClicked = true;
////  }
////};
////Конец кнопок LIKE
//
// Get the modal
var modal = document.getElementById("myModal");

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
//
//// Слайд картинок в модальном окне 1
//var slideIndex = 1;
//showSlides1(slideIndex);
//
//// Next/previous controls
//function plusSlides1(n) {
//  showSlides1(slideIndex += n);
//}
//
//// Thumbnail image controls
//function currentSlide(n) {
//  showSlides1(slideIndex = n);
//}
//
//function showSlides1(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides1")
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slides[slideIndex-1].style.display = "block";
//}
//
////Модальное окно быстрого просмотра 2
//var modal2 = document.getElementById("myModal2");
//
//// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myBtn2");
//img.onclick = function(){
//    modal2.style.display = "block";
//    modalImg2.src = this.src;
//}
//
////конец модального окна
//
//// Слайд картинок в модальном окне 2
//var slideIndex2 = 1;
//showSlides2(slideIndex2);
//
//// Next/previous controls
//function plusSlides2(n) {
//  showSlides2(slideIndex2 += n);
//}
//
//// Thumbnail image controls
//function currentSlide(n) {
//  showSlides2(slideIndex2 = n);
//}
//
//function showSlides2(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides2")
//  if (n > slides.length) {slideIndex2 = 1}
//  if (n < 1) {slideIndex2 = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slides[slideIndex2-1].style.display = "block";
//}
//
////Модальное окно быстрого просмотра 3
//var modal3 = document.getElementById("myModal3");
//
//// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myBtn3");
//img.onclick = function(){
//    modal3.style.display = "block";
//    modalImg3.src = this.src;
//}
//
////конец модального окна
//
//// Слайд картинок в модальном окне 3
//var slideIndex3 = 1;
//showSlides3(slideIndex3);
//
//// Next/previous controls
//function plusSlides3(n) {
//  showSlides3(slideIndex3 += n);
//}
//
//// Thumbnail image controls
//function currentSlide(n) {
//  showSlides3(slideIndex3 = n);
//}
//
//function showSlides3(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides3")
//  if (n > slides.length) {slideIndex3 = 1}
//  if (n < 1) {slideIndex3 = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slides[slideIndex3-1].style.display = "block";
//}
//
////Модальное окно быстрого просмотра 4
//var modal4 = document.getElementById("myModal4");
//
//// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myBtn4");
//img.onclick = function(){
//    modal4.style.display = "block";
//    modalImg4.src = this.src;
//}
//
////конец модального окна
//
//// Слайд картинок в модальном окне 4
//var slideIndex4 = 1;
//showSlides4(slideIndex4);
//
//// Next/previous controls
//function plusSlides4(n) {
//  showSlides4(slideIndex4 += n);
//}
//
//// Thumbnail image controls
//function currentSlide(n) {
//  showSlides4(slideIndex4 = n);
//}
//
//function showSlides4(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides4")
//  if (n > slides.length) {slideIndex4 = 1}
//  if (n < 1) {slideIndex4 = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slides[slideIndex4-1].style.display = "block";
//}
//
////Модальное окно быстрого просмотра 5
//var modal5 = document.getElementById("myModal5");
//
//// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myBtn5");
//img.onclick = function(){
//    modal5.style.display = "block";
//    modalImg5.src = this.src;
//}
//
////конец модального окна
//
//// Слайд картинок в модальном окне 5
//var slideIndex5 = 1;
//showSlides5(slideIndex5);
//
//// Next/previous controls
//function plusSlides5(n) {
//  showSlides5(slideIndex5 += n);
//}
//
//// Thumbnail image controls
//function currentSlide(n) {
//  showSlides5(slideIndex5 = n);
//}
//
//function showSlides5(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides5")
//  if (n > slides.length) {slideIndex5 = 1}
//  if (n < 1) {slideIndex5 = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slides[slideIndex5-1].style.display = "block";
//}
//
////Модальное окно быстрого просмотра 6
//var modal6 = document.getElementById("myModal6");
//
//// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myBtn6");
//img.onclick = function(){
//    modal6.style.display = "block";
//    modalImg6.src = this.src;
//}
//
////конец модального окна
//
//// Слайд картинок в модальном окне 6
//var slideIndex6 = 1;
//showSlides6(slideIndex6);
//
//// Next/previous controls
//function plusSlides6(n) {
//  showSlides6(slideIndex6 += n);
//}
//
//// Thumbnail image controls
//function currentSlide(n) {
//  showSlides6(slideIndex6 = n);
//}
//
//function showSlides6(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides6")
//  if (n > slides.length) {slideIndex6 = 1}
//  if (n < 1) {slideIndex6 = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slides[slideIndex6-1].style.display = "block";
//}
//
////Модальное окно быстрого просмотра 7
//var modal7 = document.getElementById("myModal7");
//
//// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myBtn7");
//img.onclick = function(){
//    modal7.style.display = "block";
//    modalImg7.src = this.src;
//}
//
////конец модального окна
//
//// Слайд картинок в модальном окне 7
//var slideIndex7 = 1;
//showSlides7(slideIndex7);
//
//// Next/previous controls
//function plusSlides7(n) {
//  showSlides7(slideIndex7 += n);
//}
//
//// Thumbnail image controls
//function currentSlide(n) {
//  showSlides7(slideIndex = n);
//}
//
//function showSlides7(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides7")
//  if (n > slides.length) {slideIndex7 = 1}
//  if (n < 1) {slideIndex7 = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slides[slideIndex7-1].style.display = "block"
//}
//
////Модальное окно быстрого просмотра 8
//var modal8 = document.getElementById("myModal8");
//
//// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myBtn8");
//img.onclick = function(){
//    modal8.style.display = "block";
//    modalImg8.src = this.src;
//}
//
////конец модального окна
//
//// Слайд картинок в модальном окне 8
//var slideIndex8 = 1;
//showSlides8(slideIndex8);
//
//// Next/previous controls
//function plusSlides8(n) {
//  showSlides8(slideIndex8 += n);
//}
//
//// Thumbnail image controls
//function currentSlide(n) {
//  showSlides8(slideIndex8 = n);
//}
//
//function showSlides8(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides8")
//  if (n > slides.length) {slideIndex8 = 1}
//  if (n < 1) {slideIndex8 = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slides[slideIndex8-1].style.display = "block";
//}
//
///* Боковая панель купить в 1 клик 8*/
//function openNav() {
//    document.getElementById("mySidenav").style.width = "300px"; /* ширина боковой панели */
//}
//
//function closeNav() {
//    document.getElementById("mySidenav").style.width = "0"; /* кнопка закрытия боковой панели */
//}