import NewPointEditorPresenter from './new-point-editor-presenter';
import Presenter from './presenter';

/**
 * @extends {NewPointEditorPresenter<PointEditorView>}
 */
export default class PointEditorPresenter extends NewPointEditorPresenter {
  constructor() {
    super(...arguments);
    // console.log(this);

  }

  /**
   * @override
   */
  handleNavigation() {
    this.view.close(false);

    if (this.location.pathname === '/edit') {
      // console.log(this.location);
      const pointId = this.location.searchParams.get('id');
      console.log(pointId, 'pointId');
      const point = this.pointsModel.findById(pointId);
      console.log(point, 'point');

      this.view.dataset.id = pointId;
      this.view.open();
      this.updateView(point);

    }
  }
}
