import React, { ReactElement } from "react";
import Link from "next/link";
import {
  List,
  ListItem,
  Button,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Icon } from "@mdi/react";
import {
  mdiFileDocumentMultiple,
  mdiForumOutline,
  mdiGithub,
  mdiNotebookEditOutline,
} from "@mdi/js";

function HeaderLinks(): ReactElement {
  const theme = useTheme();

  const listItemStyle = {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: 0,
    padding: 0,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: 1,
        marginLeft: 15,
        backgroundColor: "#e5e5e5",
      },
    },
  };

  const navLinkStyle = {
    color: "inherit",
    margin: theme.spacing(0, 1),
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)",
    },
    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 30px)",
      marginLeft: 15,
      marginBottom: 8,
      marginTop: 8,
      textAlign: "left",
      "& > span:first-of-type": {
        justifyContent: "flex-start",
      },
    },
  };

  const tooltipStyle = {
    padding: "10px 15px",
    lineHeight: "1.7em",
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: 400,
  };

  return (
    <List
      sx={{
        fontSize: 14,
        margin: 0,
        paddingLeft: 0,
        listStyle: "none",
        paddingTop: 0,
        paddingBottom: 0,
        color: "inherit",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <ListItem sx={listItemStyle}>
        <Link href="/docs/install">
          <Button variant="text" sx={navLinkStyle}>
            <Typography component="span">Install</Typography>
          </Button>
        </Link>
        <Link href="/docs/running">
          <Button variant="text" sx={navLinkStyle}>
            <Typography component="span">Running</Typography>
          </Button>
        </Link>
      </ListItem>
      <ListItem sx={listItemStyle}>
        <Link href="/docs/cli">
          <Button variant="text" sx={navLinkStyle}>
            <Typography component="span">CLI</Typography>
          </Button>
        </Link>
      </ListItem>
      <ListItem sx={listItemStyle}>
        <Link href="/docs/modules">
          <Button variant="text" sx={navLinkStyle}>
            <Typography component="span">Modules</Typography>
          </Button>
        </Link>
      </ListItem>
      <ListItem sx={listItemStyle}>
        <Link href="/docs/api">
          <Button variant="text" sx={navLinkStyle}>
            <Typography component="span">API</Typography>
          </Button>
        </Link>
      </ListItem>
      <ListItem sx={listItemStyle}>
        <Link href="/docs/websocket">
          <Button variant="text" sx={navLinkStyle}>
            <Typography component="span">WebSocket</Typography>
          </Button>
        </Link>
      </ListItem>
      <ListItem sx={listItemStyle}>
        <Link href="/faq">
          <Button variant="text" sx={navLinkStyle}>
            <Typography component="span">FAQ</Typography>
          </Button>
        </Link>
      </ListItem>

      <ListItem sx={listItemStyle}>
        <Tooltip
          title="Suggest a Feature / Report a Bug"
          sx={{ tooltip: tooltipStyle }}
        >
          <IconButton
            sx={navLinkStyle}
            href="https://github.com/timmo001/system-bridge/issues"
            target="_blank"
          >
            <Icon
              id="github-issues"
              color={theme.palette.text.primary}
              path={mdiFileDocumentMultiple}
              size={1}
            />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem sx={listItemStyle}>
        <Tooltip title="Discussions/Help" sx={{ tooltip: tooltipStyle }}>
          <IconButton
            sx={navLinkStyle}
            href="https://github.com/timmo001/system-bridge/discussions"
            target="_blank"
          >
            <Icon
              id="github-discussions"
              color={theme.palette.text.primary}
              path={mdiForumOutline}
              size={1}
            />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem sx={listItemStyle}>
        <Tooltip
          title="Contribute to the Website/Documentation"
          sx={{ tooltip: tooltipStyle }}
        >
          <IconButton
            sx={navLinkStyle}
            href="https://github.com/timmo001/system-bridge-site"
            target="_blank"
          >
            <Icon
              id="website"
              color={theme.palette.text.primary}
              path={mdiNotebookEditOutline}
              size={1}
            />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem sx={listItemStyle}>
        <Tooltip
          title="Contribute to the Application"
          sx={{ tooltip: tooltipStyle }}
        >
          <IconButton
            sx={navLinkStyle}
            href="https://github.com/timmo001/system-bridge"
            target="_blank"
          >
            <Icon
              id="github"
              color={theme.palette.text.primary}
              path={mdiGithub}
              size={1}
            />
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default HeaderLinks;
