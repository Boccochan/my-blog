import styled from "styled-components";
import { myMedia } from "../../styles/custom-media";

export const Title = styled.div`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
  width: auto;

  ${myMedia.lessThan("iphone5")`
    font-size: 20px;
    margin-bottom: 20px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 24px;
    margin-bottom: 10px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 30px;
    margin-bottom: 30px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 30px;
    margin-bottom: 20px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 30px;
    margin-bottom: 50px;
  `}
`;
