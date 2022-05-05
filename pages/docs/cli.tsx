import React, { ReactElement } from "react";
import { Container, Grid, Typography } from "@mui/material";

import Layout from "components/Layout";
import Markdown from "components/Markdown";
import mdContent from "assets/data/cli.md";

function CLI(): ReactElement {
  return (
    <>
      <Layout
        title="CLI"
        url="https://system-bridge.timmo.dev/docs/cli"
        description="A bridge for your systems."
      >
        <Container
          component="article"
          maxWidth="lg"
          sx={{ position: "relative", marginTop: 8 }}
        >
          <Typography component="h1" variant="h2">
            CLI
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

export default CLI;
