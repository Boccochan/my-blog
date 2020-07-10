import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
} from "@material-ui/core";

// import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerLogo: {
      color: "inherit",
      marginRight: 20,
    },
    headerTitleStyle: {
      flexGrow: 1,
      color: "inherit",
    },
    menuButton: {
      color: "inherit",
      padding: "8px",
    },
    avatar: {
      margin: "8px",
    },
    drawerList: {
      width: 200,
      height: "100%",
    },
  })
);

function MenuBar() {
  const [isOpen, setOpen] = useState(false);

  const classes = useStyles();

  const toggleDrawerNav = () => {
    setOpen(!isOpen);
  };

  const closeDrawerNav = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* 上部のバー */}
      <AppBar
        elevation={0}
        position="static"
        aria-label="Global Navi"
        color="primary"
      >
        <Toolbar>
          <IconButton
            onClick={toggleDrawerNav}
            aria-label="SideMenu"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.headerLogo} variant="subtitle1">
            YesYas!
          </Typography>
          <Typography className={classes.headerTitleStyle} variant="subtitle1">
            Welcome to Yasuhiro's home:)
          </Typography>
        </Toolbar>
      </AppBar>
      {/* サイドメニュー */}
      <Drawer open={isOpen} onClose={closeDrawerNav}>
        <div className={classes.drawerList}>
          <List>
            <ListItem button onClick={closeDrawerNav}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem button onClick={closeDrawerNav}>
              <ListItemIcon>{<InfoIcon />}</ListItemIcon>
              <ListItemText primary={"Info"} />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default MenuBar;
