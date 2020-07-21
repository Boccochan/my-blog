import React, { useState } from "react";
import media from "styled-media-query";
import styled, { css, keyframes } from "styled-components";

type Props = {
  visible: boolean;
  index: number;
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  height: 60px;
  background-color: #fffdfd;
  border-bottom: 1px solid #e0e0e0;
  top: 0px;
  width: 100%;
  position: fixed;
  z-index: 1000;
`;

const StyledBurger = styled.div`
  position: absolute;
  right: 2%;
`;

const StyledBurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333333;
  margin: 5px;
`;

const StyledBurgerLine1 = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333333;
  margin: 5px;

  ${(props: { visible: boolean }) =>
    props.visible
      ? css`
          transform: rotate(-45deg) translate(-5px, 6px);
        `
      : css``}
`;

const StyledBurgerLine2 = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333333;
  margin: 5px;
  ${(props: { visible: boolean }) =>
    props.visible
      ? css`
          opacity: 0;
        `
      : css``}
`;

const StyledBurgerLine3 = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333333;
  margin: 5px;

  ${(props: { visible: boolean }) =>
    props.visible
      ? css`
          transform: rotate(45deg) translate(-5px, -6px);
        `
      : css``}
`;

const StyledMainMenu = styled.div`
  position: absolute;
  left: 5%;
`;

const StyledNavLinks = styled.ul`
  position: absolute;
  right: 0px;
  height: 92vh;
  top: 8vh;
  background-color: #fffdfd;
  border-left: 1px solid #e0e0e0;
  transition: transform 0.5s ease;
  display: flex;
  justify-content: space-around;
  width: 10%;

  ${(props: { visible: boolean }) =>
    props.visible
      ? css`
          transform: translateX(0%);
        `
      : css`
          transform: translateX(100%);
        `}
  flex-direction: column;
  align-items: center;
  width: 180px;
  margin: 0px;

  ${media.lessThan("medium")`
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
  ${(props: Props) =>
    props.visible
      ? css`
          animation: ${FadeIn} 0.5s ease forwards ${props.index / 7 + 0.5}s;
        `
      : css`
          opacity: 0;
        `}
`;

const StyledLiA = styled.a`
  color: #333333;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 14px;
`;

function MenuBar() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const toggleMenu = () => {
    console.log("hello");
    setVisibleMenu(!visibleMenu);
  };

  return (
    <StyledNav>
      <StyledMainMenu>
        <h4>Yasuhiro blog</h4>
      </StyledMainMenu>
      <StyledNavLinks visible={visibleMenu}>
        <StyledNavLi index={0} visible={visibleMenu}>
          <StyledLiA href="/">Home</StyledLiA>
        </StyledNavLi>
        <StyledNavLi index={1} visible={visibleMenu}>
          <StyledLiA href="#">About</StyledLiA>
        </StyledNavLi>
        <StyledNavLi index={2} visible={visibleMenu}>
          <StyledLiA href="#">Music</StyledLiA>
        </StyledNavLi>
      </StyledNavLinks>
      <StyledBurger onClick={toggleMenu}>
        <StyledBurgerLine1 visible={visibleMenu} />
        <StyledBurgerLine2 visible={visibleMenu} />
        <StyledBurgerLine3 visible={visibleMenu} />
      </StyledBurger>
    </StyledNav>
  );
}

export default MenuBar;
