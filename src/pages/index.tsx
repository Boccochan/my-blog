import React from "react";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import styled from "styled-components";
import { customMedia, myMedia } from "../styles/custom-media";
import { theme } from "../styles/color";
import media from "styled-media-query";
import AboutMe from "../components/home/AboutMe";
import Intro from "../components/home/Intro";
import { MascotIntro } from "../components/home/Mascot";
import SkillSummary from "../components/home/SkillSummary";
// import WorkExperience from "../components/home/WorkExperience";
import Details from "../components/home/Details";

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

  // ${customMedia.lessThan("background")`
  //   opacity: 0;
  // `}

  // ${customMedia.between("background", "veryHuge")`
  //   top: 80px;
  //   width: 550px;
  //   right: 80px;
  // `}

  ${myMedia.lessThan("huge")`
    opacity: 0;
  `}

  ${myMedia.between("huge", "max")`
    top: 80px;
    width: 550px;
    right: 80px;

  `}
`;

const AboutMeBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 2;
  text-align: center;
  ${customMedia.lessThan("large")`
    height: auto;
  `}
  ${customMedia.greaterThan("large")`
    height: 350px;
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
        <BackgroundBox />
        <IntroBox>
          <Intro />
        </IntroBox>
        <CharactorsBox>
          <MascotIntro />
        </CharactorsBox>
      </IntroLayer>
      <AboutMeBox>
        <AboutMe />
      </AboutMeBox>
      <SkillSummary />
      <Details />
    </Layout>
  );
};

export default Home;
