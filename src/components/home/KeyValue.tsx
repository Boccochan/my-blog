import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import { myMedia, mediaType } from "../../styles/custom-media";

export type Props = {
  title: string;
  name: string[];
};

type BarType = {
  width: number;
  level: number;
  color: string;
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: auto;
  margin-top: 17px;
  margin-bottom: 17px;
  margin-right: auto;
  margin-left: auto;

  ${myMedia.lessThan("iphone5")`
    padding-right: 10px;
    font-size: 10px;
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

const Title = styled.div`
  padding-right: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: #666666;
  width: 100px;
  ${myMedia.lessThan("iphone5")`
    width: 86px;
    padding-right: 10px;
    font-size: 10px;
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

const Value = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: ${theme.colors.gray};
  margin-right: 8px;
  margin-left: 2px;
  width: 60px;

  ${myMedia.lessThan("iphone5")`
    font-size: 8px;
    margin-right: 0px;
    margin-left: 1px;
    width: 50px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 8px;
    margin-right: 0px;
    margin-left: 0px;
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

export default function KeyValue(props: Props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      {/* <BorderBottom> */}
      {props.name.map((name: string) => (
        <Value>{name}</Value>
      ))}
      {/* </BorderBottom> */}
    </Container>
  );
}
