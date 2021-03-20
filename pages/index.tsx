import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiDownloadCircleOutline, mdiUpdate } from "@mdi/js";

import Layout from "components/Layout";
import useCardStyles from "assets/jss/components/card";
import useStyles from "assets/jss/components/layout";

interface Feature {
  title: sTableRowing;
  description: sTableRowing;
  imageUrl: sTableRowing;
}

const userFeatures: Array<Feature> = [
  {
    title: "Cross-Platform",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in eros et velit mattis faucibus eget a tellus.",
    imageUrl: "system-bridge-circle.svg",
  },
  {
    title: "API",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in eros et velit mattis faucibus eget a tellus.",
    imageUrl: "system-bridge-circle.svg",
  },
  {
    title: "Websocket",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in eros et velit mattis faucibus eget a tellus.",
    imageUrl: "system-bridge-circle.svg",
  },
  {
    title: "Built using ElecTableRowon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in eros et velit mattis faucibus eget a tellus.",
    imageUrl: "system-bridge-circle.svg",
  },
];

const technicalFeatures: Array<Feature> = [
  {
    title: "Cross-Platform",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in eros et velit mattis faucibus eget a tellus.",
    imageUrl: "system-bridge-circle.svg",
  },
  {
    title: "API",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in eros et velit mattis faucibus eget a tellus.",
    imageUrl: "system-bridge-circle.svg",
  },
  {
    title: "Websocket",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in eros et velit mattis faucibus eget a tellus.",
    imageUrl: "system-bridge-circle.svg",
  },
  {
    title: "Built using ElecTableRowon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in eros et velit mattis faucibus eget a tellus.",
    imageUrl: "system-bridge-circle.svg",
  },
];

function Home(): ReactElement {
  const classes = useStyles();
  const cardStyles = useCardStyles();
  const theme = useTheme();

  return (
    <Layout
      classes={classes}
      url="https://system-bridge.timmo.dev"
      description="A bridge for your systems.">
      <Container className={classes.main} component="article" maxWidth="xl">
        <Typography color="textPrimary" component="h2" variant="h3">
          A bridge for your systems
        </Typography>
        <Typography component="h3" variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container>
          {userFeatures.map(
            ({ title, description, imageUrl }: Feature, key: number) => (
              <Grid key={key} item xl={3} lg={4} md={6} xs={12}>
                <Card>
                  <CardMedia
                    className={cardStyles.media}
                    image={imageUrl}
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
                </Card>
              </Grid>
            )
          )}
        </Grid>
        <Typography component="h3" variant="h4" gutterBottom>
          Getting Started
        </Typography>
        <CardContent>
          <Grid container direction="row" alignItems="center">
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
                color="textPrimary"
                component="p"
                variant="body1"
                gutterBottom>
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
          <Grid container direction="row" alignItems="center">
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
              <Typography color="textPrimary" component="p" variant="body1">
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
        <Typography component="h3" variant="h4" gutterBottom>
          Behind the Scenes
        </Typography>
        <Grid container>
          {technicalFeatures.map(
            ({ title, description, imageUrl }: Feature, key: number) => (
              <Grid key={key} item xl={3} lg={4} md={6} xs={12}>
                <Card>
                  <CardMedia
                    className={cardStyles.media}
                    image={imageUrl}
                    title={title}
                  />
                  <CardContent>
                    <Typography component="h2" variant="h5" gutterBottom>
                      {title}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      component="p"
                      variant="subtitle1">
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
        <Card>
          <CardContent>
            <Typography component="h2" variant="h5" gutterBottom>
              API Endpoints
            </Typography>
            <Typography color="textPrimary" component="div" variant="body1">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Endpoint</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Method</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">/audio</TableCell>
                    <TableCell align="left">Audio Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/battery</TableCell>
                    <TableCell align="left">Battery Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/bluetooth</TableCell>
                    <TableCell align="left">Bluetooth Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/command</TableCell>
                    <TableCell align="left">Run a System Command</TableCell>
                    <TableCell align="left">POST</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/cpu</TableCell>
                    <TableCell align="left">CPU Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/docs</TableCell>
                    <TableCell align="left">OpenAPI Docs</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/filesystem</TableCell>
                    <TableCell align="left">Filesystem Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/graphics</TableCell>
                    <TableCell align="left">Graphics Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/information</TableCell>
                    <TableCell align="left">Endpoint Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/memory</TableCell>
                    <TableCell align="left">Memory Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/network</TableCell>
                    <TableCell align="left">Network Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/open</TableCell>
                    <TableCell align="left">
                      Open a URL or file using the default application
                    </TableCell>
                    <TableCell align="left">POST</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/os</TableCell>
                    <TableCell align="left">OS Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/processes</TableCell>
                    <TableCell align="left">Processes Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">/system</TableCell>
                    <TableCell align="left">System Information</TableCell>
                    <TableCell align="left">GET</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Typography>
          </CardContent>
        </Card>
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
