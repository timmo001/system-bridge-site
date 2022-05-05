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

import { apiItems, APIDescription } from "assets/data/api";
import Layout from "components/Layout";
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
  const { id } = router.query;

  const [currentTab, setCurrentTab] = useState<string>("data");

  useEffect(() => {
    setCurrentTab(typeof id === "string" ? id : "data");
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [id]);

  const ref = useRef(null);

  function handleChangeTab(_event: ChangeEvent, value: string): void {
    setCurrentTab(value);
    ref.current.scrollIntoView({ behavior: "smooth" });
    router.push({ query: { id: value } }, null, { shallow: true });
  }

  const { title, docs, icon }: APIDescription = useMemo(
    () => apiItems[currentTab],
    [currentTab]
  );

  const theme = useTheme();

  return (
    <>
      <div ref={ref} />
      <Layout
        title="API"
        url="https://system-bridge.timmo.dev/docs/api"
        description="A bridge for your systems."
      >
        <Container
          component="article"
          maxWidth="lg"
          sx={{ position: "relative", marginTop: 8 }}
        >
          <Typography component="h1" variant="h2">
            API
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
                  aria-label="Endpoints"
                  orientation="vertical"
                  variant="scrollable"
                  onChange={handleChangeTab}
                  sx={{
                    borderRight: `1px solid ${theme.palette.divider}`,
                    marginTop: 80,
                  }}
                >
                  {Object.keys(apiItems).map((key: string) => (
                    <StyledTab
                      key={key}
                      label={apiItems[key].title}
                      icon={
                        <Icon
                          id={`api-${key}`}
                          color={theme.palette.text.primary}
                          path={apiItems[key].icon}
                          size={1}
                          title={apiItems[key].title}
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
                    <Grid item sx={{ marginTop: 80 }}>
                      <Icon
                        id={`api-${currentTab}`}
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

export default API;
