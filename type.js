/**
 * Created by fjywan on 2017/10/23.
 */

export let request = {
  GET_SCREEN_INFO: 'getScreenInfo',
  GET_HELP_INFO: 'getHelpInfo',
  GET_DISCOUNT_STORES: 'getDiscountStoresByFloor',
  GET_STORE_INFO: 'getStoreInfo',
  GET_REGIONTYPES_BY_FLOOR: 'getRegionTypesByFloor',
  GET_ALL_REGIONTYPES: 'getAllRegionTypes',
  GET_STORES_BY_FLOOR: 'getStoresByFloor',
  GET_ALL_STORES: 'getAllStores',
  GET_STORE_WITH_CHART_BY_REGION_TYPE: 'getStoreWithChartByRegionType',
  GET_PLAZA_DISCOUNT_TYPE: 'getPlazaDiscountType',
  GET_STORE_BY_DISCOUNT_TYPE: 'getStoreByDiscountType'
};

export function init(arg) {
  request = Object.assign({}, request, arg)
}