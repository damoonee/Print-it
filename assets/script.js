const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let numero = 0;

function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero > 3)
		numero = 0;
	if (numero < 0)
		numero = 3;
	document.getElementById("image_slide").src = "assets/images/slideshow/" + slides[numero]["image"];
	document.getElementById("texte_slide").innerHTML = slides[numero]["tagLine"];
	document.getElementsByClassName("dot_selected")[0].classList.remove("dot_selected");
	document.getElementsByClassName("dot")[numero].classList.add("dot_selected");
}
