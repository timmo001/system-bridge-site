import React, { ReactElement } from "react";
import { Container, Grid, Typography } from "@mui/material";

import Layout from "components/Layout";
import useStyles from "assets/jss/components/layout";

function WebSocket(): ReactElement {
  const classes = useStyles();

  return (
    <>
      <Layout
        classes={classes}
        title="CLI"
        url="https://system-bridge.timmo.dev/docs/cli"
        description="A bridge for your systems.">
        <Container className={classes.main} component="article" maxWidth="lg">
          <Typography component="h1" variant="h2">
            CLI
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            spacing={2}>
            <Grid item xs={12}>
              TODO
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default WebSocket;
