// import React from 'react';
import {
  Typography,
  Button,
  // IconButton,
  // InputBase,
  // Paper
} from "@mui/material";
// import { styled } from '@mui/system';
// import searchIcon from '../../assets/search_icon.svg';
// import menuIcon from '../../assets/header_menu_icon.svg';
// import { theme } from '../theme/theme'
// import { useTheme } from '@mui/material/styles';

export function Test() {
  // const theme = useTheme();
  return (
    <>
      <Button variant="contained" disableElevation size="small">
        фтн
      </Button>
      {/*disableRipple + ..Mui-focusVisible для стилизации фокуса */}
      <Button
        variant="outlined"
        color="secondary"
        disableElevation
        size="medium"
      >
        фтн
      </Button>
      <Button variant="outlined" color="primary" disableElevation size="large">
        фтн
      </Button>
      <Typography variant="h1">Откройте заново мир искусства</Typography>
      <Typography variant="h2">Откройте заново мир искусства</Typography>
      <Typography variant="h3">Откройте заново мир искусства</Typography>
      <Typography variant="h4">Откройте заново мир искусства</Typography>
      <Typography variant="body1">Откройте заново мир искусства</Typography>
      <Typography variant="body2">Откройте заново мир искусства</Typography>
      <Typography variant="subtitle2">Откройте заново мир искусства</Typography>
  
    </>
  );
}

export default Test;
