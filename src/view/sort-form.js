import {createElement} from '../render.js';

function createNewSortFormTemplate() {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  <ul class="trip-events__list"></ul>
</form>`;
}

export default class NewSortFormView {
  getTemplate() {
    return createNewSortFormTemplate();
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
