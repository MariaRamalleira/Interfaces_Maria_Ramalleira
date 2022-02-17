document.addEventListener("DOMContentLoaded", () => {	
    var elemento = document.querySelector(".cuentaAtras"); 
    var inicio = document.querySelector("#iniciar"); 
    var pausa = document.querySelector("#parar");
    var ID = 0;
    
    function comenzar(){
        let counter = document.querySelector("#segundos").value; 
        if (counter <= 0){
            alert("Introduce un valor mayor que 0")
        } else {
            elemento.style.color = "black";
            elemento.innerHTML = counter;
            ID = setInterval(() => {
              counter--;
              elemento.innerHTML = counter;
              if (counter === 0) {
                clearInterval(ID);
                elemento.style.color = "red";		
              }
            }, 1000);						
        }					
    }
    
    function parar(){
        if (ID) clearInterval(ID);
    }
                    
    inicio.addEventListener("click", comenzar);
    pausa.addEventListener("click", parar);	  
});