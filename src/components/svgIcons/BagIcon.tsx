import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface BagIconProps extends SvgIconProps {}

const BagIcon: React.FC<BagIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 32 32">
    {/* <rect width="32" height="32" fill="none" /> */}
    <path
      d="M27 9C27.55 9 28 9.44 28 10L28 26C28 26.55 27.55 27 27 27L5 27C4.44 27 4 26.55 4 26L4 10C4 9.44 4.44 9 5 9L27 9Z"
      stroke="currentColor"
      strokeOpacity="1"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M11 13L11 9C11 7.67 11.52 6.4 12.46 5.46C13.4 4.52 14.67 4 16 4C17.32 4 18.59 4.52 19.53 5.46C20.47 6.4 21 7.67 21 9L21 13"
      stroke="currentColor"
      strokeOpacity="1"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </SvgIcon>
);

export default BagIcon;

