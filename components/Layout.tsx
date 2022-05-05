import React, { ReactElement } from "react";
import Head from "next/head";
import { Container, CardContent, Typography, useTheme } from "@mui/material";

import Header from "./Header";
import HeaderLinks from "./HeaderLinks";
import Parallax from "./Parallax";

interface LayoutProps {
  children?: ReactElement | ReactElement[];
  description?: string;
  keywords?: string;
  title?: string;
  url?: string;
}

function Layout(props: LayoutProps): ReactElement {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>
          {props.title ? `${props.title} - System Bridge` : `System Bridge`}
        </title>
        <link rel="canonical" href={props.url} />
        <meta
          name="description"
          content={
            props.description
              ? `${props.description}`
              : props.title
              ? `${props.title} - System Bridge`
              : `System Bridge`
          }
        />
        <meta
          name="keywords"
          content={
            props.keywords
              ? `${props.keywords}`
              : `system-bridge, typescript, material-ui, reactjs, react`
          }
        />
      </Head>
      <Header rightLinks={<HeaderLinks />} />
      <Parallax image={"/header.svg"} />
      {props.children}
      <Container
        component="footer"
        maxWidth="xl"
        sx={{ marginTop: theme.spacing(2) }}
      >
        <CardContent>
          <Typography component="div" variant="subtitle1">
            Website source available on{" "}
            <a
              href="https://github.com/timmo001/system-bridge-site"
              target="_blank"
            >
              GitHub
            </a>
            .
            <br />
            Copyright ©{" "}
            <a href="https://timmo.dev" target="_blank">
              Aidan Timson
            </a>
          </Typography>
        </CardContent>
      </Container>
    </>
  );
}

export default Layout;
