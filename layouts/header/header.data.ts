import { faBlog, faCannabis, faFeather, faHome } from '@fortawesome/free-solid-svg-icons';

interface HeaderMenu {
  title: string;
  icon: any;
  route?: string;
  children?: HeaderMenu[];
}

export const HEADER_MENU: HeaderMenu[] = [
  {
    title: 'Trang chủ',
    icon: faHome,
    route: '/',
  },
  {
    title: 'Sản phẩm',
    icon: faCannabis,
    children: [
      {
        title: 'Mỹ phẩm',
        icon: faHome,
        route: '/a',
      },
      {
        title: 'Thực phẩm chức năng',
        icon: faHome,
        route: '/b',
      },
    ],
  },
  {
    title: 'Blog',
    icon: faBlog,
    route: '/blog',
  },
  {
    title: 'Về chúng tôi',
    icon: faFeather,
    route: '/abot',
  },
];
