import {pointIconMap, pointTitleMap} from '../maps';
import Presenter from './presenter';
import {formatDate, formatNumber, formatTime} from '../utils';


/**
 * @extends {Presenter<ListView>}
 */
export default class ListPresenter extends Presenter {
  constructor() {
    super(...arguments);

    this.updateView();
  }

  updateView() {
    this.view.setItems(
      this.pointsModel.list().map(this.createPointViewState, this)
    );
  }

  /**
   * @param {PointAdapter} point
   */
  createPointViewState(point) {
    const destination = this.destinationsModel.findById(point.destinationId);
    const offerGroup = this.offerGroupsModel.findById(point.type);
    console.log(offerGroup);
    // TODO: Подставить значения
    return {
      date: formatDate(point.startDate),
      icon: pointIconMap[point.type],
      title: `${pointTitleMap[point.type]} ${destination.name}`,
      startTime: formatTime(point.startDate),
      startDate: '',
      endTime: formatTime(point.endDate),
      endDate: '',
      basePrice: formatNumber(point.basePrice),
      offers: offerGroup.items
    };
  }
}
