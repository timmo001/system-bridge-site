import React, { ReactElement, useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  PropTypes,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

type ColorExpanded = PropTypes.Color | "transparent";

interface ChangeColorOnScroll {
  color: ColorExpanded;
  height: string | number;
}

interface HeaderProps {
  absolute?: string;
  changeColorOnScroll?: ChangeColorOnScroll;
  color?: ColorExpanded;
  fixed?: boolean;
  rightLinks?: ReactElement;
}

function Header(props: HeaderProps): ReactElement {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { color, rightLinks } = props;

  const theme = useTheme();
  return (
    <AppBar color={color}>
      <Toolbar
        sx={{
          minHeight: 50,
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <Link href="/">
          <Button>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                lineHeight: "30px",
                borderRadius: 3,
                marginTop: 0,
                textTransform: "none",
                userSelect: "none",
                color: theme.palette.primary.contrastText,
                padding: "8px 16px",
                letterSpacing: "unset",
                "&:hover,&:focus": {
                  background: "transparent",
                },
              }}
            >
              System Bridge
            </Typography>
          </Button>
        </Link>
        <Hidden mdDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            size="large"
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {rightLinks}
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

export default Header;
