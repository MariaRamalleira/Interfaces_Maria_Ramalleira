class Blink extends HTMLElement {
    constructor () {
      super ();      
    }
	connectedCallback(){
	  let interval = 1000;
	  let base = "inherit";
	  let alte = "transparent";
	  var n=0;
	  
	  if (this.getAttribute ('changeInterval') != null){
		  interval = this.getAttribute('changeInterval')*1000;
      }
	  
	  if (this.getAttribute ('baseColor') != null){
		  base = this.getAttribute('baseColor');
      }
	  
	  if (this.getAttribute ('alternativeColor') != null){
		  alte = this.getAttribute('alternativeColor');
      };
		
	  setInterval (() => {
        this.style.color = ++n % 2 ? alte : base;
		
      }, interval);
	}	
}

customElements.define ('wc-blink', Blink);