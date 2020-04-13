import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <section className="hero is-dark is-large">
      <div className="hero-body">
        <div className="container has-text-left">
          <h1 className="title">GUIDE</h1>
          <h2 className="subtitle">あいさつ文、これまでの歴史</h2>
        </div>
      </div>
    </section>
    <section className="hero is-info is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">SPACE</h1>
          <h2 className="subtitle">
            NAWATE/とりいくぐる/ラウンジ・カド/気楽荘
          </h2>
        </div>
      </div>
    </section>
    <section className="hero is-success is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">EVENTS</h1>
          <h2 className="subtitle">イベントのお知らせ</h2>
        </div>
      </div>
    </section>
    <section className="hero is-link is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">SHOP</h1>
          <h2 className="subtitle">BASEから最新の商品を掲示</h2>
        </div>
      </div>
    </section>
    <section className="hero is-warning is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">nawate ARCHIVE</h1>
          <h2 className="subtitle">
            地域の8ミリフィルムのデジタル化映像を公開
          </h2>
        </div>
      </div>
    </section>
    <section className="hero is-danger is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">CONTACT</h1>
          <h2 className="subtitle">お問い合わせ/運営母体について</h2>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
