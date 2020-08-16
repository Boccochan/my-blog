import React from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import { navigate } from "gatsby";
import { myMedia } from "@src/styles/custom-media";

const StyledBtn = styled.button`
  width: 100px;
  background-color: ${theme.colors.green};
  border: 1px solid ${theme.colors.green};
  color: ${theme.colors.white};
  padding: 8px;
  font-weight: 300;
  border-style: none;
  border-radius: 5px;
  outline: none;
  margin-right: 10px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }

  ${myMedia.lessThan("iphone5")`
    font-size: 12px;
    width: 100px;
  `}

  ${myMedia.between("iphone5", "ipad")`
    font-size: 14px;
    width: 140px;
  `}
`;

type Props = {
  name: string;
  to: string;
};

export default function Button(props: Props) {
  const jumpTo = () => {
    navigate(props.to);
  };

  return <StyledBtn onClick={jumpTo}>{props.name}</StyledBtn>;
}
