import View from './view';
import {html} from '../utils';
import NewPointEditorView from './new-point-editor-view';

export default class PointEditorView extends NewPointEditorView {
  constructor() {
    super(...arguments);

  }

}

customElements.define(String(PointEditorView), PointEditorView);
