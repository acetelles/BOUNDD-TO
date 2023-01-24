canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

window.addEventListener("keydown", my_keydown)
window.addEventListener("keypressed", my_keypressed)

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //define una variable para una imagen nueva
	img_imgTag.onload = uploadimg; // establece una función para cargar la variable
	img_imgTag.src = img_image;   // carga la imagen //maestra soy yo carmina, mi mamá se llevo el cel asi que le tengo que decir por aca, no le entendi a los 3 anteriores jeje, gracias
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}


function my_keypressed(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

//tambien sospecho que este esta mal, si me podria confirmar
}

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	else {
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png"
}
function numberkey()
{
	
}
function arrowkey()
{
}
function specialkey()
{
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
