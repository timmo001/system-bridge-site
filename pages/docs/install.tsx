import React, { ReactElement } from "react";
import { Container, Grid, Typography } from "@mui/material";

import Layout from "components/Layout";
import Markdown from "components/Markdown";
import mdContent from "assets/data/install.md";

function Install(): ReactElement {
  return (
    <>
      <Layout
        title="Install"
        url="https://system-bridge.timmo.dev/docs/install"
        description="A bridge for your systems."
      >
        <Container
          component="article"
          maxWidth="lg"
          sx={{ position: "relative", marginTop: 48 }}
        >
          <Typography component="h1" variant="h2">
            Install
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            spacing={2}
          >
            <Grid item xs={12}>
              <Markdown escapeHtml={false} source={mdContent} />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Install;
