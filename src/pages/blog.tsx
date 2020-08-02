import React from "react";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { MarkdownRemark } from "../graphql-types";
import BlogSummary from "../components/blog-summary";
import styled from "styled-components";
import { customMedia } from "../styles/custom-media";
import { theme } from "../styles/color";

const MainBox = styled.div`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.whiteLight};
  z-index: 3;
  min-height: 100vh;
  ${customMedia.lessThan("tiny")`
    width: 320px;
    max-width: 320px;
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
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
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
    <Layout location={props.location} title={siteTitle} crumbLabel="blog">
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <MainBox>
        <NewestBlogsTag id="newest-blog">
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
