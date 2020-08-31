import { opacify, lighten, darken } from 'polished';

export const primary = {
  gray: '#928374',
  blue: '#83a598',
  yellow: '#fabd2f',
  red: '#fb4934',
  dark: '#282828',
  white: '#FFFFFF',
};

export const theme = {
  colorDefault: primary.white,
  colorInverse: primary.gray,
  backgroundDefault: primary.dark,
  backgroundInverse: primary.white,
};

export const colorlevels = {
  gray: [
    opacify(0.7, primary.gray),
    opacify(0.7, lighten(0.1, primary.gray)),
    opacify(0.7, darken(0.2, primary.gray)),
  ],
  blue: [
    opacify(0.7, primary.blue),
    opacify(0.7, lighten(0.1, primary.blue)),
    opacify(0.7, darken(0.2, primary.blue)),
  ],
  yellow: [
    opacify(0.7, primary.yellow),
    opacify(0.7, lighten(0.1, primary.yellow)),
    opacify(0.7, darken(0.2, primary.yellow)),
  ],
  red: [
    opacify(0.7, primary.red),
    opacify(0.7, lighten(0.1, primary.red)),
    opacify(0.7, darken(0.2, primary.red)),
  ],
};
