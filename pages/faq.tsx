import React, { ReactElement } from "react";
import { Container, Grid, Typography } from "@mui/material";

import Layout from "components/Layout";
import Markdown from "components/Markdown";
import mdFaq from "assets/data/faq.md";
import useStyles from "assets/jss/components/layout";

function Faq(): ReactElement {
  const classes = useStyles();

  return (
    <>
      <Layout
        classes={classes}
        title="FAQ"
        url="https://system-bridge.timmo.dev/faq"
        description="A bridge for your systems."
      >
        <Container className={classes.main} component="article" maxWidth="lg">
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
