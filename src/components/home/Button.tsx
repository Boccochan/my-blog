import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import media from "styled-media-query";
import { navigate } from "gatsby";

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
    // background-color: ${theme.colors.red};
    font-weight: bold;
  }

  ${media.lessThan("medium")`
    font-size: 12px;
    width: 200px;
  `}

  ${media.between("medium", "large")`
    font-size: 14px;
    width: 200px;
  `}

  ${media.greaterThan("large")`
    font-size: 20px;
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
