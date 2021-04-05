import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import { Container, Grid, Typography, useTheme } from "@material-ui/core";
// eslint-disable-next-line import/no-named-as-default
import Icon from "@mdi/react";

import { APIServiceDescription, apiServices } from "assets/data/api";
import Layout from "components/Layout";
import useStyles from "assets/jss/components/layout";
import Markdown from "components/Markdown";

function API(): ReactElement {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Layout
      classes={classes}
      title="API Docs"
      url="https://system-bridge.timmo.dev"
      description="A bridge for your systems.">
      <Container className={classes.main} component="article" maxWidth="lg">
        <Typography component="h1" variant="h2" gutterBottom>
          API Docs
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="space-around">
          {Object.values(apiServices).map(
            (
              { title, description, docs, icon }: APIServiceDescription,
              key: number
            ) => (
              <Grid
                key={key}
                container
                direction="row"
                alignItems="flex-start"
                justify="space-evenly">
                <Grid className={classes.name} item>
                  <Icon
                    color={theme.palette.text.primary}
                    path={icon}
                    size={12}
                    title={title}
                  />
                </Grid>
                <Grid item xs>
                  <Typography component="h2" variant="h3" gutterBottom>
                    {title}
                  </Typography>
                  <Typography
                    className={classes.gridText}
                    color="textPrimary"
                    component="p"
                    variant="body1">
                    {description}
                  </Typography>
                  <Markdown escapeHtml={false} source={docs} />
                </Grid>
              </Grid>
            )
          )}
        </Grid>
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
