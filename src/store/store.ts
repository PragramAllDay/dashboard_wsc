import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import CustomizerReducer from './customizer/CustomizerSlice';
import StoresReducer from './slice/super-admin/stores';
import CategoryReducer from './slice/super-admin/category';
import UserTrackingReducer from './slice/super-admin/cms/user-tracking';
import AccountsReducer from './slice/super-admin/accounts';
import AbandonedCartReducer from './slice/super-admin/cms/abandoned-cart';
import WebOrderReducer from './slice/super-admin/web-order';
import CmsPagesReducer from './slice/super-admin/cms/cms-pages';
import ManageNewsLetterReducer from './slice/super-admin/cms/manage-news-letter';
import SliderReducer from './slice/super-admin/cms/slider';
import ProductReviewReducer from './slice/super-admin/cms/product-review';
import { storeApi } from './slice/api/store';
import CustomerReducer from './slice/super-admin/customer';
import { stateApi } from './slice/api/state';
import { customerApi } from './slice/api/customer';
import { countryApi } from './slice/api/country';
import { cityApi } from './slice/api/city';
import { categoriesApi } from './slice/api/categories';
import { storeCategoryApi } from './slice/api/store-category';
import { webOrderApi } from './slice/api/web-order';
import { accountApi } from './slice/api/account';
import { abandonedCartApi } from './slice/api/abandoned-cart';
import CountryReducer from './slice/super-admin/country';
import CityReducer from './slice/super-admin/city';
import StateReducer from './slice/super-admin/state';
import { authApi } from './slice/api/auth';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    accountReducer: AccountsReducer,
    categoryReducer: CategoryReducer,
    storesReducer: StoresReducer,
    userTracking: UserTrackingReducer,
    abandonedCart: AbandonedCartReducer,
    webOrderReducer: WebOrderReducer,
    cmsPagesReducer: CmsPagesReducer,
    manageNewsLetterReducer: ManageNewsLetterReducer,
    sliderReducer: SliderReducer,
    productReviewReducer: ProductReviewReducer,
    customerReducer: CustomerReducer,
    countryReducer: CountryReducer,
    cityReducer: CityReducer,
    stateReducer: StateReducer,
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
  customizer: CustomizerReducer,
  accountReducer: AccountsReducer,
  categoryReducer: CategoryReducer,
  storesReducer: StoresReducer,
  userTracking: UserTrackingReducer,
  abandonedCart: AbandonedCartReducer,
  webOrderReducer: WebOrderReducer,
  cmsPagesReducer: CmsPagesReducer,
  manageNewsLetterReducer: ManageNewsLetterReducer,
  sliderReducer: SliderReducer,
  productReviewReducer: ProductReviewReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
