import React, { ReactElement } from "react";
import {
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Icon } from "@mdi/react";
import { mdiForumOutline, mdiGithub, mdiNotebookEditOutline } from "@mdi/js";

import {
  moduleFeatures,
  moduleFeaturesKeys,
  Feature,
  userFeatures,
} from "assets/data/features";
import Layout from "components/Layout";
import Link from "next/link";
import Markdown from "components/Markdown";
import useStyles from "assets/jss/components/layout";
import { ModuleDescription } from "assets/data/modules";

function Home(): ReactElement {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Layout
      classes={classes}
      url="https://system-bridge.timmo.dev"
      description="A bridge for your systems."
    >
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
          justifyContent="space-around"
        >
          {userFeatures.map(
            ({ title, description, icon }: Feature, key: number) => (
              <Grid
                key={key}
                className={classes.gridItem}
                item
                xl={4}
                md={6}
                xs={12}
              >
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
                    component="span"
                    variant="subtitle1"
                  >
                    <Markdown escapeHtml={false} source={description} />
                  </Typography>
                </CardContent>
              </Grid>
            )
          )}
        </Grid>

        <Typography component="h3" variant="h3" gutterBottom>
          Data Modules
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          {moduleFeatures.map(
            ({ title, icon }: ModuleDescription, key: number) => (
              <Grid
                key={key}
                className={classes.gridItem}
                item
                xl={4}
                md={6}
                xs={12}
              >
                <Link
                  href={{
                    pathname: "/docs/modules",
                    query: { endpoint: moduleFeaturesKeys[key] },
                  }}
                >
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
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Grid>
            )
          )}
        </Grid>

        <Typography component="h3" variant="h3" gutterBottom>
          Links / Resources
        </Typography>
        <a
          href="https://github.com/timmo001/system-bridge/discussions"
          target="_blank"
        >
          <CardContent>
            <CardActionArea>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-evenly"
              >
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
                    component="span"
                    variant="body1"
                  >
                    Participate in discussions and get help here.
                  </Typography>
                </Grid>
              </Grid>
            </CardActionArea>
          </CardContent>
        </a>
        <a
          href="https://github.com/timmo001/system-bridge/issues"
          target="_blank"
        >
          <CardContent>
            <CardActionArea>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-evenly"
              >
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
                    component="span"
                    variant="body1"
                  >
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
                justifyContent="space-evenly"
              >
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
                    component="span"
                    variant="body1"
                  >
                    The source code for this project is available on GitHub.
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

export default Home;
