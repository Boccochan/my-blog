import styled from "styled-components";
import { myMedia } from "../../styles/custom-media";
import { T2 } from "../../styles/typography";

export const Title = styled(T2)`
  text-align: center;
  ${myMedia.lessThan("iphone5")`
    margin-bottom: 10px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    margin-bottom: 10px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    margin-bottom: 20px;
  `}

  ${myMedia.between("ipad", "medium")`
    margin-bottom: 20px;
  `}

  ${myMedia.greaterThan("medium")`
    margin-bottom: 30px;
  `}
`;
