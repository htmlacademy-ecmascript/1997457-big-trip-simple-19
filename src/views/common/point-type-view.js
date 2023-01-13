import {html} from '../../utils';
import RadioGroupView from '../radio-group-view';
import {pointIconMap} from '../../maps';

export default class PointTypeView extends RadioGroupView {
  constructor() {
    super();

    this.classList.add('event__type-wrapper');
  }

  /**
   * @override
   * @param {string} value
   */
  setValue(value) {
    super.setValue(value);
    if (pointIconMap[value]) {
      /**
       * @type{HTMLImageElement}
       */
      (this.querySelector('.event__type-icon')).src = pointIconMap[value];
    }
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
        </fieldset>
      </div>
    `;
  }

  /**
   * @param {OptionViewState} state
   */
  createOptionHtml(state) {
    return html`
      <div class="event__type-item">
        <input
          id="event-type-${state.value}-1"
          class="event__type-input  visually-hidden"
          type="radio" name="event-type"
          value= "${state.value}">
        <label
          class="event__type-label  event__type-label--${state.value}"
          for="event-type-sightseeing-1">${state.value}</label>
      </div>
    `;
  }

  /**
   * @param {OptionViewState[]} states
   */
  setOptions(states) {
    const optionsHtml = states.map(this.createOptionHtml).join('');

    this.querySelector('fieldset').insertAdjacentHTML('beforeend', optionsHtml);
  }
}

customElements.define(String(PointTypeView), PointTypeView);
