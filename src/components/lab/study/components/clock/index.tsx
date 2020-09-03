import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { T1, D1 } from "@src/styles/typography";
import WorldMap from "@static/worldmap-min.jpg";
import Location from "@src/components/lab/study/components/clock/Location";
import { locations } from "./LocationList";
import TableColumn from "./TableColumn";
import { myMedia } from "@src/styles/custom-media";

const Container = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  width: 1000px;
  min-height: 100vh;
  height: auto;
  ${myMedia.lessThan("ipadpro")`
    overflow-x: auto;
  `}
`;

const Box = styled.div`
  position: relative;
  width: 1000px;
  height: 566.66px;
`;

const WorldMapImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: auto;
`;

const Title = styled(T1)`
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 48px;
  font-weight: 300;
  width: 1000px;
`;

const Description = styled(D1)`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 1000px;
`;

export default () => {
  const [time, setTime] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const mouseOver = (city: string) => {
    setSelectedCity(city);
    // console.log(city);
  };

  return (
    <Container>
      <Title>World's clock map</Title>

      <Description>
        This component is for studying a simple css animation and the way of the
        interaction between React components.
      </Description>
      <Box>
        <WorldMapImg src={WorldMap} alt="World map" />
        {locations.map((location) => {
          if (location.city === selectedCity) {
            return (
              <Location
                top={location.top}
                left={location.left}
                city={location.city}
                time={time}
                timezone={location.timezone}
                selected={true}
              />
            );
          }
          return (
            <Location
              top={location.top}
              left={location.left}
              city={location.city}
              time={time}
              timezone={location.timezone}
              selected={false}
            />
          );
        })}
      </Box>
      <Title>World Time table</Title>
      {locations.map((location) => (
        <TableColumn
          country={location.country}
          location={location.city}
          utc={location.utc}
          timezone={location.timezone}
          time={time}
          mouseOver={mouseOver}
        />
      ))}
    </Container>
  );
};
