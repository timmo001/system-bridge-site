import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import {
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@material-ui/core";
// eslint-disable-next-line import/no-named-as-default
import Icon from "@mdi/react";
import {
  mdiDownload,
  mdiDownloadCircleOutline,
  mdiForumOutline,
  mdiGithub,
  mdiNotebookEditOutline,
} from "@mdi/js";

import {
  apiFeatures,
  apiFeaturesKeys,
  Feature,
  userFeatures,
} from "assets/data/features";
import Layout from "components/Layout";
import Link from "next/link";
import Markdown from "components/Markdown";
import useStyles from "assets/jss/components/layout";

function Home(): ReactElement {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Layout
      classes={classes}
      url="https://system-bridge.timmo.dev"
      description="A bridge for your systems.">
      <Container className={classes.main} component="article" maxWidth="lg">
        <Typography color="textPrimary" component="h2" variant="h2">
          A bridge for your systems
        </Typography>
        <Typography component="h3" variant="h3" gutterBottom>
          Features
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="space-around">
          {userFeatures.map(
            ({ title, description, icon }: Feature, key: number) => (
              <Grid
                key={key}
                className={classes.gridItem}
                item
                xl={4}
                md={6}
                xs={12}>
                <Icon
                  color={theme.palette.text.primary}
                  path={icon}
                  size={12}
                  title={title}
                />
                <CardContent>
                  <Typography component="h2" variant="h4" gutterBottom>
                    {title}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    variant="subtitle1">
                    <Markdown escapeHtml={false} source={description} />
                  </Typography>
                </CardContent>
              </Grid>
            )
          )}
        </Grid>
        <Typography component="h3" variant="h3" gutterBottom>
          API Endpoints
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-around">
          {apiFeatures.map(
            ({ title, description, icon }: Feature, key: number) => (
              <Grid
                key={key}
                className={classes.gridItem}
                item
                xl={4}
                md={6}
                xs={12}>
                <Link
                  href={{
                    pathname: "/docs/api",
                    query: { endpoint: apiFeaturesKeys[key] },
                  }}>
                  <CardActionArea>
                    <Icon
                      color={theme.palette.text.primary}
                      path={icon}
                      size={12}
                      title={title}
                    />
                    <CardContent>
                      <Typography component="h2" variant="h4" gutterBottom>
                        {title}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        component="p"
                        variant="subtitle1">
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Grid>
            )
          )}
        </Grid>

        <Typography component="h3" variant="h3" gutterBottom>
          Getting Started
        </Typography>
        <a
          href="https://github.com/timmo001/system-bridge/releases"
          target="_blank">
          <CardContent>
            <CardActionArea>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-evenly">
                <Grid item>
                  <Icon
                    color={theme.palette.text.primary}
                    path={mdiDownloadCircleOutline}
                    size={12}
                    title="Download"
                  />
                </Grid>
                <Grid item>
                  <Typography component="h4" variant="h5" gutterBottom>
                    Download
                  </Typography>
                  <Typography
                    className={classes.gridText}
                    color="textPrimary"
                    component="p"
                    variant="body1">
                    You can download the latest version of the application here.
                  </Typography>
                </Grid>
              </Grid>
            </CardActionArea>
          </CardContent>
        </a>
        <a
          href="https://github.com/timmo001/system-bridge/releases"
          target="_blank">
          <CardContent>
            <CardActionArea>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-evenly">
                <Grid item>
                  <Icon
                    color={theme.palette.text.primary}
                    path={mdiDownload}
                    size={12}
                    title="Download"
                  />
                </Grid>
              </Grid>
            </CardActionArea>
          </CardContent>
        </a>
        <Typography component="h3" variant="h3" gutterBottom>
          Links / Resources
        </Typography>
        <a
          href="https://github.com/timmo001/system-bridge/discussions"
          target="_blank">
          <CardContent>
            <CardActionArea>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-evenly">
                <Grid item>
                  <Icon
                    color={theme.palette.text.primary}
                    path={mdiForumOutline}
                    size={12}
                    title="Discussions"
                  />
                </Grid>
                <Grid item>
                  <Typography component="h4" variant="h5" gutterBottom>
                    Discussions
                  </Typography>
                  <Typography
                    className={classes.gridText}
                    color="textPrimary"
                    component="p"
                    variant="body1">
                    Participate in discussions and get help here.
                  </Typography>
                </Grid>
              </Grid>
            </CardActionArea>
          </CardContent>
        </a>
        <a
          href="https://github.com/timmo001/system-bridge/issues"
          target="_blank">
          <CardContent>
            <CardActionArea>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-evenly">
                <Grid item>
                  <Icon
                    color={theme.palette.text.primary}
                    path={mdiNotebookEditOutline}
                    size={12}
                    title="Suggest a Feature / Report a Bug"
                  />
                </Grid>
                <Grid item>
                  <Typography component="h4" variant="h5" gutterBottom>
                    Suggest a Feature / Report a Bug
                  </Typography>
                  <Typography
                    className={classes.gridText}
                    color="textPrimary"
                    component="p"
                    variant="body1">
                    Thought of a feature that could be added?
                    <br />
                    Found an issue?
                    <br />
                    Suggest it here.
                  </Typography>
                </Grid>
              </Grid>
            </CardActionArea>
          </CardContent>
        </a>
        <a href="https://github.com/timmo001/system-bridge" target="_blank">
          <CardContent>
            <CardActionArea>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-evenly">
                <Grid item>
                  <Icon
                    color={theme.palette.text.primary}
                    path={mdiGithub}
                    size={12}
                    title="GitHub"
                  />
                </Grid>
                <Grid item>
                  <Typography component="h4" variant="h5" gutterBottom>
                    Source Code
                  </Typography>
                  <Typography
                    className={classes.gridText}
                    color="textPrimary"
                    component="p"
                    variant="body1">
                    Want to make a change? Want to browse the source code? It's
                    here.
                  </Typography>
                </Grid>
              </Grid>
            </CardActionArea>
          </CardContent>
        </a>
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

export default Home;
