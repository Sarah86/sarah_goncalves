import React from 'react';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import RouteLink from './RouteLink';
import Logo from './Logo/Sarah.jpg';
import { Link } from 'gatsby';

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  background: ${props => props.theme.colors.primaryDark};
  position: relative;
  width: 100%;
  height: 100% !important;
  min-height: 5em;
  span {
    font-size: 0.7em;
    display: flex;
    margin: 2em 0.5em;
  }
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
    span {
      font-size: 0.7em;
      display: flex;
      margin: 2em 0.5em;
    }
  }
`;

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );

const ToHome = () => (
  <Link to="/" style={{ color: 'white' }}>
    <Image src={Logo} width="50px" alt="Portfolio Logo" />
  </Link>
);

const Header = () => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <SectionLinks>
          {({ allLinks }) => {
            const { links } = formatLinks(allLinks);

            const navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
              >
                {name}
              </RouteLink>
            ));

            return (
              <>
                <ToHome />
                <Flex mr={[0, 3, 5]}>{navLinks}</Flex>
              </>
            );
          }}
        </SectionLinks>
      </Flex>
    </Fade>
  </HeaderContainer>
);

export default Header;
