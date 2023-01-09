import FilterView from './views/filter-view';
import SortView from './views/sort-view';
import ListView from './views/list-view';
import './views/point-view';
import './views/new-point-editor-view';
import './presenters/list-presenter';

import Store from './store';

import CollectionModel from './models/collection-model';
import PointAdapter from './adapters/point-adapter';
import OfferGroupAdapter from './adapters/offer-group-adapter';
import DestinationAdapter from './adapters/destination-adapter';

import {FilterType, SortType} from './enums';
import {filterCallbackMap, sortCallbackMap} from './maps';

import FilterPresenter from './presenters/filter-presenter';
import SortPresenter from './presenters/sort-presenter';
import ListPresenter from './presenters/list-presenter';

const BASE = 'https://19.ecmascript.pages.academy/big-trip-simple';
const AUTH = 'Basic roma1996sdsdsdsdsdsdsdsd7';

/**
 * @type {Store<Point>}
 */
const pointsStore = new Store(`${BASE}/points`, AUTH);
const pointsModel = new CollectionModel({
  store: pointsStore,
  adapt: (item) => new PointAdapter(item),
  filter: filterCallbackMap[FilterType.EVERYTHING],
  sort: sortCallbackMap[SortType.PRICE]
});

/**
 * @type {Store<Destination>}
*/
const destinationsStore = new Store(`${BASE}/destinations`, AUTH);
const destinationsModel = new CollectionModel({
  store: destinationsStore,
  adapt: (item) => new DestinationAdapter(item)
});

/**
 * @type {Store<OfferGroup>}
 */
const offerGroupsStore = new Store(`${BASE}/offers`, AUTH);
const offerGroupsModel = new CollectionModel({
  store: offerGroupsStore,
  adapt: (item) => new OfferGroupAdapter(item)
});

const models = [pointsModel, destinationsModel, offerGroupsModel];

const filterView = document.querySelector(String(FilterView));
const sortView = document.querySelector(String(SortView));
const listView = document.querySelector(String(ListView));

const {log, table} = console;

Promise.all(
  models.map((model) => model.ready())
)

  .then(async () => {
    // table(pointsModel.list());
    new FilterPresenter(filterView, models);
    new SortPresenter(sortView, models);
    new ListPresenter(listView, models);
  })

  .catch((error) => {
    log(error);
  });
