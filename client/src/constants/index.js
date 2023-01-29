import { createCampaign, dashboard, logout, payment, profile, withdraw , CreateBlog} from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'blog',
    imgUrl: CreateBlog,
    link: '/create-Blog',
  },
  
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];