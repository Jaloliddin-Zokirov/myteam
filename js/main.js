var elButton = document.querySelector('.header__button');
var elMenu = document.querySelector('.header__menu');

elButton.addEventListener('click', function () {
	elMenu.classList.toggle('header__menu--open');
});



var elButtontwo = document.querySelector('.menu__btn');
var elMenutwo = document.querySelector('.header__menu');

elButtontwo.addEventListener('click', function () {
	elMenutwo.classList.toggle('header__menu--open');
});

var elBody = document.querySelector('body')

elBody.addEventListener("click", function() {
	elBody.classList.toggle('overflow')
})

var elPlus = document.querySelector('.item__plus')

elPlus.addEventListener('click', function () {
	elPlus.classList.toggle('.item__plus--open')
})