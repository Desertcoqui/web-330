// Title: Bob Repair
// Author: Professor Kumar
// Modified by: Ferdinand Detres
// Date: June 26 2022
// Description: Javascript class with a super constructor

class CartComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <i id='cartIcon' class="fa fa-shopping-cart"></i> (<span id= 'cart-count'></span>)
        `;
  }
}

customElements.define("cart-component", CartComponent);
