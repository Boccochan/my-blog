import React from "react";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { Layout } from "@src/components/layout";
import { SEO } from "@src/components/seo";
import AboutMe from "@src/components/home/AboutMe";
import Intro from "@src/components/home/Intro";
import SkillSummary from "@src/components/home/Skill";
import Details from "@src/components/home/Details";

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
        title="Home"
        keywords={[`Yasuhiro Ito`, `Software Engineer`, `Programmer`]}
      />
      <Intro />
      <AboutMe />
      <SkillSummary />
      <Details />
    </Layout>
  );
};

export default Home;
