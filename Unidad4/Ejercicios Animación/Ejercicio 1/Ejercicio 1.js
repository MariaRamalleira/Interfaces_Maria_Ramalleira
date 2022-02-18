document.addEventListener("DOMContentLoaded", () => {		
	var elementos = document.querySelectorAll(".animacion");
	var arrayID = [];

	function reiniciar(){		
		arrayID = [];
		elementos.forEach((curDIV) => {
			curDIV.style.display = "none";
		})
		aparecer();
	}

	function aparecer(){
		elementos.forEach((elem, index) =>{			
			let newID = setTimeout(() => {
				elem.style.display = "block";
			}, 1000*index);
			
			arrayID.push(newID);
		});
	}
	
	aparecer();
		
	elementos.forEach((elem) => {
		elem.addEventListener("click", click);
	});
	
	function click(){
		arrayID.forEach((curID) => {
				clearTimeout(curID);				
			});
			
			reiniciar();
	}

			  
});
