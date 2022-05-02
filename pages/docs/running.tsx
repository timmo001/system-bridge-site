import React, { ReactElement } from "react";
import { Container, Grid, Typography } from "@mui/material";

import Layout from "components/Layout";
import Markdown from "components/Markdown";
import mdContent from "assets/data/running/content.md";
import useStyles from "assets/jss/components/layout";

function Running(): ReactElement {
  const classes = useStyles();

  return (
    <>
      <Layout
        classes={classes}
        title="Running"
        url="https://system-bridge.timmo.dev/docs/running"
        description="A bridge for your systems.">
        <Container className={classes.main} component="article" maxWidth="lg">
          <Typography component="h1" variant="h2">
            Running
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            spacing={2}>
            <Grid item xs={12}>
              <Markdown escapeHtml={false} source={mdContent} />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Running;