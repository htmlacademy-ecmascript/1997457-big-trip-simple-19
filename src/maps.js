import {FilterType, SortType} from './enums';

/**
 * @type {Record<string,FilterCallback<PointAdapter>>}
 */
export const filterCallbackMap = {
  [FilterType.EVERYTHING]: () => true,
  [FilterType.FUTURE]: (point) => {
    // console.log('point', point);
    // console.log('pointStartDate', Date.parse(point.startDate));
    // console.log('datenow',Date.now());
    if (Number(Date.parse(point.startDate)) <= Number(Date.now())) {
      return false;
    }
    return true;
  }
};

/**
 * @type {Record<string,SortCallback<PointAdapter>>}
 */
export const sortCallbackMap = {
  [SortType.DAY]: (point, nextPoint) => Number(Date.parse(point.startDate)) - Number(Date.parse(nextPoint.startDate)),
  [SortType.EVENT]: () => 0,
  [SortType.TIME]: () => 0,
  [SortType.PRICE]: (point, nextPoint) => {
    console.log(typeof(nextPoint.basePrice));
    return nextPoint.basePrice - point.basePrice;
  },
  [SortType.OFFERS]: () => 0
};
