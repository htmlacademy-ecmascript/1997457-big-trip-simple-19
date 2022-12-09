import View from './view';
import {html} from '../utils';
import PointTypeView from './common/point-type-view';

export default class NewPointEditorView extends View {
  constructor() {
    super();

    this.classList.add('trip-events__item');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
    <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <!-- PointTypeView -->
      <${PointTypeView}></${PointTypeView}>
      <!-- DestinationView -->
      <!-- DatesView -->
      <!-- BasePriceView -->
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section class="event__details">
      <!-- OffersView -->
      <!-- DestinationDetailsView -->
    </section>
  </form>
    `;
  }
}

customElements.define(String(NewPointEditorView), NewPointEditorView);
