import React from "react";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import styled from "styled-components";
import { customMedia } from "../styles/custom-media";
import { theme } from "../styles/color";
import BackgroundImage from "../../static/home/back.png";
import GreenRobotImg from "../../static/home/green-robot.png";
import YellowRobotImg from "../../static/home/small-yellow-robot.png";
import OrangeRobotImg from "../../static/home/orange-robot.png";
import LightImg from "../../static/home/light.png";
import SittingRobotImg from "../../static/home/sitting-robot.png";
import HeartImg from "../../static/home/heart.png";
import StarImg from "../../static/home/star.png";
import media from "styled-media-query";
import AboutMe from "../components/Home/AboutMe";
import Intro from "../components/Home/Intro";

const Background = styled.img`
  position: relative;
  width: 100%;
  background-color: transparent;
  height: 740px;
  z-index: 2;

  ${media.lessThan("small")`
    height: 340px;
  `}
  ${media.between("small", "medium")`
    height: 400px;
  `}
  ${media.between("medium", "large")`
    height: 700px;
  `}
  ${media.greaterThan("large")`
    height: 740px;
  `}
`;

const IntroBox = styled.div`
  position: absolute;
  top: 80px;
  left: 8vw;
  z-index: 3;
`;

const IntroLayer = styled.div`
  postion: relative;
  width: 100%;
  height; auto;
  z-index: 3;
  ${customMedia.lessThan("tiny")`
    width: 320px;
    max-width: 320px;
  `}
`;

const CharactorsBox = styled.div`
  position: absolute;
  top: 400px;
  right: 200px;
  width: 800px;
  height: 350px;
  z-index: 3;
  opacity: 1;

  ${customMedia.lessThan("veryHuge")`
    right: 0px;
  `}
`;

const StyledImg = styled.img`
  background-color: transparent;
`;

const CharactorsContainer = styled.div`
  position: relative;
  width: 800px;
  height: 350px;
  ${customMedia.lessThan("largeHuge")`
    opacity: 0;
  `}
`;

const GreenRobot = styled.div`
  position: absolute;
  bottom: 0;
  top: auto;
  left: 50px;
`;

const YellowRobot = styled.div`
  position: absolute;
  bottom: 0;
  top: auto;
  left: 350px;
`;

const OrangeRobot = styled.div`
  position: absolute;
  bottom: 10px;
  top: auto;
  left: 600px;
`;

const Light = styled.div`
  position: absolute;
  top: 100px;
  left: 400px;
  bottom: 100px;
`;

const HelloWorld = styled.div`
  position: fixed;
  top: 380px;
  right: -130px;
  width: 800px;
  height; 400px;
  color: ${theme.colors.white};
  font-size: 228px;
  padding: 0;
  z-index: 0;

  ${customMedia.lessThan("ipad")`
    opacity: 0;
  `};
`;

const AboutMeBox = styled.div`
  position: relative;
  margin-top: 90px;
  width: 100%;
  height: 400px;
  z-index: 2;
  text-align: center;
  ${media.lessThan("small")`
    margin-top: 0;
  `}
`;

const SittingRobot = styled.div`
  position: absolute;
  bottom: 0;
  top: 80px;
  left: 18%;
  bottom: 0px;

  ${customMedia.between("large", "largeHuge")`
    left: 100px;
  `}
  ${customMedia.lessThan("large")`
    opacity: 0;
  `}
`;

const Heart = styled.div`
  position: absolute;
  top: 0px;
  left: 16%;

  ${customMedia.between("large", "largeHuge")`
    left: 80px;
  `}
  ${customMedia.lessThan("large")`
    opacity: 0;
  `}
`;

const Star = styled.div`
  position: absolute;
  top: 10px;
  right: 180px;
  ${customMedia.lessThan("ipadpro")`
    opacity: 0;
  `}
`;

type Props = PageRendererProps;

const Home = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <IntroLayer>
        <Background src={BackgroundImage} />
        <IntroBox>
          <Intro />
        </IntroBox>
        <CharactorsBox>
          <CharactorsContainer>
            <GreenRobot>
              <StyledImg src={GreenRobotImg} alt="green robot img" />
            </GreenRobot>
            <YellowRobot>
              <StyledImg src={YellowRobotImg} alt="yellow robot img" />
            </YellowRobot>
            <Light>
              <StyledImg src={LightImg} alt="light img" />
            </Light>
            <OrangeRobot>
              <StyledImg src={OrangeRobotImg} alt="orange robot" />
            </OrangeRobot>
          </CharactorsContainer>
        </CharactorsBox>
      </IntroLayer>
      <HelloWorld>Hello World</HelloWorld>
      <AboutMeBox>
        <Heart>
          <StyledImg src={HeartImg}></StyledImg>
        </Heart>
        <SittingRobot>
          <StyledImg src={SittingRobotImg} />
        </SittingRobot>
        <AboutMe />
        <Star>
          <StyledImg src={StarImg}></StyledImg>
        </Star>
      </AboutMeBox>
    </Layout>
  );
};

export default Home;
