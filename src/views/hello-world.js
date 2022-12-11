import {html} from '../utils';

export default class HelloWorldView extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html`<div>hello, world!</div>`;
  }

  changeColor(){
    this.style = 'background-color: green';
  }
}

customElements.define('hello-world', HelloWorldView);
