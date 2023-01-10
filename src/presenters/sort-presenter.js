import {sortDisabilityMap, sortTitleMap, sortCallbackMap} from '../maps';
import Presenter from './presenter';
import { findKey } from '../utils';

/**
 * @extends {Presenter<SortView>}
 */
export default class SortPresenter extends Presenter {
  constructor() {
    super(...arguments);

    const options = Object.entries(sortTitleMap).map(([value, title]) => ({title, value}));
    const disabledSorts = Object.values(sortDisabilityMap);

    this.view.setOptions(options);
    this.view.setDisability(disabledSorts);
    this.updateViewValue();

    this.view.addEventListener('change', this.handleViewChange.bind(this));
  }

  updateViewValue() {
    const filter = this.pointsModel.getSort();
    const sortType = findKey(sortCallbackMap, filter);

    this.view.setValue(sortType);
  }

  handleViewChange() {
    const sortType = this.view.getValue();
    this.pointsModel.setSort(sortCallbackMap[sortType]);
  }
}
