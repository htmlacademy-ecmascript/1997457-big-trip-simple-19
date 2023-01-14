import View from '../view';
import {html} from '../../utils';

export default class DestinationView extends View {
  constructor() {
    super();

    this.classList.add('event__field-group', 'event__field-group--destination');
  }

  /**
   * @override
   */

  createHtml() {
    return html`
      <label class="event__label  event__type-output" for="event-destination-1">
        Flight
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" list="destination-list-1">
      <datalist id="destination-list-1">

      </datalist>
    `;
  }

  // <option value="Amsterdam"></option>
  // <option value="Geneva"></option>
  // <option value="Chamonix"></option>

  /**
   * @param {OptionViewState} state
   */
  createOptionHtml(state) {
    return html`
      <option value="${state.value}">${state.title}</option>
    `;
  }

  /**
   * @param {OptionViewState[]} states
   */
  setOptions(states) {
    const optionsHtml = states.map(this.createOptionHtml).join('');

    this.querySelector('datalist').insertAdjacentHTML('beforeend', optionsHtml);
  }
}

customElements.define(String(DestinationView), DestinationView);
