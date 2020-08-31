import React from "react";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { Layout } from "@src/components/layout";
import { SEO } from "@src/components/seo";
import { MarkdownRemark } from "@src/graphql-types";
import BlogSummary from "@src/components/blog-summary";
import styled from "styled-components";
import { myMedia } from "@src/styles/custom-media";
import { theme } from "@src/styles/color";

const MainBox = styled.div`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.whiteLight};
  z-index: 3;
  min-height: 100vh;
  ${myMedia.lessThan("iphone5")`
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
  ${myMedia.lessThan("ipadpro")`
    width: 100%;
  `}
`;

const NewestBlogs = styled.div`
  position: relative;
  left: 10px;
  width: 230px;
  height; 70px;
  padding: 5px;
  font-size: 32px;
  font-weight: 300;
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    background-color: ${theme.colors.blogBackground};
    top: 0;
    width: 42px;
    height: 42px;
    transform: scale(0.707) rotate(45deg);
    right: -21px;
  }
`;

const StyledContainer = styled.div`
  max-width: 950px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  ${myMedia.lessThan("ipad")`
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  `}
  ${myMedia.between("ipad", "medium")`
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
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Blog"
        keywords={[
          `blog`,
          `gatsby`,
          `javascript`,
          `react`,
          "IT",
          "programming",
          "typescript",
        ]}
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
