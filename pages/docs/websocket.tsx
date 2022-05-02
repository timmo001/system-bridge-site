import React, {
  ChangeEvent,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import {
  Container,
  Grid,
  Tab,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { createStyles, withStyles } from "@mui/styles";
import { TabContext, TabList } from "@mui/lab";
import { Icon } from "@mdi/react";

import { websocketItems, WebsocketDescription } from "assets/data/websocket";
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

function WebSocket(): ReactElement {
  const router = useRouter();
  const { id } = router.query;

  const [currentTab, setCurrentTab] = useState<string>("registerListener");

  useEffect(() => {
    setCurrentTab(typeof id === "string" ? id : "registerListener");
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [id]);

  const ref = useRef(null);

  function handleChangeTab(_event: ChangeEvent, value: string): void {
    setCurrentTab(value);
    ref.current.scrollIntoView({ behavior: "smooth" });
    router.push({ query: { id: value } }, null, { shallow: true });
  }

  const { title, docs, icon }: WebsocketDescription = useMemo(
    () => websocketItems[currentTab],
    [currentTab]
  );

  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div ref={ref} />
      <Layout
        classes={classes}
        title="WebSocket"
        url="https://system-bridge.timmo.dev/docs/websocket"
        description="A bridge for your systems."
      >
        <Container className={classes.main} component="article" maxWidth="lg">
          <Typography component="h1" variant="h2">
            WebSocket
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
                  {Object.keys(websocketItems).map((key: string) => (
                    <StyledTab
                      key={key}
                      label={websocketItems[key].title}
                      icon={
                        <Icon
                          color={theme.palette.text.primary}
                          path={websocketItems[key].icon}
                          size={1}
                          title={websocketItems[key].title}
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

export default WebSocket;
