export type Colors = {
  white: string;
  whiteLight: string;
  whiteSuperLight: string;
  blue: string;
  blueLight: string;
  gray: string;
  grayLight: string;
  graySuperLight: string;
  grayDark: string;
  blogBackground: string;
  purple: string;
  purpleLight: string;
  red: string;
};

export type Theme = {
  colors: Colors;
};

export const theme: Theme = {
  colors: {
    white: "#f5f5f7",
    whiteLight: "f9f9f9",
    whiteSuperLight: "#fffdfd",
    blue: "#2f80ed",
    gray: "#4f4f4f",
    grayLight: "#bdbdbd",
    graySuperLight: "#e0e0e0",
    blogBackground: "#fafafa",
    grayDark: "#333",
    purple: "#bb6bd9",
    purpleLight: "#e3a5fb",
    red: "#eb5757",
  },
} as Theme;
