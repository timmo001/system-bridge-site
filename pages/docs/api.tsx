import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import {
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@material-ui/core";
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
        <Typography component="h3" variant="h3" gutterBottom>
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
              <CardContent key={key}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-evenly">
                  <Grid item>
                    <Icon
                      color={theme.palette.text.primary}
                      path={icon}
                      size={12}
                      title="Download"
                    />
                  </Grid>
                  <Grid item>
                    <Typography component="h4" variant="h5" gutterBottom>
                      {title}
                    </Typography>
                    <Typography
                      className={classes.gridText}
                      color="textPrimary"
                      component="p"
                      variant="body1">
                      {description}
                    </Typography>
                    <Typography
                      className={classes.gridText}
                      color="textPrimary"
                      component="p"
                      variant="body1">
                      <Markdown escapeHtml source={docs} />
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
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
