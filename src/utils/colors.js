import { opacify, lighten, darken } from 'polished';

export const palette = {
  gray: '#928374',
  blue: '#83a598',
  yellow: '#fabd2f',
  red: '#fb4934',
  dark: '#282828',
  white: '#FFFFFF',
};

export const theme = {
  colorDefault: palette.white,
  colorInverse: palette.gray,
  backgroundDefault: palette.dark,
  backgroundInverse: palette.white,
};

export const colorlevels = {
  gray: [
    opacify(0.7, palette.gray),
    opacify(0.7, lighten(0.1, palette.gray)),
    opacify(0.7, darken(0.2, palette.gray)),
  ],
  blue: [
    opacify(0.7, palette.blue),
    opacify(0.7, lighten(0.1, palette.blue)),
    opacify(0.7, darken(0.2, palette.blue)),
  ],
  yellow: [
    opacify(0.7, palette.yellow),
    opacify(0.7, lighten(0.1, palette.yellow)),
    opacify(0.7, darken(0.2, palette.yellow)),
  ],
  red: [
    opacify(0.7, palette.red),
    opacify(0.7, lighten(0.1, palette.red)),
    opacify(0.7, darken(0.2, palette.red)),
  ],
};
