import Adapter from './adapter';

export default class destinationAdapter extends Adapter {
  /**
   * @param {Partial<Destination>} data
   */
  constructor(data = {}) {
    super();

    this.numberId = String(data.id);
    this.textDescription = data.description;
    this.placeName = data.name;
    this.placeImage = data.pictures;
  }

  /**
   * @override
   * @return {Partial<Destination>}
   */
  toJSON() {
    return {
      'id': Number(this.numberId),
      'description': this.textDescription,
      'name': this.placeName,
      'pictures': this.placeImage
    };
  }
}
