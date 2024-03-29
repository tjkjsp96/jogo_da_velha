let player1 = "X";
let player2 = "O";
let playTime = player1;
let images = new Array();

preloadImages("imagens/x.png","imagens/o.png")			
atualizaMostrador();
inicializarTabuleiro();

function preloadImages(){
	for (i = 0; i < preloadImages.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preloadImages.arguments[i]
				}
}


function atualizaMostrador(){

	if (playTime == player1) {
		let player = document.querySelectorAll("header img")[0];
		player.setAttribute("src", images[0].src);
    } 
    
    else{
		let player = document.querySelectorAll("header img")[0];
		player.setAttribute("src", images[1].src);
	}
}


function inicializarTabuleiro(){

	let blocos = document.getElementsByClassName("tabuleiro");
	for (let i = 0; i < blocos.length; i++) {

		blocos[i].innerHTML = "<img id='p1' src='"+images[0].src+"' border='0'><img id='p2' src='"+images[1].src+"' border='0'>";
		blocos[i].getElementsByTagName('img')[0].style.display = "none";
		blocos[i].getElementsByTagName('img')[1].style.display = "none";

		blocos[i].onclick = function(){

			if(this.getAttribute("vez") == ""){

				if (playTime == player1) {
					this.getElementsByTagName('img')[0].style.display = "inline";
					this.setAttribute("vez", player1);
					playTime = player2;

				}else{
					this.getElementsByTagName('img')[1].style.display = "inline";
					this.setAttribute("vez", player2);
					playTime = player1;
				}
				atualizaMostrador();
			}

		};
	}
}