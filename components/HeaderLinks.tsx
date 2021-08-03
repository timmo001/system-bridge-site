import React, { ReactElement } from "react";
import Link from "next/link";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// eslint-disable-next-line import/no-named-as-default
import Icon from "@mdi/react";
import { mdiForumOutline, mdiGithub, mdiNotebookEditOutline } from "@mdi/js";

import useStyles from "assets/jss/components/headerLinks";

function HeaderLinks(): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <List className={classes.list}>
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

      <ListItem className={clsx(classes.listItem, classes.divider)} />
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Suggest a Feature / Report a Bug"
          classes={{ tooltip: classes.tooltip }}>
          <Button
            variant="text"
            className={classes.navLink}
            href="https://github.com/timmo001/system-bridge/issues"
            target="_blank">
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
          title="Discussions/Help"
          classes={{ tooltip: classes.tooltip }}>
          <Button
            variant="text"
            className={classes.navLink}
            href="https://github.com/timmo001/system-bridge/discussions"
            target="_blank">
            <Icon
              color={theme.palette.text.primary}
              path={mdiForumOutline}
              size={1}
            />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip title="GitHub" classes={{ tooltip: classes.tooltip }}>
          <Button
            variant="text"
            className={classes.navLink}
            href="https://github.com/timmo001/system-bridge"
            target="_blank">
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
