import React from "react";
import styled from "styled-components";
import { myMedia } from "../../styles/custom-media";
import { theme } from "../../styles/color";
import IntroNav from "./IntroNav";
import { MascotIntro } from "./IntroMascot";

const BackgroundBox = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 400px;
  background-color: ${theme.colors.yellow};

  ${myMedia.lessThan("iphone5")`
    height: 200px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    height: 200px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    height: 200px;
  `}

  ${myMedia.between("ipad", "medium")`
    height: 300px;
  `}

  ${myMedia.greaterThan("medium")`
    height: 400px;
  `}
`;

const IntroBox = styled.div`
  position: absolute;
  z-index: 3;

  ${myMedia.lessThan("iphone5")`
    top: 30px;
    left: 4vw;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    top: 30px;
    left: 4vw;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    top: 30px;
    left: 4vw;
  `}

  ${myMedia.between("ipad", "medium")`
    top: 40px;
    left: 4vw;
  `}

  ${myMedia.greaterThan("medium")`
    top: 80px;
    left: 8vw;
  `}
`;

const IntroLayer = styled.div`
  postion: relative;
  width: 100%;
  height; auto;
  z-index: 3;
  
  ${myMedia.lessThan("iphone5")`
    width: 320px;
    max-width: 320px;
  `}
`;

const CharactorsBox = styled.div`
  position: absolute;
  top: 40px;
  right: 80px;
  width: 800px;
  height: 350px;
  z-index: 3;
  opacity: 1;

  ${myMedia.lessThan("huge")`
    opacity: 0;
  `}

  ${myMedia.between("huge", "max")`
    top: 80px;
    width: 550px;
    right: 80px;
  `}
`;

export default function Intro() {
  return (
    <IntroLayer>
      <BackgroundBox />
      <IntroBox>
        <IntroNav />
      </IntroBox>
      <CharactorsBox>
        <MascotIntro />
      </CharactorsBox>
    </IntroLayer>
  );
}
