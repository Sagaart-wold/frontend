import { Palette as MuiPalette, PaletteOptions as MuiPaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette extends MuiPalette {
    sky: MuiPalette['primary'];
    blue: MuiPalette['primary'];
    purple: MuiPalette['primary'];
    red: MuiPalette['primary'];
    yellow: MuiPalette['primary'];
    green: MuiPalette['primary'];
  }

  interface PaletteOptions extends MuiPaletteOptions {
    sky?: MuiPaletteOptions['primary'];
    blue?: MuiPaletteOptions['primary'];
    purple?: MuiPaletteOptions['primary'];
    red?: MuiPaletteOptions['primary'];
    yellow?: MuiPaletteOptions['primary'];
    green?: MuiPaletteOptions['primary'];
  }
}

