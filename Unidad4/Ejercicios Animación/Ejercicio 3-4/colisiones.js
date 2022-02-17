//Este ejercicio está terminado con las soluciones de Sergio 
document.addEventListener("DOMContentLoaded", () => {	
	var elemento = document.querySelector(".cuadradoVerde"); 
	var cuadradoGris = document.querySelector(".cuadradoGris"); 
	var container = document.querySelector("#contenedor"); 
	var mov = document.querySelector("#mov"); 
	const TIME = 1000; 
	
	function comprobar(){		
		var posicion1 = elemento.getBoundingClientRect();
		var posicion2 = cuadradoGris.getBoundingClientRect();
		
		// Comprobamos el límite de todas las coordenadas. La coordenada izquierda y superior deben ser mayor al cuadrado central,
		// pero siempre sin sobrepasar las coordenadas derecha e inferior
		if ((posicion1.left >= posicion2.left) && (posicion1.top >= posicion2.top) && 
			(posicion1.right <= posicion2.right) && (posicion1.bottom <= posicion2.bottom)){	
			document.querySelector("#texto").style.display = "none";
			elemento.style.backgroundColor = "red";
		} else {
			document.querySelector("#texto").style.display = "inline";
			elemento.style.backgroundColor = "greenYellow";
		}
	};
		
	function desplazar(coordenada, direccion){
		var start = null;
		var desp = parseInt(mov.value)*direccion;
		var offset = parseInt(getComputedStyle(elemento).getPropertyValue(coordenada));
		function step(timestamp) {
			if (!start) start = timestamp;
			var progress = timestamp - start;
			
			
			elemento.style.setProperty(coordenada, ((desp * progress) / TIME) + offset + "px");
			
			if (progress < TIME) {
				window.requestAnimationFrame(step);
			} else {
				elemento.style.setProperty(coordenada, (desp + offset) + "px");		

				
				comprobar();
			}	
		}
		
		window.requestAnimationFrame(step);		
	}
	
	
	document.querySelector("#right").addEventListener("click", (e) =>{
		desplazar("left", 1);	
	});
	
	document.querySelector("#left").addEventListener("click", (e) =>{
		desplazar("left", -1);		
	});
	
	document.querySelector("#top").addEventListener("click", (e) =>{
		desplazar("top", -1);		
	})
	
	document.querySelector("#bottom").addEventListener("click", (e) =>{
		desplazar("top", 1);		
	})
	
	
	elemento.addEventListener("dragstart", (event) => {
		var coordenadas = event.target.getBoundingClientRect();
		
		
		event.dataTransfer.setData("text",
		(parseInt(coordenadas.left - event.clientX) + ',' + parseInt(coordenadas.top - event.clientY)));		
		
	});
	
	
		container.addEventListener("dragover", (event) => { 
		event.preventDefault(); 
	}); 
	

	container.addEventListener("drop", (event) => { 
		var offset = event.dataTransfer.getData("text").split(',');

		
		elemento.style.left = (event.clientX + parseInt(offset[0])) + 'px';
		elemento.style.top = (event.clientY + parseInt(offset[1])) + 'px'

		comprobar();
	}); 
	
});
