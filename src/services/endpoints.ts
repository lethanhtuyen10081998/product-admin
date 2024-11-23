// eslint-disable-next-line import/no-anonymous-default-export
export default {
  LOCAL_API_PREFIX: '/api',
  LOCAL_API_PREFIX_AUTH: '/authenticated',
  SIGN_IN: '/sign-in',
  AGENCIES_REGISTER: '/agencies/register',
  SIGN_OUT: '/logout',
  SIGN_UP: '/sign-up',
  PROFILE: '/profile',
  REFRESH: '/token-refresh',
  // Product
  PRODUCT_LIST: '/package/plans',
  PRODUCT_LIST_POPULAR: '/package/home/popular',
  PRODUCT_DETAIL: '/package/{slug}',
  ADD_TO_CART: '/cart/items',
  DELETE_CART_ITEM: '/cart/items/{cartItemId}',
  UPDATE_CART_ITEM: '/cart/items/{cartItemId}',
  GET_LIST_CART: '/cart/curent-cart',
  // User
  GET_PROFILE: '/users/me',
  UPDATE_PROFILE: '/users',
  // Order
  CREATE_ORDER: '/order/add',
  CREATE_ORDER_QUICKLY: '/order/quick',
  ORDER_HISTORY: '/order/history',
  ORDER_DETAIL: '/order/{id}',
  ORDER_SIM_DETAIL: '/order/check-sim',
  GET_LIST_ORDER: '/order',
  GET_LIST_ORDER_ITEM: '/order/item/all',
  REFUND_ORDER: 'order/refund-sim',
  // Agency
  GET_LIST_AGENCY: '/agencies',
  CREATE_AGENCY: '/agencies/agency',
  RECHARGE: '/recharge',
  GET_AGENCY_DETAIL: '/agencies/{id}',
  UPDATE_AGENCY: '/agencies/{id}',
  CHANGE_STATUS_AGENGY_ACCOUNT: '/agencies/{id}/change-status',

  // Core
  GET_COUNTRY: '/package/country/all',
  AGENCY_LEVEL_COMMISSION: '/agency-level-commission',
  AGENCY_DEBT_LIMIT: '/agency-debt-limit',
  UPDATE_AGENCY_DEBT_LIMIT: '/agencies/{agencyId}',
  GET_LOG: '/log',
  DEBT_LIMIT: '/agency-debt-limit',
  UPDATE_DEBT_LIMIT: '/agency-debt-limit/{id}',
  CREATE_DEBT_LIMIT: '/agency-debt-limit',
  //Commission
  COMMISSION_LEVEL: '/agency-level-commission',
  CREATE_COMMISSION_LEVEL: '/agency-level-commission',
  UPDATE_COMMISSION_LEVEL: '/agency-level-commission/{id}',
};
