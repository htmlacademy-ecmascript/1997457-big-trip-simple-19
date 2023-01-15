import {PointType} from '../enums';
import {pointTitleMap} from '../maps';
import Presenter from './presenter';

/**
 * @extends {Presenter<NewPointEditorView>}
 */
export default class NewPointEditorPresenter extends Presenter {
  constructor() {
    super(...arguments);

    const pointTypeOptions =
      Object.entries(pointTitleMap).map(([key, value]) => ({value: key, title: value}));

    const destinationOptions =
      this.destinationsModel.listAll().map((item) => ({title: '', value: item.name}));
    // console.log(destinationOptions);
    // const destinationOptions =
    // Object.entries(pointTitleMap).map(([key, value]) => ({value: key, title: value}));

    this.view.pointTypeView.setOptions(pointTypeOptions);
    this.view.addEventListener('change', this.handlePointTypeViewChange.bind(this));
    this.view.destinationView.setOptions(destinationOptions);
    this.view.addEventListener('submit', this.handleViewSubmit.bind(this));
    this.view.addEventListener('reset', this.handleViewReset.bind(this));
    this.view.addEventListener('close', this.handleViewClose.bind(this));
  }

  /**
   * @param{PointAdapter} point
   */
  updateView(point) {
    const destination = this.destinationsModel.findById(point.destinationId);
    this.view.pointTypeView.setValue(point.type);
    this.view.destinationView.setLabel(pointTitleMap[point.type]);
    this.view.destinationView.setValue(destination.name);

    this.updateOffersView(point.offerIds);
  }


  /**
   * @param {string[]} offerIds
   */
  updateOffersView(offerIds = []) {

    // TODO: Обновить список предложений
  }

  /**
   * @override
   */
  handleNavigation() {
    if (this.location.pathname === '/new') {
      const point = this.pointsModel.item();
      // console.log(point, 'point');

      point.type = PointType.BUS;
      point.destinationId = this.destinationsModel.item(0).id;
      point.startDate = new Date().toJSON();
      point.endDate = point.startDate;
      point.basePrice = 100;

      this.view.open();


      this.updateView(point);

    } else {
      this.view.close(false);
    }
  }

  /**
   * @param {SubmitEvent} event
   */
  handleViewSubmit(event) {
    event.preventDefault();
  }

  handleViewReset() {
    this.view.close();
    this.navigate('/');
  }

  handleViewClose() {
    this.navigate('/');
  }

  handlePointTypeViewChange() {
    const pointType = this.view.pointTypeView.getValue();

    this.view.destinationView.setLabel(pointTitleMap[pointType]);

    this.updateOffersView();
  }

}
