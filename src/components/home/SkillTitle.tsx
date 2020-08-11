import styled from "styled-components";
import { myMedia } from "../../styles/custom-media";

export const Title = styled.div`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  ${myMedia.lessThan("iphone5")`
    font-size: 20px;
    width: 240px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
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
