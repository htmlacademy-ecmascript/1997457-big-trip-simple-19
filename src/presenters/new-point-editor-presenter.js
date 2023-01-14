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

    this.view.pointTypeView.setOptions(pointTypeOptions);
    this.view.pointTypeView.setValue(PointType.DRIVE);
    this.view.addEventListener('submit', this.handleViewSubmit.bind(this));
    this.view.addEventListener('reset', this.handleViewReset.bind(this));
    this.view.addEventListener('close', this.handleViewClose.bind(this));
  }

  /**
   * @override
   */
  handleNavigation() {
    if (this.location.pathname === '/new') {
      this.view.open();
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

}
