// Esta función simula una barra de progreso de 2 segundos que devuelve una promesa
function loadBar(){			
	let barra = document.querySelector(".barra");
	let tiempo = 2000;
	let proceso = 0;
	var start = null;

	return new Promise((resolve, reject) => {
		function step(timestamp) {
			if (!start) start = timestamp;
			var progress = timestamp - start;
			let pct = ((progress*100)/tiempo) + "%"; 
			barra.style.width = pct;
				
			if (progress < tiempo) {
				proceso = window.requestAnimationFrame(step); 
			} else {
				barra.style.width = "100%";	
				resolve("El fichero cargó bien");				
			}
		}
		
		proceso = window.requestAnimationFrame(step); // Llamada a función step
	});	
}

// Función para cargar ficheros
function cargarPromesa(opcion){
	if (opcion === "all"){
		return Promise.all([fetch('https://reqres.in/api/users'),fetch('https://reqres.in/api/login')]);
	} else if (opcion === "race"){
		return Promise.race([fetch('https://reqres.in/api/users'),fetch('https://reqres.in/api/login')]);
	} else {
		return fetch('https://reqres.in/api/users');
	}
}


document.addEventListener("DOMContentLoaded", () => {
	let mensaje = document.getElementById('mensaje');
	
	document.getElementById("cargar").addEventListener("click", ()=>{
		mensaje.innerHTML = "Cargando";		
		
		// Cargamos la promesa que corresponda
		cargarPromesa(document.getElementById("modo").value)		
		
		.then( (respuesta) => {
			console.log(respuesta);
			
			return loadBar(); 
		})
		
		.then( (respuesta) => {
			mensaje.innerHTML = respuesta;
		})
		
		
		.catch( (error) => {
			// mensaje.inner = "Error: " + error;
			document.querySelector(".barra").style.width = "0%"; 
		});	
	});    
})



