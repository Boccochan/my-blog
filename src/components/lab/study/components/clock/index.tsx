import React from "react";
import styled from "styled-components";
import WorldMap from "@static/worldmap-64597093.jpg";
import WorldMapNight from "@static/worldmap-228583498.jpg";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  // width: 100%;
  // height: auto;
`;

const WorldMapImg = styled.img`
  // position: absolute;
  // top: 0;
  // left: 0;
  z-index: 0;
  // opacity: 0;
  margin: 0;
  padding: 0;
  min-width: 1000px;
  height: 500px;
`;

const ParentImgBox = styled.div`
  position: relative;
  background-color: red;
  border: 1px solid green;
  padding: 0;
`;

const WorldMapNightImg = styled.img`
  width: 200px;
  height: 100%;
  object-fit: cover;
  object-position: 80% 100%;
`;

const WorldMapNightBox = styled.div`
  position: absolute;
  width: 200px;
  height: 100%;
  margin: 0;
  padding: 0;
  bacground-color: black;
  border: 1px solid black;
  top: -1px;
  right: 17%;
`;

export default () => {
  return (
    <Container>
      {/* <ParentImgBox> */}
      <WorldMapImg src={WorldMap} alt="World map" />
      {/* <WorldMapNightBox>
          <WorldMapNightImg src={WorldMapNight} alt="world map" />
        </WorldMapNightBox> */}
      {/* </ParentImgBox> */}
    </Container>
  );
};
