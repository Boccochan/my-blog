import { generateMedia } from "styled-media-query";

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
