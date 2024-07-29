import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import ManageCategoryReducer from './slice/store-owner/catalog/manage-categories';
import ManageAttributeReducer from './slice/store-owner/catalog/manage-attribute';
import ManageNewsLetterReducer from './slice/super-admin/cms/manage-news-letter';
import ManageProductReducer from './slice/store-owner/catalog/manage-product';
import ProductReviewReducer from './slice/super-admin/cms/product-review';
import AbandonedCartReducer from './slice/super-admin/cms/abandoned-cart';
import UserTrackingReducer from './slice/super-admin/cms/user-tracking';
import SalesAgentReducer from './slice/store-owner/sales-agents';
import CmsPagesReducer from './slice/super-admin/cms/cms-pages';
import BackOrderReducer from './slice/store-owner/back-order';
import CustomizerReducer from './customizer/CustomizerSlice';
import WebOrderReducer from './slice/super-admin/web-order';
import AccountsReducer from './slice/super-admin/accounts';
import CategoryReducer from './slice/super-admin/category';
import CustomerReducer from './slice/super-admin/customer';
import SliderReducer from './slice/super-admin/cms/slider';
import CountryReducer from './slice/super-admin/country';
import StoresReducer from './slice/super-admin/stores';
import StateReducer from './slice/super-admin/state';
import CityReducer from './slice/super-admin/city';

import { storeCategoryApi } from './slice/api/store-category';
import { abandonedCartApi } from './slice/api/abandoned-cart';
import { categoriesApi } from './slice/api/categories';
import { webOrderApi } from './slice/api/web-order';
import { customerApi } from './slice/api/customer';
import { accountApi } from './slice/api/account';
import { countryApi } from './slice/api/country';
import { storeApi } from './slice/api/store';
import { stateApi } from './slice/api/state';
import { cityApi } from './slice/api/city';
import { authApi } from './slice/api/auth';


export const store = configureStore({
  reducer: {
    manageNewsLetterReducer: ManageNewsLetterReducer,
    manageAttributeReducer: ManageAttributeReducer,
    manageCategoryReducer: ManageCategoryReducer,
    productReviewReducer: ProductReviewReducer,
    manageProductReducer: ManageProductReducer,
    salesAgentReducer: SalesAgentReducer,
    abandonedCart: AbandonedCartReducer,
    backOrderReducer: BackOrderReducer,
    userTracking: UserTrackingReducer,
    webOrderReducer: WebOrderReducer,
    cmsPagesReducer: CmsPagesReducer,
    categoryReducer: CategoryReducer,
    customerReducer: CustomerReducer,
    accountReducer: AccountsReducer,
    countryReducer: CountryReducer,
    customizer: CustomizerReducer,
    storesReducer: StoresReducer,
    sliderReducer: SliderReducer,
    stateReducer: StateReducer,
    cityReducer: CityReducer,

    [storeApi.reducerPath]: storeApi.reducer,
    [countryApi.reducerPath]: countryApi.reducer,
    [stateApi.reducerPath]: stateApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cityApi.reducerPath]: cityApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [storeCategoryApi.reducerPath]: storeCategoryApi.reducer,
    [webOrderApi.reducerPath]: webOrderApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [abandonedCartApi.reducerPath]: abandonedCartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(storeApi.middleware)
      .concat(countryApi.middleware)
      .concat(stateApi.middleware)
      .concat(authApi.middleware)
      .concat(cityApi.middleware)
      .concat(customerApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(storeCategoryApi.middleware)
      .concat(webOrderApi.middleware)
      .concat(accountApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

const rootReducer = combineReducers({
  manageNewsLetterReducer: ManageNewsLetterReducer,
  manageAttributeReducer: ManageAttributeReducer,
  manageCategoryReducer: ManageCategoryReducer,
  manageProductReducer: ManageProductReducer,
  productReviewReducer: ProductReviewReducer,
  abandonedCart: AbandonedCartReducer,
  userTracking: UserTrackingReducer,
  webOrderReducer: WebOrderReducer,
  cmsPagesReducer: CmsPagesReducer,
  categoryReducer: CategoryReducer,
  customerReducer: CustomerReducer,
  accountReducer: AccountsReducer,
  countryReducer: CountryReducer,
  customizer: CustomizerReducer,
  storesReducer: StoresReducer,
  sliderReducer: SliderReducer,
  stateReducer: StateReducer,
  cityReducer: CityReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
