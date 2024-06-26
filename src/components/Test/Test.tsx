// import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent, Button, IconButton, InputBase, Paper } from '@mui/material';
import { styled } from '@mui/system';
// import searchIcon from '../../assets/search_icon.svg';
// import menuIcon from '../../assets/header_menu_icon.svg';
// import { theme } from '../theme/theme'
// import { useTheme } from '@mui/material/styles';



export function Test() {
  // const theme = useTheme();
  return (
    <>
    <Button variant="contained" disableElevation>фтн</Button>{/*disableRipple + ..Mui-focusVisible для стилизации фокуса */}
    <Button variant="outlined" color="secondary" disableElevation>фтн</Button>
    <Button variant="outlined" color="primary" disableElevation>фтн</Button>
    </>
  );
}

export default Test;
