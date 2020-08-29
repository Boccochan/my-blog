import styled from "styled-components";
import { myMedia } from "./custom-media";

export const T1 = styled.h1`
  font-weight: 300;

  ${myMedia.lessThan("iphone5")`
    font-size: 30px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 36px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 40px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 48px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 48px;
  `}
`;

export const T2 = styled.h2`
  font-weight: 300;

  ${myMedia.lessThan("iphone5")`
    font-size: 20px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 24px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 30px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 30px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 30px;
  `}
`;

export const T3 = styled.h3`
  font-weight: 300;

  ${myMedia.lessThan("iphone5")`
    font-size: 14px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 16px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 16px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 18px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 20px;
  `}
`;

export const T4 = styled.h4`
  font-weight: 300;

  ${myMedia.lessThan("iphone5")`
    font-size: 12px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 12px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 14px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 14px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 16px;
  `}
`;

export const T5 = styled.h5`
  ${myMedia.lessThan("iphone5")`
    font-size: 8px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 10px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 10px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 12px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 12px;
  `}
`;

export const T6 = styled.h6`
  ${myMedia.lessThan("iphone5")`
    font-size: 8px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 8px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 9px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 10px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 10px;
  `}
`;

export const D1 = styled.p`
  font-weight: 300;
  ${myMedia.lessThan("iphone5")`
    line-height: 12px;
    font-size: 10px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    line-height: 14px;
    font-size: 12px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    line-height: 14px;
    font-size: 12px;
  `}

  ${myMedia.between("ipad", "medium")`
    line-height: 16px;
    font-size: 14px;
  `}

  ${myMedia.greaterThan("medium")`
    line-height: 16px;
    font-size: 14px;
  `}

`;
