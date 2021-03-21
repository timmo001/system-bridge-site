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
  mdiApplicationCog,
  mdiBatteryCharging,
  mdiBluetoothConnect,
  mdiCogs,
  mdiCpu64Bit,
  mdiDesktopTower,
  mdiDesktopTowerMonitor,
  mdiDownloadCircleOutline,
  mdiExpansionCard,
  mdiFileDocument,
  mdiForumOutline,
  mdiGithub,
  mdiHarddisk,
  mdiInformationOutline,
  mdiMemory,
  mdiNetwork,
  mdiNotebookEditOutline,
  mdiSpeakerMultiple,
  mdiUpdate,
} from "@mdi/js";

import Layout from "components/Layout";
import useStyles from "assets/jss/components/layout";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const userFeatures: Array<Feature> = [
  {
    title: "System Information",
    description:
      "Access your system's Audio, Battery, Bluetooth, CPU, Filesystems, Graphics, Memory, Networking, OS, and Process information via the API.",
    icon: mdiInformationOutline,
  },
  {
    title: "Send Commands",
    description:
      "Automate your system by sending a command or opening a URL or path via the API.",
    icon: mdiCogs,
  },
  {
    title: "Cross-Platform",
    description: "Compatible with Windows, Mac and Linux.",
    icon: mdiDesktopTowerMonitor,
  },
];

const apiFeatures: Array<Feature> = [
  {
    title: "Audio",
    description: "Audio devices and configuration.",
    icon: mdiSpeakerMultiple,
  },
  {
    title: "Battery",
    description: "Battery level, capacity and configuration.",
    icon: mdiBatteryCharging,
  },
  {
    title: "Bluetooth",
    description: "BLuetooth configuratoin and devices.",
    icon: mdiBluetoothConnect,
  },
  {
    title: "Command",
    description: "Run a command.",
    icon: mdiCogs,
  },
  {
    title: "CPU",
    description: "CPU usage, clock speed, and configuration.",
    icon: mdiCpu64Bit,
  },
  {
    title: "Filesystem",
    description: "Filesystems and Disk information.",
    icon: mdiHarddisk,
  },
  {
    title: "Graphics",
    description: "Graphics card usage and configuration.",
    icon: mdiExpansionCard,
  },
  {
    title: "Memory",
    description: "Memory usage and configuration.",
    icon: mdiMemory,
  },
  {
    title: "Network",
    description: "Networking information.",
    icon: mdiNetwork,
  },
  {
    title: "Open",
    description: "Open a URL or file using the default application.",
    icon: mdiFileDocument,
  },
  {
    title: "Processes",
    description: "Show proccess information.",
    icon: mdiApplicationCog,
  },
  {
    title: "System",
    description: "Get system informaiton.",
    icon: mdiDesktopTower,
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
                    path={mdiUpdate}
                    size={12}
                    title="Download"
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
                    The application will automatically update whenever a new
                    version is released. You can also download the latest
                    version manually from here.
                  </Typography>
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
