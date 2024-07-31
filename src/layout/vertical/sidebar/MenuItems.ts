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
import { IconBoxMultiple, IconPoint, IconAperture } from '@tabler/icons-react';

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconAperture,
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'Other',
  },
  {
    id: uniqueId(),
    title: 'Country',
    icon: IconAperture,
    href: '/country',
  },
  {
    id: uniqueId(),
    title: 'State',
    icon: IconAperture,
    href: '/state',
  },
  {
    id: uniqueId(),
    title: 'City',
    icon: IconAperture,
    href: '/city',
  },
  {
    id: uniqueId(),
    title: 'Stores',
    icon: IconAperture,
    href: '/stores',
  },
  {
    id: uniqueId(),
    title: 'Categories',
    icon: IconBoxMultiple,
    href: '/categories/',
    children: [
      {
        id: uniqueId(),
        title: 'Category',
        icon: IconPoint,
        href: '/categories',
      },
      {
        id: uniqueId(),
        title: 'Menu Sorting',
        icon: IconPoint,
        href: '/categories/menu-sorting',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Store Categories',
    icon: IconAperture,
    href: '/store-category',
  },
  {
    id: uniqueId(),
    title: 'Web Order',
    icon: IconAperture,
    href: '/web-order',
  },
  {
    id: uniqueId(),
    title: 'Accounts',
    icon: IconBoxMultiple,
    href: '/accounts',
  },
  {
    id: uniqueId(),
    title: 'Customer',
    icon: IconBoxMultiple,
    href: '/customer',
  },
  {
    id: uniqueId(),
    title: 'CMS',
    icon: IconBoxMultiple,
    href: '/cms',
    children: [
      {
        id: uniqueId(),
        title: 'Manage Pages',
        icon: IconPoint,
        href: '/cms/manage-pages',
      },
      {
        id: uniqueId(),
        title: 'Manage News Letter',
        icon: IconPoint,
        href: '/cms/manage-news-letter',
      },
      // {
      //   id: uniqueId(),
      //   title: "Design New Letter",
      //   icon: IconPoint,
      //   href: "/cms/design-news-letter",
      // },
      {
        id: uniqueId(),
        title: 'Manage Slider',
        icon: IconPoint,
        href: '/cms/manage-slider',
      },
      {
        id: uniqueId(),
        title: 'Sort Trending Products',
        icon: IconPoint,
        href: '/cms/sort-trending-products',
      },
      {
        id: uniqueId(),
        title: 'Product Reviews',
        icon: IconPoint,
        href: '/cms/product-reviews',
      },
      {
        id: uniqueId(),
        title: 'Best Selling Products',
        icon: IconPoint,
        href: '/cms/best-selling-products',
      },
      {
        id: uniqueId(),
        title: 'Abandoned Cart',
        icon: IconPoint,
        href: '/cms/abandoned-cart',
      },
      {
        id: uniqueId(),
        title: 'User Tracking',
        icon: IconPoint,
        href: '/cms/user-tracking',
      },
    ],
  },
];

export default Menuitems;
