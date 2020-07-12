import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { MarkdownRemark } from "../graphql-types";
import BlogSummary from "../components/blog-summary";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

type Props = PageRendererProps;

const BlogIndex = (props: Props) => {
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

  const [spacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <Container maxWidth="lg">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={spacing}>
              {posts.map(({ node }: { node: MarkdownRemark }) => {
                const frontmatter = node!.frontmatter!;
                const fields = node!.fields!;
                return (
                  <Grid key={fields.slug!} item xs={12} sm={6} lg={4}>
                    <BlogSummary
                      slug={fields.slug!}
                      title={frontmatter.title || fields.slug}
                      excerpt={node!.excerpt!}
                      date={frontmatter.date}
                      description={frontmatter.description}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default BlogIndex;
