import { uniqueId } from 'lodash';

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import { IconAnalyze, IconAperture, IconArchive, IconAssembly, IconBuildingBridge2, IconDiscount, IconHeadphones, IconPoint, IconPropeller, IconRectangle, IconTournament, IconUsersGroup } from '@tabler/icons-react';

const MenuitemsTwo: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: 'Home'
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconAperture,
    href: '/store-owner',
  },
  {
    navlabel: true,
    subheader: 'Other',
  },
  {
    id: uniqueId(),
    title: 'Catalog',
    icon: IconRectangle,
    href: '/store-owner/catalog',
    children: [
      {
        id: uniqueId(),
        title: 'Manage Categories',
        icon: IconPoint,
        href: '/store-owner/catalog/manage-categories',
      },
      {
        id: uniqueId(),
        title: 'Manage Attributes',
        icon: IconPoint,
        href: '/store-owner/catalog/manage-attribute',
      },
      {
        id: uniqueId(),
        title: 'Manage Products',
        icon: IconPoint,
        href: '/store-owner/catalog/manage-products',
      },
      {
        id: uniqueId(),
        title: 'Import Products',
        icon: IconPoint,
        href: '/store-owner/catalog/import-product',
      },
      {
        id: uniqueId(),
        title: 'Export Products',
        icon: IconPoint,
        href: '/store-owner/catalog/export-product',
      },
      {
        id: uniqueId(),
        title: 'Export Products',
        icon: IconPoint,
        href: '/store-owner/catalog/export-product',
      },
      {
        id: uniqueId(),
        title: 'Check BarCodes',
        icon: IconPoint,
        href: '/store-owner/catalog/check-barcode',
      },
      {
        id: uniqueId(),
        title: 'Manage Stock',
        icon: IconPoint,
        href: '/store-owner/catalog/manage-stock',
      },
      {
        id: uniqueId(),
        title: 'Manage Stock',
        icon: IconPoint,
        href: '/store-owner/catalog/manage-stock',
      },
      {
        id: uniqueId(),
        title: 'Stock Update',
        icon: IconPoint,
        href: '/store-owner/catalog/stock-update',
      },
      {
        id: uniqueId(),
        title: 'Stock Log',
        icon: IconPoint,
        href: '/store-owner/catalog/stock-log',
      },
      {
        id: uniqueId(),
        title: 'Re-Order Products',
        icon: IconPoint,
        href: '/store-owner/catalog/re-order-product',
      },
      {
        id: uniqueId(),
        title: 'Products Correction',
        icon: IconPoint,
        href: '/store-owner/catalog/product-correction',
      },
      {
        id: uniqueId(),
        title: 'Low Stock Product',
        icon: IconPoint,
        href: '/store-owner/catalog/low-stock-product',
      },
    ]
  },
  {
    id: uniqueId(),
    title: 'Sales & Order',
    icon: IconDiscount,
    href: '/store-owner/sales-and-order',
    children: [
      {
        id: uniqueId(),
        title: 'All Orders',
        icon: IconPoint,
        href: '/store-owner/sales-and-order/all-order',
      },
      {
        id: uniqueId(),
        title: 'WebSite Orders',
        icon: IconPoint,
        href: '/store-owner/sales-and-order/website-order',
      },
      {
        id: uniqueId(),
        title: 'Cash & Carry Orders',
        icon: IconPoint,
        href: '/store-owner/sales-and-order/cash-and-carry-order',
      },
      {
        id: uniqueId(),
        title: 'Make Receipts (C & C)',
        icon: IconPoint,
        href: '/store-owner/sales-and-order/make-receipt-cc',
      },
      {
        id: uniqueId(),
        title: 'Make Receipts (Web)',
        icon: IconPoint,
        href: '/store-owner/sales-and-order/make-receipt-web',
      },
      {
        id: uniqueId(),
        title: 'Credit Notes',
        icon: IconPoint,
        href: '/store-owner/sales-and-order/credit-notes',
      },
      {
        id: uniqueId(),
        title: 'Bad Debts',
        icon: IconPoint,
        href: '/store-owner/sales-and-order/bad-debts',
      },
      {
        id: uniqueId(),
        title: 'Month Wise Sale',
        icon: IconPoint,
        href: '/store-owner/sales-and-order/month-wise-sale',
      },
      {
        id: uniqueId(),
        title: 'Purchase Orders',
        icon: IconPoint,
        href: '/store-owner/sales-and-order/purchase-order',
      },
    ]
  },
  {
    id: uniqueId(),
    title: 'Suppliers',
    icon: IconAnalyze,
    href: '/supplier-orders',
    children: [
      {
        id: uniqueId(),
        title: 'All Supplier',
        icon: IconPoint,
        href: '/store-owner/suppliers/all-supplier',
      },
      {
        id: uniqueId(),
        title: 'Invoices',
        icon: IconPoint,
        href: '/store-owner/suppliers/invoices',
      },
      {
        id: uniqueId(),
        title: 'Payment',
        icon: IconPoint,
        href: '/store-owner/suppliers/payment',
      },
      {
        id: uniqueId(),
        title: 'Credit Notes',
        icon: IconPoint,
        href: '/store-owner/suppliers/credit-note',
      },
      {
        id: uniqueId(),
        title: 'Debit Notes',
        icon: IconPoint,
        href: '/store-owner/suppliers/debit-note',
      },
      {
        id: uniqueId(),
        title: 'Supplier Orders',
        icon: IconPoint,
        href: '/store-owner/suppliers/supplier-orders',
      },
      {
        id: uniqueId(),
        title: 'Ledger',
        icon: IconPoint,
        href: '/store-owner/suppliers/ledger',
      },
      {
        id: uniqueId(),
        title: 'Analytics',
        icon: IconPoint,
        href: '/store-owner/suppliers/analytics',
      },
    ]
  },
  {
    id: uniqueId(),
    title: 'Back Orders',
    icon: IconArchive,
    href: '/store-owner/back-orders',
  },
  {
    id: uniqueId(),
    title: 'Accounts',
    icon: IconBuildingBridge2,
    href: '/store-owner/accounts',
    children: [
      {
        id: uniqueId(),
        title: 'Account Report',
        icon: IconPoint,
        href: '/store-owner/accounts',
      },
      {
        id: uniqueId(),
        title: 'Web Sale Report',
        icon: IconPoint,
        href: '/store-owner/accounts/web-sale-report',
      },
      {
        id: uniqueId(),
        title: 'Cash & Carry Sale Report',
        icon: IconPoint,
        href: '/store-owner/accounts/cash-and-carry-sale-report',
      },
      {
        id: uniqueId(),
        title: 'Receipts (C & C)',
        icon: IconPoint,
        href: '/store-owner/accounts/receipts-cc',
      },
      {
        id: uniqueId(),
        title: 'Receipts (Web)',
        icon: IconPoint,
        href: '/store-owner/accounts/receipts-web',
      },
      {
        id: uniqueId(),
        title: 'Cheques to suppliers',
        icon: IconPoint,
        href: '/store-owner/accounts/cheques-to-suppliers',
      },
      {
        id: uniqueId(),
        title: 'Sale Ledger',
        icon: IconPoint,
        href: '/store-owner/accounts/sale-ledger',
      },
      {
        id: uniqueId(),
        title: 'Sale agent report',
        icon: IconPoint,
        href: '/store-owner/accounts/sales-agent-report',
      },
      {
        id: uniqueId(),
        title: 'Cash Register',
        icon: IconPoint,
        href: '/store-owner/accounts/cash-register',
      },
      {
        id: uniqueId(),
        title: 'Expenditures',
        icon: IconPoint,
        href: '/store-owner/accounts/expenditures',
      },
      {
        id: uniqueId(),
        title: 'Expenditures Payments',
        icon: IconPoint,
        href: '/store-owner/accounts/expenditures-payment',
      },
      {
        id: uniqueId(),
        title: 'Expenditures Credit Notes',
        icon: IconPoint,
        href: '/store-owner/accounts/expenditures-credit-note',
      },
    ]

  },
  {
    id: uniqueId(),
    title: 'Users',
    icon: IconUsersGroup,
    href: '/store-owner/users',
  },
  {
    id: uniqueId(),
    title: 'CMS',
    icon: IconAssembly,
    href: '/store-owner/cms',
    children: [
      {
        id: uniqueId(),
        title: 'Manage Galleries',
        icon: IconPoint,
        href: '/store-owner/cms/manage-galleries',
      },
      {
        id: uniqueId(),
        title: 'Manage Pages',
        icon: IconPoint,
        href: '/store-owner/cms/manage-pages',
      },
      {
        id: uniqueId(),
        title: 'Manage News Letter',
        icon: IconPoint,
        href: '/store-owner/cms/manage-news-letter',
      },
      {
        id: uniqueId(),
        title: 'Store Logo',
        icon: IconPoint,
        href: '/store-owner/cms/store-logo',
      },
      {
        id: uniqueId(),
        title: 'Store Banners',
        icon: IconPoint,
        href: '/store-owner/cms/store-banner',
      },
      {
        id: uniqueId(),
        title: 'Security',
        icon: IconPoint,
        href: '/store-owner/cms/security',
      },
      {
        id: uniqueId(),
        title: 'Store Settings',
        icon: IconPoint,
        href: '/store-owner/cms/store-setting',
      },
      {
        id: uniqueId(),
        title: 'Home Page Settings',
        icon: IconPoint,
        href: '/store-owner/cms/home-page-setting',
      },
    ]
  },
  {
    id: uniqueId(),
    title: 'Shipping',
    icon: IconPropeller,
    href: '/store-owner/shipping',
    children: [
      {
        id: uniqueId(),
        title: 'WholeSale Local',
        icon: IconPoint,
        href: '/store-owner/shipping/wholesale-local',
      },
      {
        id: uniqueId(),
        title: 'WholeSale International',
        icon: IconPoint,
        href: '/store-owner/shipping/wholesale-international',
      },
    ]
  },
  {
    id: uniqueId(),
    title: 'Sales & Agents',
    icon: IconTournament,
    href: '/store-owner/sales-agents',
  },
  {
    id: uniqueId(),
    title: 'Customers',
    icon: IconHeadphones,
    href: '/store-owner/customers',
  },
];

export default MenuitemsTwo;
