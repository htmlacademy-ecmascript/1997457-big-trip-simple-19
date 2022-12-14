import Adapter from './adapter';
export default class offerGroupAdapter extends Adapter {
  /**
   * @param {Partial<OfferGroup>} data
   */
  constructor(data = {}) {
    super();
    this.groupId = data.type;
    this.items = data.offers;
  }

  /**
   * @override
   * @return {Partial<OfferGroup>}
   */
  toJSON() {
    return {
      'offers': this.items,
      'type': this.groupId
    };
  }
}
