import React from "react";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import AboutMe from "../components/home/AboutMe";
import Intro from "../components/home/Intro";
import SkillSummary from "../components/home/Skill";
import Details from "../components/home/Details";

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
      <Intro />
      <AboutMe />
      <SkillSummary />
      <Details />
    </Layout>
  );
};

export default Home;
