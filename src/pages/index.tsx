import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { MarkdownRemark } from "../graphql-types";
import BlogSummary from "../components/blog-summary";

import styled from "styled-components";
import { customMedia } from "../styles/custom-media";
import BackgroundImage from "./back.png";
import GreenRobotImg from "./green-robot.png";
import YellowRobotImg from "./small-yellow-robot.png";
import OrangeRobotImg from "./orange-robot.png";
import LightImg from "./light.png";
import SittingRobotImg from "./sitting-robot.png";
import HeartImg from "./heart.png";
import StarImg from "./star.png";

const MainBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 350px;
  background-color: #f9f9f9;
  z-index: 3;
  min-height: 86vh;
  ${customMedia.lessThan("tiny")`
    width: 320px;
    max-width: 320px;
  `}
`;

const StyledContainer = styled.div`
  max-width: 950px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  ${customMedia.lessThan("medium")`
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  `}
  ${customMedia.between("medium", "large")`
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  `}
`;

const NewestBlogsTag = styled.div`
  position: relative;
  width: 950px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
`;

const NewestBlogs = styled.div`
  position: absolute;
  left: 10px;
  width: 210px;
  height; 70px;
  padding: 5px;
  font-size: 32px;
  font-weight: 300;
  background-color: #eb5757;
  font-family: "Roboto", sans-serif;
  color: #f5f5f7;
`;

const Background = styled.img`
  position: relative;
  width: 100%;
  height: 450px;
  background-color: transparent;
  margin-top: 80px;
  min-height: 400px;

  z-index: 2;
  ${customMedia.lessThan("background")`
    width: 1271px;
    max-width: 1271px;

  `}
`;

const IntroLayer = styled.div`
  postion: relative;
  width: 100%;
  height; auto;
  top: 0;
  z-index: 3;
  ${customMedia.lessThan("tiny")`
    width: 320px;
    max-width: 320px;
  `}
`;

const IntroductionBox = styled.div`
  position: absolute;
  top: 140px;
  left: 16vw;
  z-index: 5;
  ${customMedia.lessThan("tiny")`
    width: 320px;
    max-width: 320px; 
  `}
`;

const Introduction = styled.div`
  font-size: 48px;
  min-height: 30px;
  color: #f5f5f7;
  font-family: "Roboto", sans-serif;
  ${customMedia.lessThan("medium")`
    font-size: 26px;
  `}
`;

const IntroductionSub = styled.div`
  margin-top: 20px;
  min-height: 30px;
  font-size: 16px;
  color: #333333;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  ${customMedia.lessThan("medium")`
    top: 16vh;
    left: 8vw;
    font-size: 14px;
    width: 440px;
    max-width: 440px; 
  `}
`;

const GotoBlogBox = styled.div`
  margin-top: 10px;
  padding: 20px;
  widhth: 100%;
  text-align: center;
`;

const StyleButton = styled.button`
  width: 150px;
  padding: 10px;
  color: #f5f5f7;

  background-color: #bb6bd9;
  border-style: none;
  border-radius: 30px;
`;

const CharactorsBox = styled.div`
  position: absolute;
  top: 200px;
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
  color: #F5F5F5;
  font-size: 228px;
  font-family: "Roboto", sans-serif;
  padding: 0;
  z-index: 0;

  ${customMedia.lessThan("ipad")`
    opacity: 0;
  `};

`;

const AboutMeBox = styled.div`
  position: absolute;
  top: 600px;
  width: 100%;
  height: 30vh;
  z-index: 2;
  text-align: center;
`;

const AboutMe = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  z-index: 3;
  ${customMedia.lessThan("tiny")`
    width: 320px;
  `}
`;

const AboutMeSummary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
`;

const Name = styled.h1`
  color: #333333;
  border-bottom: none;
  font-weight: bold;
  font-size: 48px;

  ${customMedia.lessThan("medium")`
    font-size: 32px;
  `}
`;

const Job = styled.p`
  color: #4f4f4f;
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
  left: 200px;
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
  left: 180px;

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

const BlogIndex = (props: Props) => {
  console.log("BlogIndex!!!");
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

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
            <StyleButton>See blog</StyleButton>
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
              Almost 15 years professional experience in the tech industry.
              <br />
              Front-End, Back-End, Cloud Infrastracture and so forth.
            </Job>
            <Spacing />
            <StyleButton>See more</StyleButton>
          </AboutMeSummary>
        </AboutMe>
        <Star>
          <StyledImg src={StarImg}></StyledImg>
        </Star>
      </AboutMeBox>
      <MainBox>
        <NewestBlogsTag>
          <NewestBlogs>Newest Blogs</NewestBlogs>
        </NewestBlogsTag>
        <StyledContainer>
          {posts.map(({ node }: { node: MarkdownRemark }) => {
            const frontmatter = node!.frontmatter!;
            const fields = node!.fields!;
            return (
              <BlogSummary
                slug={fields.slug!}
                title={frontmatter.title || fields.slug}
                excerpt={node!.excerpt!}
                date={frontmatter.date}
                description={frontmatter.description}
              />
            );
          })}
        </StyledContainer>
      </MainBox>
    </Layout>
  );
};

export default BlogIndex;
