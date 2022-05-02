import React, { ReactElement } from "react";
import Link from "next/link";
import { List, ListItem, Button, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import clsx from "clsx";
// eslint-disable-next-line import/no-named-as-default
import Icon from "@mdi/react";
import {
  mdiFileDocumentMultiple,
  mdiForumOutline,
  mdiGithub,
  mdiNotebookEditOutline,
} from "@mdi/js";

import useStyles from "assets/jss/components/headerLinks";

function HeaderLinks(): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/docs/install">
          <Button variant="text" className={classes.navLink}>
            <span className={classes.listItemText}>Install</span>
          </Button>
        </Link>
        <Link href="/docs/running">
          <Button variant="text" className={classes.navLink}>
            <span className={classes.listItemText}>Running</span>
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/docs/cli">
          <Button variant="text" className={classes.navLink}>
            <span className={classes.listItemText}>CLI</span>
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/docs/modules">
          <Button variant="text" className={classes.navLink}>
            <span className={classes.listItemText}>Modules</span>
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/docs/api">
          <Button variant="text" className={classes.navLink}>
            <span className={classes.listItemText}>API</span>
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/docs/websocket">
          <Button variant="text" className={classes.navLink}>
            <span className={classes.listItemText}>WebSocket</span>
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/faq">
          <Button variant="text" className={classes.navLink}>
            <span className={classes.listItemText}>FAQ</span>
          </Button>
        </Link>
      </ListItem>

      <ListItem className={clsx(classes.listItem, classes.divider)} />
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Suggest a Feature / Report a Bug"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            variant="text"
            className={classes.navLink}
            href="https://github.com/timmo001/system-bridge/issues"
            target="_blank"
          >
            <Icon
              color={theme.palette.text.primary}
              path={mdiFileDocumentMultiple}
              size={1}
            />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Discussions/Help"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            variant="text"
            className={classes.navLink}
            href="https://github.com/timmo001/system-bridge/discussions"
            target="_blank"
          >
            <Icon
              color={theme.palette.text.primary}
              path={mdiForumOutline}
              size={1}
            />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Contribute to the Website/Documentation"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            variant="text"
            className={classes.navLink}
            href="https://github.com/timmo001/system-bridge-site"
            target="_blank"
          >
            <Icon
              color={theme.palette.text.primary}
              path={mdiNotebookEditOutline}
              size={1}
            />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Contribute to the Application"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            variant="text"
            className={classes.navLink}
            href="https://github.com/timmo001/system-bridge"
            target="_blank"
          >
            <Icon
              color={theme.palette.text.primary}
              path={mdiGithub}
              size={1}
            />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default HeaderLinks;
