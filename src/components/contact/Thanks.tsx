import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "@src/styles/color";
import { T2 } from "@src/styles/typography";
import { myMedia } from "@src/styles/custom-media";
import GrayDogRobot from "@static/home/gray-dog-robot-min.png";
import { Ballon } from "./Ballon";
import CloseIcon from "@material-ui/icons/Close";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${theme.colors.grayDark};
  z-index: 10001;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  text-align: center;
`;

const Open = keyframes`
  from {
    height: 80px;
  }
  to {
    height: 300px;
  }
`;

const Dialog = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  text-aling: center;
  margin-top: auto;
  margin: auto;
  z-index: 10010;
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 5px;
  animation: ${Open} 1s ease forwards 0.8s;
  padding: 10px 20px;

  ${myMedia.greaterThan("ipad")`
    width: 400px;
  `}
`;

const Greeting = styled(T2)`
  margin-bottom: 10px;
  text-align: center;
`;

const ShowImg = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ImgBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;

  animation: ${ShowImg} 1s ease forwards 2s;
`;

const Img = styled.img`
  background-color: transparent;
`;

type Props = {
  close: () => void;
};

export default class Thanks extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  closeHandler = () => {
    this.props.close();
  };

  render() {
    return (
      <Wrapper>
        <Cover />
        <Dialog>
          <CloseIcon onClick={this.closeHandler} />
          <Greeting>Thank you!!</Greeting>
          <Ballon time="2.2s" margin="2em 0">
            I AM GOING TO REPLY YOU AS SOON AS POSSIBLE. BOW BOW!
          </Ballon>
          <ImgBox>
            <Img src={GrayDogRobot} />
          </ImgBox>
        </Dialog>
      </Wrapper>
    );
  }
}
