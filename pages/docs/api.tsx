import React, { ChangeEvent, ReactElement, useMemo, useState } from "react";
import { GetStaticProps } from "next";
import {
  Container,
  createStyles,
  Grid,
  Tab,
  Theme,
  Typography,
  useTheme,
  withStyles,
} from "@material-ui/core";
import { TabContext, TabList } from "@material-ui/lab";
// eslint-disable-next-line import/no-named-as-default
import Icon from "@mdi/react";

import { APIServiceDescription, apiServices } from "assets/data/api";
import Layout from "components/Layout";
import useStyles from "assets/jss/components/layout";
import Markdown from "components/Markdown";

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      marginRight: theme.spacing(1),
      fontSize: theme.typography.pxToRem(15),
      textTransform: "none",
      "&:focus": {
        opacity: 1,
      },
    },
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

function API(): ReactElement {
  const [currentTab, setCurrentTab] = useState<string>(
    // Object.keys(apiServices)[0]
    "audio"
  );

  function handleChangeTab(_event: ChangeEvent, value: string): void {
    setCurrentTab(value);
  }

  const {
    title,
    description,
    docs,
    icon,
  }: APIServiceDescription = useMemo(() => {
    console.log(apiServices, currentTab);
    return apiServices[currentTab];
  }, [currentTab]);

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Layout
      classes={classes}
      title="API Docs"
      url="https://system-bridge.timmo.dev"
      description="A bridge for your systems.">
      <Container className={classes.main} component="article" maxWidth="lg">
        <Typography component="h1" variant="h2" gutterBottom>
          API Docs
        </Typography>
        <TabContext value={currentTab}>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justify="flex-start">
            <Grid item>
              <TabList
                className={classes.verticalTabs}
                aria-label="Services"
                orientation="vertical"
                variant="scrollable"
                onChange={handleChangeTab}>
                {Object.keys(apiServices).map((key: string) => (
                  <StyledTab
                    key={key}
                    label={apiServices[key].title}
                    icon={
                      <Icon
                        color={theme.palette.text.primary}
                        path={apiServices[key].icon}
                        size={1}
                        title={title}
                      />
                    }
                    value={key}
                  />
                ))}
              </TabList>
            </Grid>
            <Grid item xs>
              <Grid
                container
                direction="row"
                alignItems="flex-start"
                justify="space-around">
                <Grid
                  container
                  direction="row"
                  alignItems="flex-start"
                  justify="space-evenly">
                  <Grid className={classes.name} item>
                    <Icon
                      color={theme.palette.text.primary}
                      path={icon}
                      size={12}
                      title={title}
                    />
                  </Grid>
                  <Grid item xs>
                    <Typography component="h2" variant="h3" gutterBottom>
                      {title}
                    </Typography>
                    <Typography
                      className={classes.gridText}
                      color="textPrimary"
                      component="p"
                      variant="body1">
                      {description}
                    </Typography>
                    <Markdown escapeHtml={false} source={docs} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabContext>
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

export default API;
