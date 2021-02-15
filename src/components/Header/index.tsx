import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Icon, Tab } from './style';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <Container>
       <Icon to="/">
        MADFLIX
      </Icon>
      <Tab to="/movies" current={pathname}>
        Movies
      </Tab>
      <Tab to="/tv" current={pathname}>
        TV
      </Tab>
      <Tab to="/search" current={pathname}>
        Search
      </Tab>
    </Container>
  )
};
