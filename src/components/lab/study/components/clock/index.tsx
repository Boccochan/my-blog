import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { T1, D1 } from "@src/styles/typography";
import WorldMap from "@static/worldmap-min.jpg";
import Location from "@src/components/lab/study/components/clock/location";
import { TIMEZONE } from "@src/components/lab/study/components/clock/time";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 1000px;
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
`;

const Description = styled(D1)`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>World's clock map</Title>
        <Description>
          This component is for studying a simple css animation and the way of
          the interaction between React components.
        </Description>
        <Box>
          <WorldMapImg src={WorldMap} alt="World map" />

          <Location
            top={310}
            left={370}
            city="Sao Paulo"
            time={time}
            timezone={TIMEZONE.SAOPAULO}
          />
          <Location
            top={156}
            left={172}
            city="Los Angeles"
            time={time}
            timezone={TIMEZONE.LOSANGELES}
          />
          <Location
            top={134}
            left={292}
            city="New York"
            time={time}
            timezone={TIMEZONE.NEWYORK}
          />
          <Location
            top={103}
            left={497}
            city="London"
            time={time}
            timezone={TIMEZONE.LONDON}
          />
          <Location
            top={340}
            left={550}
            city="Cape Town"
            time={time}
            timezone={TIMEZONE.WINDHOEK}
          />
          <Location
            top={156}
            left={596}
            city="Tel Aviv"
            time={time}
            timezone={TIMEZONE.GAZA}
          />
          <Location
            top={193}
            left={700}
            city="Mumbai"
            time={time}
            timezone={TIMEZONE.KARACHI}
          />
          <Location
            top={183}
            left={820}
            city="Hong Kong"
            time={time}
            timezone={TIMEZONE.HONGKONG}
          />
          <Location
            top={150}
            left={885}
            city="Tokyo"
            time={time}
            timezone={TIMEZONE.TOKYO}
          />
          <Location
            top={340}
            left={916}
            city="Sydney"
            time={time}
            timezone={TIMEZONE.AUSTRALIA}
          />
        </Box>
      </Wrapper>
    </Container>
  );
};
