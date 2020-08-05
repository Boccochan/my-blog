import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import media from "styled-media-query";
import { navigate } from "gatsby";

const StyledBtn = styled.button`
  width: 250px;
  background-color: ${theme.colors.purple};
  border: 1px solid ${theme.colors.purple};
  color: ${theme.colors.white};
  padding: 10px;
  border-style: none;
  border-radius: 5px;
  outline: none;

  &:hover {
    background-color: ${theme.colors.purpleLight};
    font-weight: bold;
  }

  ${media.lessThan("medium")`
    font-size: 12px;
    width: 200px;
  `}

  ${media.between("medium", "large")`
    font-size: 14px;
    width: 250px;
  `}

  ${media.greaterThan("large")`
    font-size: 30px;
    width: 250px;
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
