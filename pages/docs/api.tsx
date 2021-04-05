import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import { Container, Grid, Typography } from "@material-ui/core";
// eslint-disable-next-line import/no-named-as-default
// import Icon from "@mdi/react";

import Layout from "components/Layout";
import useStyles from "assets/jss/components/layout";

function API(): ReactElement {
  const classes = useStyles();

  return (
    <Layout
      classes={classes}
      title="API Docs"
      url="https://system-bridge.timmo.dev"
      description="A bridge for your systems.">
      <Container className={classes.main} component="article" maxWidth="lg">
        <Typography component="h3" variant="h3" gutterBottom>
          API Docs
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="space-around"></Grid>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 1,
  };
};

export default API;
