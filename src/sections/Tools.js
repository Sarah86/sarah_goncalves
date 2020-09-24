import React from 'react';
import { Image, Text, Flex, Box } from 'rebass';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import ToolsArr from '../data/tools';

const CARD_HEIGHT = '100px';

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
    width: calc(${CARD_HEIGHT});
    height: calc(${CARD_HEIGHT});
    position: relative;
  }
`;

const ProjectImage = styled(Image)`
  height: auto;
  max-height: 80%;
  padding: 0 10px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  ${MEDIA_QUERY_SMALL} {
    height: auto;
    padding: 0 10px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
`;

const Tools = () => {
  const ToolItem = ToolsArr.sort((a, b) => (a.name > b.name ? 1 : -1)).map(
    tool => (
      <Fade bottom delay={2 * 200}>
        <a href={tool.link}>
          <Card>
            <Flex style={{ height: CARD_HEIGHT }}>
              <ImageContainer>
                <ProjectImage src={tool.icon} title={tool.name} />
              </ImageContainer>
            </Flex>
          </Card>
        </a>
      </Fade>
    ),
  );

  return (
    <Section.Container id="tools">
      <Section.Header name="Tools" icon="🛠️" Box="tools" />
      <CardContainer minWidth="90px" minWidthMobile="60px">
        {ToolItem}
      </CardContainer>
    </Section.Container>
  );
};

export default Tools;
