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
  Grid,
  Tab,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
// eslint-disable-next-line import/no-named-as-default
import Icon from "@mdi/react";

import { mqttData, MqttDescription } from "assets/data/mqtt";
import Layout from "components/Layout";
import Markdown from "components/Markdown";
import useStyles from "assets/jss/components/layout";

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

function Mqtt(): ReactElement {
  const router = useRouter();
  const { id } = router.query;

  const [currentTab, setCurrentTab] = useState<string>("receivingData");

  useEffect(() => {
    setCurrentTab(typeof id === "string" ? id : "receivingData");
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [id]);

  const ref = useRef(null);

  function handleChangeTab(_event: ChangeEvent, value: string): void {
    setCurrentTab(value);
    ref.current.scrollIntoView({ behavior: "smooth" });
    router.push({ query: { id: value } }, null, { shallow: true });
  }

  const { title, docs, icon }: MqttDescription = useMemo(
    () => mqttData[currentTab],
    [currentTab]
  );

  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div ref={ref} />
      <Layout
        classes={classes}
        title="Mqtt"
        url="https://system-bridge.timmo.dev/docs/mqtt"
        description="A bridge for your systems."
      >
        <Container className={classes.main} component="article" maxWidth="lg">
          <Typography component="h1" variant="h2">
            MQTT
          </Typography>
          <TabContext value={currentTab}>
            <Grid
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item>
                <TabList
                  className={classes.verticalTabs}
                  aria-label="Services"
                  orientation="vertical"
                  variant="scrollable"
                  onChange={handleChangeTab}
                >
                  {Object.keys(mqttData).map((key: string) => (
                    <StyledTab
                      key={key}
                      label={mqttData[key].title}
                      icon={
                        <Icon
                          color={theme.palette.text.primary}
                          path={mqttData[key].icon}
                          size={1}
                          title={mqttData[key].title}
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
                  justifyContent="space-around"
                >
                  <Grid
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="space-evenly"
                  >
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

export default Mqtt;
