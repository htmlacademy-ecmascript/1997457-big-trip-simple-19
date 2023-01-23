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
      // console.log(this.location);
      const pointId = this.location.searchParams.get('id');
      // console.log(pointId, 'pointId');
      const point = this.pointsModel.findById(pointId);
      // console.log(point, 'point');

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
    // console.log(point.id);
    await this.pointsModel.delete(point.id);
  }

  /**
   * @override
   * @param {Event} event
   */
  async handleViewReset(event) {
    // прописать удаление точки
    // как save
    event.preventDefault();


    this.view.awaitDelete(true);

    try {
      const point = this.pointsModel.item();
      await this.delete(point);
    }

    catch (exception) {
      this.view.shake();
    }

    this.view.awaitDelete(false);
  }
}
