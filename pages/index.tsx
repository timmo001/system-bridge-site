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
import { mdiDownloadCircleOutline, mdiUpdate } from "@mdi/js";

import Layout from "components/Layout";
import useStyles from "assets/jss/components/layout";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const userFeatures: Array<Feature> = [
  {
    title: "Cross-Platform",
    description: "Compatible with Windows, Mac and Linux.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "System Information",
    description:
      "Access your system's Audio, Battery, Bluetooth, CPU, Filesystems, Graphics, Memory, Networking, OS, and Process information via the API.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "Commands",
    description:
      "Automate your system by sending a command or opening a URL or path via the API.",
    icon: mdiDownloadCircleOutline,
  },
];

const apiFeatures: Array<Feature> = [
  {
    title: "Audio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "Battery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "Bluetooth",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "Command",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "CPU",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "Filesystem",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "Graphics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "Memory",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "Network",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "Processes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: mdiDownloadCircleOutline,
  },
  {
    title: "System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: mdiDownloadCircleOutline,
  },
];

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
                lg={6}
                md={8}
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
                    {description}
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
                lg={6}
                md={8}
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
                    {description}
                  </Typography>
                </CardContent>
              </Grid>
            )
          )}
        </Grid>
        <Typography component="h3" variant="h3" gutterBottom>
          Getting Started
        </Typography>
        <CardContent>
          <Grid container direction="row" alignItems="center" justify="center">
            <Grid item>
              <Icon
                color={theme.palette.text.primary}
                path={mdiDownloadCircleOutline}
                size={12}
                title="Download & Install"
              />
            </Grid>
            <Grid item>
              <Typography component="h4" variant="h5" gutterBottom>
                Download & Install
              </Typography>
              <Typography
                className={classes.gridText}
                color="textPrimary"
                component="p"
                variant="body1">
                You can download the latest version of the application{" "}
                <a
                  href="https://github.com/timmo001/system-bridge/releases"
                  target="_blank">
                  here
                </a>
                .
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" justify="center">
            <Grid item>
              <Icon
                color={theme.palette.text.primary}
                path={mdiUpdate}
                size={12}
                title="Download & Install"
              />
            </Grid>
            <Grid item>
              <Typography component="h4" variant="h5" gutterBottom>
                Updates
              </Typography>
              <Typography
                className={classes.gridText}
                color="textPrimary"
                component="p"
                variant="body1">
                The application will automatically update whenever a new version
                is released in this repository. You can also download the latest
                version manually from{" "}
                <a
                  href="https://github.com/timmo001/system-bridge/releases"
                  target="_blank">
                  here
                </a>
                .
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
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
