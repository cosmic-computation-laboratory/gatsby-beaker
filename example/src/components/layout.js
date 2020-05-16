/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { StaticQuery, useStaticQuery, graphql } from "gatsby";

// import Header from "./header";

const Layout = ({ children }) => {
  const query = graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `;
  const data = useStaticQuery(query);
  return (
    <Fragment>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Box style={{}}>{children}</Box>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
