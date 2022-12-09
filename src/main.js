import NewCreationFormView from './view/creation-form.js';
import NewEditFormView from './view/edit-form.js';

import NewRoutPointView from './view/rout-point.js';
import NewRoutItemView from './view/rout-item.js';

import FilterPresenter from './presenter/filter-presenter.js';
import SortPresenter from './presenter/sort-presenter.js';

import './views/hello-world';
import './views/filter-view';
import './views/sort-view';
import './views/list-view';
import './views/point-view';
import './views/new-point-editor-view';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const filterPresenter = new FilterPresenter({filterContainer: tripControlsFilters});

const tripEvents = document.querySelector('.trip-events');
const sortPresenter = new SortPresenter({sortContainer: tripEvents});

filterPresenter.init();
sortPresenter.init();

