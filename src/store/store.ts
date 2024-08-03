import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import WholeSaleInternationalReducer from './slice/store-owner/shipping/wholesale-international';
import ManageCategoryReducer from './slice/store-owner/catalog/manage-categories';
import ManageAttributeReducer from './slice/store-owner/catalog/manage-attribute';
import ManageNewsLetterReducer from './slice/super-admin/cms/manage-news-letter';
import WholeSaleLocalReducer from './slice/store-owner/shipping/wholesale-local';
import ManageProductReducer from './slice/store-owner/catalog/manage-product';
import ManageGalleriesReducer from './slice/store-owner/cms/manage-galleries';
import ProductReviewReducer from './slice/super-admin/cms/product-review';
import AbandonedCartReducer from './slice/super-admin/cms/abandoned-cart';
import UserTrackingReducer from './slice/super-admin/cms/user-tracking';
import ManagePagesReducer from './slice/store-owner/cms/manage-pages';
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

import { storeCategoryApi } from './slice/api/super-admin/store-category';
import { abandonedCartApi } from './slice/api/super-admin/abandoned-cart';
import { categoriesApi } from './slice/api/super-admin/categories';
import { webOrderApi } from './slice/api/super-admin/web-order';
import UserReducer from './slice/store-owner/users';
import { customerApi } from './slice/api/super-admin/customer';
import { accountApi } from './slice/api/super-admin/account';
import { countryApi } from './slice/api/super-admin/country';
import { storeApi } from './slice/api/super-admin/store';
import { stateApi } from './slice/api/super-admin/state';
import { cityApi } from './slice/api/super-admin/city';
import { authApi } from './slice/api/super-admin/auth';
import StoreBannerReducer from './slice/store-owner/cms/store-banner';
import HomePageSettingReducer from './slice/store-owner/cms/home-page-setting';
import ReceiptsReducer from './slice/store-owner/accounts/receipts';
import ChequeToSupplierReducer from './slice/store-owner/accounts/cheques-to-suppliers';
import CashRegistryReducer from './slice/store-owner/accounts/cash-register';
import SupplierReducer from './slice/store-owner/suppliers/all-supplier';
import InvoicesReducer from './slice/store-owner/suppliers/invoices';
import PaymentReducer from './slice/store-owner/suppliers/payment';
import CreditNoteReducer from './slice/store-owner/suppliers/credit-note';
import SupplierOrderReducer from './slice/store-owner/suppliers/supplier-orders';


export const store = configureStore({
  reducer: {
    wholeSaleInternationalReducer: WholeSaleInternationalReducer,
    manageNewsLetterReducer: ManageNewsLetterReducer,
    manageAttributeReducer: ManageAttributeReducer,
    manageGalleriesReducer: ManageGalleriesReducer,
    manageCategoryReducer: ManageCategoryReducer,
    wholeSaleLocalReducer: WholeSaleLocalReducer,
    productReviewReducer: ProductReviewReducer,
    manageProductReducer: ManageProductReducer,
    storeBannerReducer: StoreBannerReducer,
    managePageReducer: ManagePagesReducer,
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
    userReducer: UserReducer,
    chequeToSupplierReducer: ChequeToSupplierReducer,
    homePageSettingReducer: HomePageSettingReducer,
    cashRegistryReducer: CashRegistryReducer,
    receiptReducer: ReceiptsReducer,
    allSupplierReducer: SupplierReducer,
    invoiceReducer: InvoicesReducer,
    paymentReducer: PaymentReducer,
    creditNoteReducer: CreditNoteReducer,
    supplierOrderReducer: SupplierOrderReducer,

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
  wholeSaleInternationalReducer: WholeSaleInternationalReducer,
  manageNewsLetterReducer: ManageNewsLetterReducer,
  manageAttributeReducer: ManageAttributeReducer,
  manageCategoryReducer: ManageCategoryReducer,
  wholeSaleLocalReducer: WholeSaleLocalReducer,
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
  userReducer: UserReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
