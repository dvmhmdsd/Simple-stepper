export const customTheme = {
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
    },
    h5: {
      fontSize: 14,
      fontWeight: 700,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 14,
      color: "#B6B6B6",
    },
    subtitle2: {
      fontSize: 12,
      color: "#B6B6B6",
    },
  },
  palette: {
    primary: { main: "#000" },
    info: { main: "#008EA5" },
    gray: {
      main: "#B6B6B6",
      bg: "#EBF0F1",
    },
    warning: {
      main: "#FFC225",
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
};
