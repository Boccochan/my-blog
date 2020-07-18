import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
  tiny: "330px",
  medium: "610px",
  ipad: "768px",
  nexus10: "800px",
  mediumLarge: "1000px",
  ipadpro: "1024px",
  large: "1170px",
  largeHuge: "1300px",
  huge: "1440px",
});
