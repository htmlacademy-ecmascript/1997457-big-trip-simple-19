import {filterCallbackMap, filterTitleMap} from '../maps';
import Presenter from './presenter';
import { findKey } from '../utils';

/**
 * @extends {Presenter<FilterView>}
 */
export default class FilterPresenter extends Presenter {
  constructor() {
    super(...arguments);

    const options = Object.entries(filterTitleMap).map(([value, title]) => ({title, value}));

    this.view.setOptions(options);
    this.updateViewValue();
    this.view.addEventListener('change', this.handleViewChange.bind(this));
  }

  updateViewValue() {
    const filter = this.pointsModel.getFilter();
    // const filterType = Object.keys(filterCallbackMap).find((key) => filterCallbackMap[key] === filter);
    const filterType = findKey(filterCallbackMap, filter);

    this.view.setValue(filterType);
  }

  handleViewChange() {
    const filterType = this.view.getValue();
    // console.log(filterType);
    this.pointsModel.setFilter(filterCallbackMap[filterType]);
  }
}
