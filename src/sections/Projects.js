import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  position: relative;

  ${MEDIA_QUERY_SMALL} {
    margin: auto;
    width: calc(${CARD_HEIGHT} / 2);
    height: calc(${CARD_HEIGHT});
    position: relative;
  }
`;

const ProjectImage = styled(Image)`
  height: auto;
  padding: 50px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  ${MEDIA_QUERY_SMALL} {
    height: auto;
    padding: 0 20px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
`;

const ProjectTag = styled.div`
  position: absolute;
  height: ${CARD_HEIGHT};
  width: 100%;
  top: 0; /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    position: absolute;
    height: ${CARD_HEIGHT};
    width: 100%;
    top: 0;
  }
`;

const ProjectCard = styled.div`
  /*filter: opacity(0.3);
  transition: all 0.5s linear;
  overflow:hidden;
  &:hover {
    filter: opacity(1);
  }*/
`;

const Project = ({
  name,
  description,
  projectUrl,
  type,
  publishedDate,
  logo,
}) => (
  <Card p={0}>
    <ProjectCard>
      <Flex style={{ height: CARD_HEIGHT }}>
        <TextContainer>
          <span>
            <Title my={2} pb={1}>
              {name}
            </Title>
          </span>
          <Text width={[1]} style={{ overflow: 'auto' }}>
            {description}
          </Text>
        </TextContainer>

        <ImageContainer>
          <ProjectImage src={logo.image.src} alt={logo.title} />
          <ProjectTag>
            <Flex
              style={{
                float: 'right',
              }}
            >
              {/* <Box mx={1} fontSize={5}>
               <SocialLink
                name="Check repository"
                fontAwesomeIcon="github"
                url={repositoryUrl}
              /> 
            </Box> */}
              <Box mx={1} fontSize={5}>
                {projectUrl && (
                  <SocialLink
                    name="See project"
                    fontAwesomeIcon="globe"
                    url={projectUrl}
                  />
                )}
              </Box>
            </Flex>
            {type && (
              <ImageSubtitle
                bg="primaryLight"
                color="white"
                y="bottom"
                x="right"
                round
              >
                {type}
              </ImageSubtitle>
            )}
            <Hide query={MEDIA_QUERY_SMALL}>
              <ImageSubtitle bg="backgroundDark">{publishedDate}</ImageSubtitle>
            </Hide>
          </ProjectTag>
        </ImageContainer>
      </Flex>
    </ProjectCard>
  </Card>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
  }).isRequired,
};

const Projects = () => (
  <Section.Container id="projects">
    <Section.Header name="Projects" icon="💻" Box="notebook" />
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          contentfulAbout {
            projects {
              id
              name
              description
              projectUrl
              publishedDate(formatString: "YYYY")
              type
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px" minWidthMobile="200px">
          {contentfulAbout.projects.map((p, i) => (
            <div style={{ width: '100%' }}>
              <Fade bottom delay={2 * 200}>
                <Project key={p.id} {...p} />
              </Fade>
            </div>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Projects;
