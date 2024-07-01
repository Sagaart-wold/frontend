import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface MenuIconProps extends SvgIconProps {}

const MenuIcon: React.FC<MenuIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 32 32">
    <path d="M5.02 16.98L5 17C4.43 17 4 16.56 4 16C4 15.43 4.43 15 5 15L5.02 15.02L5.02 16.98ZM26.98 15.02L27 15C27.56 15 28 15.43 28 16C28 16.56 27.56 17 27 17L26.98 16.98L26.98 15.02Z" fill="currentColor" fillOpacity="1" fillRule="nonzero"/>
    <path d="M5 16L27 16" stroke="currentColor" strokeOpacity="1" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M5.02 8.97L5 9C4.43 9 4 8.56 4 8C4 7.43 4.43 7 5 7L5.02 7.02L5.02 8.97ZM22.98 7.02L23 7C23.56 7 24 7.43 24 8C24 8.56 23.56 9 23 9L22.98 8.97L22.98 7.02Z" fill="currentColor" fillOpacity="1" fillRule="nonzero"/>
    <path d="M5 8L23 8" stroke="currentColor" strokeOpacity="1" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M5.02 24.98L5 25C4.43 25 4 24.56 4 24C4 23.43 4.43 23 5 23L5.02 23.02L5.02 24.98ZM22.98 23.02L23 23C23.56 23 24 23.43 24 24C24 24.56 23.56 25 23 25L22.98 24.98L22.98 23.02Z" fill="currentColor" fillOpacity="1" fillRule="nonzero"/>
    <path d="M5 24L23 24" stroke="currentColor" strokeOpacity="1" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
  </SvgIcon>
);

export default MenuIcon;
