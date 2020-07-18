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
  margin-bottom: 30px;

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

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: #fffdfd;
  border: 1px solid #e0e0e0;
`;

const StyledBurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333333;
  margin: 5px;
`;

type Props = {
  translateX: string;
};

const StyledNavLinks = styled.ul`
  position: absolute;
  right: 0px;
  height: 92vh;
  top: 8vh;
  background-color: #5d4954;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  transform: ${(props: Props) => props.translateX};
  transition: transform 0.5s ease-in;
`;

const StyledNavLi = styled.li`
  opacity: 0;
`;

function MenuBar() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    console.log("hello");
  };

  return (
    <StyledNav>
      <StyledNavLinks translateX="translateX(100%)">
        <StyledNavLi>
          <a href="#">Home</a>
        </StyledNavLi>
        <StyledNavLi>
          <a href="#">About</a>
        </StyledNavLi>
        <StyledNavLi>
          <a href="#">Work</a>
        </StyledNavLi>
        <StyledNavLi>
          <a href="#">Project5s</a>
        </StyledNavLi>
      </StyledNavLinks>
      <div onClick={handleClick}>
        <StyledBurgerLine />
        <StyledBurgerLine />
        <StyledBurgerLine />
      </div>

      <div class="logo">
        <h4>Jojo town</h4>
      </div>
    </StyledNav>
  );
}

export default MenuBar;
