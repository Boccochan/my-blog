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

const StyledContainer = styled.div`
  max-width: 950px;
  margin-right: auto;
  margin-left: auto;

  padding: 10px;
  margin-top: 16vh;
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

const CatchPhrase = styled.div`
  width: 100%;
  height: 55vh;
  background-color: #152740;
`;

const Background = styled.img`
  width: 100%;
  height: 50vh;
  background-color: transparent;
  margin-top: 8vh;
`;

const Introduction = styled.div`
  position: absolute;
  top: 15vh;
  left: 12vw;
  font-size: 48px;
  color: #f5f5f7;
  // font-weight: bold;
  font-family: "Roboto", sans-serif;
  ${customMedia.lessThan("medium")`
    top: 10vh;
    left: 8vw;
    font-size: 26px;
  `}
`;

const IntroductionSub = styled.div`
  position: absolute;
  top: 28vh;
  left: 12vw;
  font-size: 16px;
  color: #333333;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  // ${customMedia.lessThan("medium")`
  //   top: 10vh;
  //   left: 8vw;

  //   font-size: 26px;
  // `}
`;

const BlogButton = styled.button`
  width: 150px;
  padding: 10px;
  color: #f5f5f7;

  background-color: #bb6bd9;
  border-style: none;
  border-radius: 30px;
`;

const GotoBlogBtn = styled(BlogButton)`
  position: absolute;
  top: 40vh;
  left: 17vw;
`;

const CharactorsContainer = styled.div`
  position: absolute;
  top: 20vh;
  right: 60px;
  // border: 1px solid black;
  width: 900px;
  height: 350px;
`;

const GreenRobot = styled.img`
  position: relative;
  bottom: 0;
  top: auto;
  left: 30px;
  background-color: transparent;
`;

const YellowRobot = styled.img`
  position: relative;
  bottom: 0;
  top: auto;
  left: 60px;
  background-color: transparent;
`;

const OrangeRobot = styled.img`
  position: relative;
  bottom: 0;
  top: auto;
  left: 160px;
  background-color: transparent;
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

  // const [spacing] = React.useState<GridSpacing>(2);
  // const classes = useStyles();

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Background src={BackgroundImage} />
      <Introduction>
        Technology makes
        <br /> our future better!
      </Introduction>
      <IntroductionSub>
        Hello there! I am Yasuhiro Ito who is a software engineer.
        <br /> I have been posting tech blogs almost everyday to solve
        <br /> our problems.
      </IntroductionSub>
      <GotoBlogBtn>See blog</GotoBlogBtn>
      <CharactorsContainer>
        <GreenRobot src={GreenRobotImg} alt="green robot" />
        <YellowRobot src={YellowRobotImg} alt="yellow robot" />
        <OrangeRobot src={OrangeRobotImg} alt="orange robot" />
      </CharactorsContainer>

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
    </Layout>
  );
};

export default BlogIndex;
