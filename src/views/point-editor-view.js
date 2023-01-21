import View from './view';
import {html} from '../utils';
import NewPointEditorView from './new-point-editor-view';

export default class PointEditorView extends NewPointEditorView {
  constructor() {
    super(...arguments);

    this.pointView = null;
  }

  /**
   * override
   */
  open() {
    super.open();

    this.pointView = this.listView.findById(this.dataset.id);
    console.log(this.pointView);
    this.pointView.replaceWith(this);
    console.log(this);
  }

  /**
   * override
   */
  close() {
    this.replaceWith(this.pointView);
    this.pointView = null;

    super.close(...arguments);
  }
}

customElements.define(String(PointEditorView), PointEditorView);
