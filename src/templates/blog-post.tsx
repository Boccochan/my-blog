import { graphql, PageRendererProps } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Bio } from "@src/components/bio";
import { Layout } from "@src/components/layout";
import { FadeLink } from "@src/components/link";
import { SEO } from "@src/components/seo";
import { Query, SitePageContext } from "@src/graphql-types";
import { rhythm, styledScale } from "@src/utils/typography";
import { Social } from "@src/components/social";
import { theme } from "@src/styles/color";
import "./markdown.scss";

interface Props extends PageRendererProps {
  pageContext: SitePageContext;
  data: Query;
}

const Box = styled.div`
  top: 0;
  background-color: ${theme.colors.blogBackground};
`;

const Date = styled.p`
  display: block;
  ${styledScale(-1 / 5)};
  margin-bottom: ${rhythm(1)};
`;

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

const PostNavigator = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  padding-bottom: 20px;
`;

const StyledContainer = styled.div`
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1em;
  padding-right: 1em;
  background-color: ${theme.colors.whiteSuperLight};
`;

const BlogPostTemplate = (props: Props) => {
  const { location } = props;
  const data = props.data!;
  const post = data.markdownRemark!;
  const excerpt = post.excerpt!;
  const frontmatter = post.frontmatter!;
  const html = post.html!;
  const siteTitle = data.site!.siteMetadata!.title!;
  const { previous, next } = props.pageContext;
  const url = location.href ? location.href : "";
  const title = post.frontmatter!.title ? post.frontmatter!.title : "";
  console.log(url.split("/").slice(-2)[0]);

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
      />
      <Box className="github-ish">
        <StyledContainer>
          <Date>{frontmatter.date}</Date>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />

          <Social title={title} url={url} />
          <Divider />
          <Bio />
          <PostNavigator>
            <li>
              {previous && (
                <FadeLink to={previous.fields!.slug!} rel="prev">
                  ← {previous.frontmatter!.title}
                </FadeLink>
              )}
            </li>
            <li>
              {next && (
                <FadeLink to={next.fields!.slug!} rel="next">
                  {next.frontmatter!.title} →
                </FadeLink>
              )}
            </li>
          </PostNavigator>
        </StyledContainer>
      </Box>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
