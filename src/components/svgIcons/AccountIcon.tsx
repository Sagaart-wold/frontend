import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

interface CustomIconProps extends SvgIconProps {}

const AccountIcon: React.FC<CustomIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 32 32">
    <rect width="32" height="32" fill="none" />
    <path
      d="M16 20C11.58 20 8 16.41 8 12C8 7.58 11.58 4 16 4C20.41 4 24 7.58 24 12C24 16.41 20.41 20 16 20Z"
      stroke="currentColor"
      strokeOpacity="1"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M3.87 27C5.1 24.87 6.87 23.1 8.99 21.87C11.12 20.64 13.54 19.99 16 19.99C18.45 19.99 20.87 20.64 23 21.87C25.12 23.1 26.89 24.87 28.12 27"
      stroke="currentColor"
      strokeOpacity="1"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
    />
  </SvgIcon>
);

export default AccountIcon;
