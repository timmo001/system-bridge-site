import React, {
  ChangeEvent,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
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
  icon: ReactElement;
  value: string;
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
  const router = useRouter();
  const { endpoint } = router.query;

  const [currentTab, setCurrentTab] = useState<string>("audio");

  useEffect(() => {
    setCurrentTab(typeof endpoint === "string" ? endpoint : "audio");
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [endpoint]);

  const ref = useRef(null);

  function handleChangeTab(_event: ChangeEvent, value: string): void {
    setCurrentTab(value);
    ref.current.scrollIntoView({ behavior: "smooth" });
    router.push({ query: { endpoint: value } }, null, { shallow: true });
  }

  const { title, description, docs, icon }: APIServiceDescription = useMemo(
    () => apiServices[currentTab],
    [currentTab]
  );

  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div ref={ref} />
      <Layout
        classes={classes}
        title="API Docs"
        url="https://system-bridge.timmo.dev"
        description="A bridge for your systems.">
        <Container className={classes.main} component="article" maxWidth="lg">
          <Typography component="h1" variant="h2">
            API Docs
          </Typography>
          <Typography color="textSecondary" component="h3" variant="subtitle1">
            <Markdown
              escapeHtml
              source="All endpoints require an `api-key` header which can be generated and obtained from the app settings."
            />
          </Typography>
          <TabContext value={currentTab}>
            <Grid
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}>
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
                  justifyContent="space-around">
                  <Grid
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="space-evenly">
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
                        component="span"
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
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 1,
  };
};

export default API;
