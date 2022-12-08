import {createElement} from '../render.js';

function createNewRoutItemTemplate() {
  return `<li class="trip-events__item">
</li>`;
}

export default class NewRoutItemView {
  getTemplate() {
    return createNewRoutItemTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
