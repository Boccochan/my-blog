import React from "react";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import styled from "styled-components";
import { customMedia } from "../styles/custom-media";
import { theme } from "../styles/color";
import media from "styled-media-query";
import AboutMe from "../components/Home/AboutMe";
import Intro from "../components/Home/Intro";
import { MascotIntro } from "../components/Home/Mascot";

const BackgroundBox = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 500px;
  background-color: #21bef0;
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
  top: 150px;
  right: 80px;
  width: 800px;
  height: 350px;
  z-index: 3;
  opacity: 1;

  ${customMedia.lessThan("veryHuge")`
    right: 0px;
  `}
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
  width: 100%;
  height: 400px;
  z-index: 2;
  text-align: center;
  ${media.lessThan("small")`
    margin-top: 0;
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
      <HelloWorld>Hello World</HelloWorld>
      <AboutMeBox>
        <AboutMe />
      </AboutMeBox>
    </Layout>
  );
};

export default Home;
