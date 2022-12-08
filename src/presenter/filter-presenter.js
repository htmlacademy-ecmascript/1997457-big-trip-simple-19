import {render} from '../render.js';
import NewFilterFormView from '../view/filter-form.js';
import NewFilterElementView from '../view/filter-element.js';

export default class FilterPresenter {
  filterForm = new NewFilterFormView();
  filterElement = new NewFilterElementView();

  constructor({filterContainer}) {
    this.filterContainer = filterContainer;
  }

  init() {
    render(this.filterForm, this.filterContainer);
    for (let i = 0; i < 3; i++) {
      render(this.filterElement, this.filterForm.getElement());
    }
  }
}
