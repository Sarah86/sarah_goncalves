import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home" minHeight="100vh">
    <StaticQuery
      query={graphql`
        query SiteTitleReducedQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={data => {
        const { name, socialLinks, roles } = data.contentfulAbout;

        return (
          <Fragment>
            <Heading
              textAlign="center"
              as="h1"
              color="primary"
              fontSize={[5, 6, 8]}
              mb={[3, 4, 5]}
            >
              {`Hello, I'm ${name}!`}
            </Heading>

            <Heading
              as="h2"
              color="primary"
              fontSize={[4, 5, 6]}
              mb={[3, 5]}
              textAlign="center"
              style={centerHorizontally}
            >
              <Text width={'100%'}>Let's do something beautiful together!</Text>
            </Heading>

            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
