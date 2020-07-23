import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { MarkdownRemark } from "../graphql-types";
import BlogSummary from "../components/blog-summary";
import { GridSpacing } from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";
import { customMedia } from "../styles/custom-media";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

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
