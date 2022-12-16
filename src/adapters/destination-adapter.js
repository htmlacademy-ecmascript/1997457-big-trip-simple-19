import Adapter from './adapter';

export default class DestinationAdapter extends Adapter {
  /**
   * @param {Destination} data
   */
  constructor(data) {
    super();

    this.numberId = String(data.id);
    this.textDescription = data.description;
    this.placeName = data.name;
    this.placeImage = data.pictures.map((item) => ({...item}));
  }
}
