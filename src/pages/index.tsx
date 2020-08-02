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
import { navigate } from "gatsby";
import media from "styled-media-query";

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

const IntroductionBox = styled.div`
  position: absolute;
  top: 80px;
  left: 8vw;
  z-index: 5;
  ${media.lessThan("small")`
    top: 40px;
    left: 4vw;
  `}
`;

const Introduction = styled.div`
  font-size: 90px;
  min-height: 30px;
  color: ${theme.colors.white};
  width: 100%;

  ${media.lessThan("small")`
    width: 340px;
    font-size: 30px;
  `}
  ${media.between("small", "medium")`
    width: 100%;
    font-size: 50px;
  `}
  ${media.between("medium", "large")`
    width: 100%;
    font-size: 80px; 
  `}
  ${media.greaterThan("large")`
    width: 100%;
    font-size: 100px;
  `}
`;

const IntroductionSub = styled.div`
  margin-top: 20px;
  min-height: 30px;
  color: ${theme.colors.gray};
  font-weight: 300;

  ${media.lessThan("small")`
    min-width: 340px;
    font-size: 10px;
  `}
  ${media.between("small", "medium")`
    width: 100%;
    top: 16vh;
    left: 8vw;
    font-size: 12px;
  `}
  ${media.between("medium", "large")`
    width: 100%;
    font-size: 20px;
  `}
  ${media.greaterThan("large")`
    width: 100%;
    font-size: 30px;
  `}

`;

const GotoBlogBox = styled.div`
  margin-top: 10px;
  padding: 20px;
  widhth: 100%;
  text-align: center;
  ${media.lessThan("large")`
    text-align: left;
  `}
  ${media.greaterThan("large")`
    text-align: center;
  `}
`;

const StyleButton = styled.button`
  width: 300px;
  padding: 10px;
  color: ${theme.colors.white};
  font-size: 30px;

  background-color: ${theme.colors.purple};
  border: 1px solid ${theme.colors.purple};
  border-style: none;
  border-radius: 40px;
  outline: none;

  &:hover {
    background-color: ${theme.colors.purpleLight};
    font-weight: bold;
  }
  ${media.lessThan("small")`
    font-size: 10px;
    width: 160px;
  `}
  ${media.between("small", "medium")`
    top: 16vh;
    left: 8vw;
    font-size: 12px;
    width: 200px;
  `}
  ${media.between("medium", "large")`
    top: 16vh;
    left: 8vw;
    font-size: 14px;
    width: 300px;
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

const AboutMe = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  z-index: 3;
  min-width: 280px;
`;

const AboutMeSummary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;
`;

const Name = styled.h1`
  color: ${theme.colors.grayDark};
  border-bottom: none;
  font-weight: bold;
  font-size: 48px;

  ${customMedia.lessThan("medium")`
    font-size: 32px;
  `}
`;

const Job = styled.p`
  color: ${theme.colors.gray};
  line-height: 22px;
  ${customMedia.lessThan("medium")`
    font-size: 9px;
  `}
`;

const Spacing = styled.div`
  height: 20px;
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
  const gotoBlog = () => {
    navigate("/blog");
  };

  const gotoAbout = () => {
    navigate("/about/");
    console.log("About");
  };

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <IntroLayer>
        <Background src={BackgroundImage} />
        <IntroductionBox>
          <Introduction>
            Technology makes
            <br /> our future better!
          </Introduction>
          <IntroductionSub>
            Hello there! I am Yasuhiro Ito who is a software engineer.
            <br /> I have been posting tech blogs almost everyday to solve
            <br /> our problems.
          </IntroductionSub>
          <GotoBlogBox>
            <StyleButton onClick={gotoBlog}>See blog</StyleButton>
          </GotoBlogBox>
        </IntroductionBox>
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
        <AboutMe>
          <AboutMeSummary>
            <Name>Yasuhiro Ito</Name>
            <Job>Software Engineer@qualitia.co.jp</Job>
            <Job>
              Almost 15 years professional experience.
              <br />
              Front-End, Back-End, Cloud Infrastracture and so forth.
            </Job>
            <Spacing />
            <StyleButton onClick={gotoAbout}>See more</StyleButton>
          </AboutMeSummary>
        </AboutMe>
        <Star>
          <StyledImg src={StarImg}></StyledImg>
        </Star>
      </AboutMeBox>
    </Layout>
  );
};

export default Home;
