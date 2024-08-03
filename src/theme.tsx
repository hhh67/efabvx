import {
  PaletteColor,
  PaletteColorOptions,
  Theme,
  createTheme,
} from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    qiitaReader: PaletteColor;
    gymlog: PaletteColor;
    moonPfase: PaletteColor;
    picgle: PaletteColor;
    pastel: PaletteColor;
  }
  interface PaletteOptions {
    qiitaReader: PaletteColorOptions;
    gymlog: PaletteColorOptions;
    moonPfase: PaletteColorOptions;
    picgle: PaletteColorOptions;
    pastel: PaletteColorOptions;
  }
}

const theme: Theme = createTheme({
  components: {},
  spacing: 8,
  typography: {
    fontSize: 14,
  },
  palette: {
    mode: 'light',
    qiitaReader: {
      main: '#54C600',
    },
    gymlog: {
      main: '#0F479A',
    },
    moonPfase: {
      main: '#56008B',
    },
    picgle: {
      main: 'linear-gradient(45deg, #A460E8, #DF428D)',
    },
    pastel: {
      main: 'linear-gradient(40deg, #e8cece, #e6e4ce, #d0e6e9, #ffffff, #d3d9ea, #cfe6ea, #ddd2f0, #e1cae6, #e9e7d3, #d3e2eb)',
    },
    primary: {
      main: '#3500c7',
      light: '#6a00ff',
    },
    text: {
      primary: '#1F1B29',
    },
    background: {
      default: '#e8f7ff',
      paper: '#fff',
    },
  },
});

export default theme;
