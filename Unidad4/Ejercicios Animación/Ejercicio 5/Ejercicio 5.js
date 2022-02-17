document.addEventListener("DOMContentLoaded", () => {		
	var divs = document.querySelectorAll(".animacion");
	var currentID = 0;
	var contadorDiv = 0;

	function reiniciar(){		
		contadorDiv = 0;
	
		divs.forEach((curDIV) => {
			curDIV.style.display = "none";
		});	
				
		aparecer();
	}
	
	// Crea una promesa que muestra el bot�n actual
	function mostrarUnDIV(){
		let p1 = new Promise((resolve, reject) => {
			currentID = setTimeout(() => {
				divs[contadorDiv].style.display = "block"; // Por cada setTimeout mostramos el bot�n
				resolve(currentID);						
			}, 1000);			
		});
		
		return p1;
	}

	function aparecer(){
		if (contadorDiv == divs.length){
			currentID = setTimeout(reiniciar, 1000);
		} else {
			mostrarUnDIV().then(() => {
				contadorDiv++;
				aparecer();	
			});			
		}	
	}
	
	aparecer();
		
	divs.forEach((elem) => {
		elem.addEventListener("click", click);
	});
		
	function click(){
		clearTimeout(currentID);				
				reiniciar();	
	}
});

