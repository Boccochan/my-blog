import styled, { keyframes } from "styled-components";

const Fadein = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

type Props = {
  margin: string;
  time: string;
};

export const Ballon = styled.div`
  position: relative;
  margin: ${(props: Props) => props.margin};
  padding: 7px 10px;
  min-width: 100px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #fff;
  border: solid 3px #555;
  box-sizing: border-box;
  font-weight: 300;
  line-height: 22px;
  font-size: 16px;
  opacity: 0;
  animation: ${Fadein} 1s ease forwards ${(props: Props) => props.time};

  &:before {
    content: "";
    position: absolute;
    bottom: -24px;
    left: 50%;
    margin-left: -15px;
    border: 12px solid transparent;
    border-top: 12px solid #fff;
    z-index: 2;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 50%;
    margin-left: -17px;
    border: 14px solid transparent;
    border-top: 14px solid #555;
    z-index: 1;
  }
`;
