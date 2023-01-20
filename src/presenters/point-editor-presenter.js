import NewPointEditorPresenter from './new-point-editor-presenter';
import Presenter from './presenter';

/**
 * @extends {NewPointEditorPresenter<PointEditorView>}
 */
export default class PointEditorPresenter extends NewPointEditorPresenter {
  constructor() {
    super(...arguments);
    console.log(this);

  }

  /**
   * @override
   */
  handleNavigation() {
    this.view.close(false);
  }
}
