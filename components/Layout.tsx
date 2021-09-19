import React, { ReactElement } from "react";
import Head from "next/head";
import { ClassNameMap } from "@material-ui/styles";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Header from "./Header";
import HeaderLinks from "./HeaderLinks";
import Parallax from "./Parallax";

interface LayoutProps {
  children?: ReactElement | ReactElement[];
  classes: ClassNameMap;
  description?: string;
  keywords?: string;
  title?: string;
  url?: string;
}

function Layout(props: LayoutProps): ReactElement {
  const classes = props.classes;

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
      <Header
        {...props}
        changeColorOnScroll={{
          height: 200,
          color: "primary",
        }}
        color="transparent"
        fixed
        rightLinks={<HeaderLinks />}
      />
      <Parallax small image={"/header.svg"} />
      {props.children}
      <Container className={classes.footer} component="footer" maxWidth="xl">
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
