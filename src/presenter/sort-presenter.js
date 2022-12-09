import {render} from '../render.js';
import NewSortFormView from '../view/sort-form.js';
import NewSortElementView from '../view/sort-element.js';

export default class SortPresenter {
  sortForm = new NewSortFormView();
  sortElement = new NewSortElementView();

  constructor({sortContainer}) {
    this.sortContainer = sortContainer;
  }

  init() {
    render(this.sortForm, this.sortContainer);
    const tripEventsList = document.querySelector('.trip-events__list');
    for (let i = 0; i < 3; i++) {
      // console.log('created');
      render(this.sortElement, tripEventsList);
    }
  }
}
