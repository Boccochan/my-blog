import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "gatsby";
import { myMedia } from "@src/styles/custom-media";
import { theme } from "@src/styles/color";
import Burger from "@src/components/lib/Burger";

type Props = {
  visible: boolean;
  index: number;
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  background-color: ${theme.colors.grayDark};
  top: 0px;
  width: 100%;
  position: fixed;
  z-index: 3000;

  ${myMedia.lessThan("iphone5")`
    width: 320px;
  `}
`;

const StyledBurger = styled.div`
  position: absolute;
  right: 2%;
  opacity: 0;
  z-index: 1;
  ${myMedia.lessThan("ipadpro")`
    opacity: 1;
    z-index: 100;
  `}
`;

const StyledMainMenu = styled.div`
  height: 8vh;
  position: absolute;
  left: 5%;
  font-size: 24px;
  display: table;
  width: 100%;
`;

const StyeldH4 = styled.div`
  display: table-cell;
  vertical-align: middle;
  font-weight: 600;
  font-size: 1em;
  color: #f5f5f7;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const StyledNavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  bottom: 0;
  width: 30%;
  margin: 0;
  margin-right: 50%;

  ${(props: { visible: boolean }) =>
    props.visible
      ? css`
          transform: translateX(0%);
        `
      : css`
          transform: translateX(100%);
        `}

  ${myMedia.lessThan("medium")`
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 80px;
    background-color: ${theme.colors.grayDark};
    transition: transform 0.5s ease;
    display: flex;
    justify-content: space-around;
    width: 10%;
    flex-direction: column;
    align-items: center;
    width: 180px;
    margin: 0px;
    width: 50%;
  `}
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledNavLi = styled.li`
  opacity: 0;
  list-style: none;
  margin-top: 0.25em;
  ${(props: Props) =>
    props.visible
      ? css`
          animation: ${FadeIn} 0.5s ease forwards ${props.index / 7 + 0.5}s;
        `
      : css`
          opacity: 1;
        `}
`;

const StyledLink = styled(Link)`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  color: #f5f5f7;
  font-weight: bold;
  box-shadow: none;

  ${myMedia.lessThan("surfaceDuo")`
    font-size: 14px;
    height: 160px;
    width: 300px;
  `}
`;

const StyledSearchBox = styled.div`
  right: 0;
  width: 100px;
  min-height: 8vh;
  position: absolute;

  ${myMedia.lessThan("medium")`
    opacity: 0;
  `}
`;

const StyledSearchIcon = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background: ${theme.colors.blue};
  border-radius: 50%;
  transition: all 1s;
  z-index: 4;
  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    margin: auto;
    top: 13px;
    right: 0;
    bottom: 0;
    left: 13px;
    width: 10px;
    height: 2px;
    background: ${theme.colors.white};
    transform: rotate(45deg);
    transition: all 0.5s;
  }

  &::after {
    content: "";
    position: absolute;
    margin: auto;
    top: -2px;
    right: 0px;
    bottom: 0;
    left: -2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.white};
    transition: all 0.5s;
  }
`;

const StyledSearchBar = styled.input`
  position: absolute;
  margin: auto;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0px;
  width: 40px;
  height: 30px;
  outline: none;
  border: none;
  background: ${theme.colors.blue};
  color: white;
  text-shadow: 0 0 10px crimson;
  padding: 10 80px 10 20px;
  border-radius: 30px;
  transition: all 1s;
  opacity: 0;
  z-index: 5;
  font-weight: bolder;
  letter-spacing: 0.1em;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    padding 0 80px 0 20px;
    left: -280px;
    width: 300px;
    height: 30px;
    opacity: 1;
  }

  &:focus ~ ${StyledSearchIcon} {
    background: ${theme.colors.grayLight}; 
    z-index: 7;
    &::before {
      top: 0;
      left: 0;
      width: 20px;
    }
    &::after {
      top: 0;
      left: 0;
      width: 20px;
      height: 2px;
      border: none;
      background: ${theme.colors.white};
      border-radius: 0%;
      transform: rotate(-45deg);
    }
  }
`;

function MenuBar() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const toggleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <StyledNav>
      <StyledMainMenu>
        <StyeldH4>Yasuhiro Lab</StyeldH4>
      </StyledMainMenu>
      <StyledNavLinks visible={visibleMenu}>
        <StyledNavLi index={0} visible={visibleMenu}>
          <StyledLink to="/">Home</StyledLink>
        </StyledNavLi>
        <StyledNavLi index={1} visible={visibleMenu}>
          <StyledLink to="/blog">Blog</StyledLink>
        </StyledNavLi>
        <StyledNavLi index={2} visible={visibleMenu}>
          <StyledLink to="/lab">Lab</StyledLink>
        </StyledNavLi>
        <StyledNavLi index={3} visible={visibleMenu}>
          <StyledLink to="/contact">Contact</StyledLink>
        </StyledNavLi>
      </StyledNavLinks>
      <StyledBurger>
        <Burger color={theme.colors.white} openHandler={toggleMenu} />
      </StyledBurger>
      <StyledSearchBox>
        <StyledSearchBar type="text" placeholder="Search..." />
        <StyledSearchIcon />
      </StyledSearchBox>
    </StyledNav>
  );
}

export default MenuBar;
