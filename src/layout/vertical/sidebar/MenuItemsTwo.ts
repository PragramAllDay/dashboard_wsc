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

const MenuitemsTwo: MenuitemsType[] = [
  { navlabel: true, subheader: 'Home' },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconAperture,
    href: '/store-owner',
  },
];

export default MenuitemsTwo;
