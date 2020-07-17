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
import media from "styled-media-query";
import styled from "styled-components";

const StyledMenu = styled.div`
  background: black;

  ${media.lessThan("medium")`
    background: red;
  `}

  ${media.between("medium", "large")`
    background: green;
  `}

  ${media.greaterThan("large")`
    background: blue;
  `}
`;

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
      <StyledMenu>Hello World</StyledMenu>
    </React.Fragment>
  );
}

export default MenuBar;
