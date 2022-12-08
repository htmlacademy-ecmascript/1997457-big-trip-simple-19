import NewCreationFormView from './view/creation-form.js';
import NewEditFormView from './view/edit-form.js';

import NewSortFormView from './view/sort-form.js';
import NewSortElementView from './view/sort-element.js';
import NewRoutPointView from './view/rout-point.js';
import NewRoutItemView from './view/rout-item.js';
import FilterPresenter from './presenter/filter-presenter.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const filterPresenter = new FilterPresenter({filterContainer: tripControlsFilters});

import {render} from './render.js';

filterPresenter.init();

