import React, { ReactElement } from "react";
import { Container, Grid, Typography } from "@mui/material";

import Layout from "components/Layout";
import Markdown from "components/Markdown";
import mdFaq from "assets/data/faq.md";

function Faq(): ReactElement {
  return (
    <>
      <Layout
        title="FAQ"
        url="https://system-bridge.timmo.dev/faq"
        description="A bridge for your systems."
      >
        <Container
          component="article"
          maxWidth="lg"
          sx={{ position: "relative", marginTop: 4 }}
        >
          <Typography component="h1" variant="h2">
            FAQ
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            spacing={2}
          >
            <Grid item xs>
              <Markdown escapeHtml={false} source={mdFaq} />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Faq;
