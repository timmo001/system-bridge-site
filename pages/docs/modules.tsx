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

import { ModuleDescription, moduleItems } from "assets/data/modules";
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

function Modules(): ReactElement {
  const router = useRouter();
  const { endpoint } = router.query;

  const [currentTab, setCurrentTab] = useState<string>("battery");

  useEffect(() => {
    setCurrentTab(typeof endpoint === "string" ? endpoint : "battery");
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [endpoint]);

  const ref = useRef(null);

  function handleChangeTab(_event: ChangeEvent, value: string): void {
    setCurrentTab(value);
    ref.current.scrollIntoView({ behavior: "smooth" });
    router.push({ query: { endpoint: value } }, null, { shallow: true });
  }

  const { title, description, docs, icon }: ModuleDescription = useMemo(
    () => moduleItems[currentTab],
    [currentTab]
  );

  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div ref={ref} />
      <Layout
        classes={classes}
        title="Modules"
        url="https://system-bridge.timmo.dev/docs/modules"
        description="A bridge for your systems."
      >
        <Container className={classes.main} component="article" maxWidth="lg">
          <Typography component="h1" variant="h2">
            Modules
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
                  {Object.keys(moduleItems).map((key: string) => (
                    <StyledTab
                      key={key}
                      label={moduleItems[key].title}
                      icon={
                        <Icon
                          color={theme.palette.text.primary}
                          path={moduleItems[key].icon}
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
                      <Typography
                        className={classes.gridText}
                        color="textPrimary"
                        component="span"
                        variant="body1"
                      >
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

export default Modules;
