export const breakpoints = {
  mb: 300, //Small screen start
  sm: 576, //Small screen start
  md: 768, //Medium screen start
  lg: 992, //Large screen start
  xl: 1200, //Extra Large screen start
};

export const device = {
  mb: `(min-width: ${breakpoints.mb}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
};
