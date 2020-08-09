import React from "react";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import styled from "styled-components";
import { customMedia } from "../styles/custom-media";
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
  // background-color: #21bef0;
  ${customMedia.between("tiny", "medium")`
    height: 400px;
  `} ${customMedia.lessThan("tiny")`
    height: 300px;
  `};
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
  top: 40px;
  right: 80px;
  width: 800px;
  height: 350px;
  z-index: 3;
  opacity: 1;

  ${customMedia.lessThan("huge")`
    opacity: 0;
  `}

  ${customMedia.between("huge", "veryHuge")`
    top: 200px;
    width: 550px;
    right: 10px;
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
