import NewPointEditorPresenter from './new-point-editor-presenter';

/**
 * @extends {NewPointEditorPresenter<PointEditorView>}
 */
export default class PointEditorPresenter extends NewPointEditorPresenter {
  constructor() {
    super(...arguments);
  }

  /**
   * @override
   */
  handleNavigation() {
    this.view.close(false);

    if (this.location.pathname === '/edit') {
      const pointId = this.location.searchParams.get('id');
      const point = this.pointsModel.findById(pointId);

      this.view.dataset.id = pointId;
      this.view.open();
      this.updateView(point);

    }
  }

  /**
   * @override
   * @param {PointAdapter} point
   */
  async save(point) {
    point.id = this.view.dataset.id;

    await this.pointsModel.update(point);
  }

  /**
   * @param {PointAdapter} point
   */
  async delete(point) {
    point.id = this.view.dataset.id;
  }

  /**
   * @override
   * @param {Event} event
   */
  async handleViewReset(event) {
    event.preventDefault();

    this.view.awaitDelete(true);

    try {
      await this.pointsModel.delete(this.view.dataset.id);

      this.view.close();
    }

    catch (exception) {
      this.view.shake();
    }

    this.view.awaitDelete(false);
  }
}
