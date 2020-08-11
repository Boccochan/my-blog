import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
  galaxyFold: "280px",
  tiny: "320px",
  medium: "610px",
  ipad: "768px",
  nexus10: "800px",
  mediumLarge: "1000px",
  ipadpro: "1024px",
  large: "1170px",
  background: "1271px",
  largeHuge: "1340px",
  huge: "1440px",
  veryHuge: "1700px",
  Max: "2300px",
});

export const mediaType = {
  galaxyFold: "280px",
  iphone5: "320px",
  galaxyS5: "360px",
  iphone678X: "375px",
  iphone678plus: "414px",
  pixel2: "411px",
  surfaceDuo: "450px",
  ipad: "768px",
  ipadpro: "1024px",
  medium: "1170px",
  large: "1271px",
  huge: "1339px",
  veryHuge: "1440px",
  max: "1700px",
};

export const myMedia = generateMedia(mediaType);
