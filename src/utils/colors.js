import { transparentize, lighten, darken } from 'polished';

export const palette = {
  gray: '#928374',
  blue: '#83a598',
  yellow: '#fabd2f',
  red: '#fe8019',
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
    transparentize(0.3, palette.gray),
    transparentize(0.3, lighten(0.1, palette.gray)),
    transparentize(0.3, darken(0.2, palette.gray)),
    transparentize(0.2, darken(0.5, palette.gray)),
  ],
  blue: [
    transparentize(0.3, palette.blue),
    transparentize(0.3, lighten(0.1, palette.blue)),
    transparentize(0.3, darken(0.2, palette.blue)),
    transparentize(0.2, darken(0.5, palette.blue)),
  ],
  yellow: [
    transparentize(0.3, palette.yellow),
    transparentize(0.3, lighten(0.1, palette.yellow)),
    transparentize(0.3, darken(0.2, palette.yellow)),
    transparentize(0.2, darken(0.5, palette.yellow)),
  ],
  red: [
    transparentize(0.3, palette.red),
    transparentize(0.3, lighten(0.1, palette.red)),
    transparentize(0.3, darken(0.2, palette.red)),
    transparentize(0.2, darken(0.5, palette.red)),
  ],
};
