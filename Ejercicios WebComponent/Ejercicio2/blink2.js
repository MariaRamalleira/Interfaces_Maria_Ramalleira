class BlinkSpan extends HTMLSpanElement {
    constructor () {
      super ();      
    }
	
	connectedCallback(){
	  var interval = (this.changeInterval || 1) * 1000;
      var base     = this.baseColor || 'inherit';
      var alte     = this.alternativeColor || 'transparent';
	  let n          = 0;	
		
	  setInterval (() => {
        this.style.color = ++n % 2 ? alte : base; // forma de hacer de Sergio
      }, interval);
	}

	get changeInterval() {
	  return this.getAttribute('changeInterval');
	}

	set changeInterval(value) {
	  this.setAttribute('changeInterval', value);
	}

	get baseColor() {
	  return this.getAttribute('baseColor');
	}

	set baseColor(value) {
	  this.setAttribute('baseColor', value);
	}
	
	get alternativeColor() {
	  return this.getAttribute('alternativeColor');
	}

	set alternativeColor(value) {
	  this.setAttribute('alternativeColor', value);
	}
}
customElements.define ('wc-blink-span', BlinkSpan, {extends: 'span'});