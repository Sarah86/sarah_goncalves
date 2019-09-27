import React from 'react';
import { Image, Text, Flex, Box } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import CSS from '../images/css.png';
import FbBusiness from '../images/fb-businessmanager.jpg';
import Github from '../images/Github.png';
import GoogleAds from '../images/googleads.png';
import GoogleAdSense from '../images/googleadsense.png';
import GoogleAnalytics from '../images/googleanalytics.png';
import Gulp from '../images/Gulp.png';
import HTML from '../images/HTML.png';
import Javascript from '../images/javascript.png';
import Jquery from '../images/jquery.png';
import Mailchimp from '../images/mailchimp.jpg';
import Netlify from '../images/netlify.png';
import NetlifyCms from '../images/netlifycms.png';
import Npm from '../images/npm.png';
import Php from '../images/php.png';
import ReactLogo from '../images/react.webp';
import Sass from '../images/sass.png';
import SendInBluse from '../images/sendinblue.png';
import TagManager from '../images/tagmanager.png';
import Vscode from '../images/vscode.png';
import Wordpress from '../images/wordpress.png';
import Yarn from '../images/yarn.png';

const CARD_HEIGHT = '150px';

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
  max-height: 90%;
  padding: 0 20px;
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

const ProjectCard = styled.div`
  /*filter: opacity(0.3);
  transition: all 0.5s linear;
  overflow:hidden;
  &:hover {
    filter: opacity(1);
  }*/
`;

const Tool = ({ src, title }) => (
  <Card>
    <ProjectCard>
      <Flex style={{ height: CARD_HEIGHT }}>
        <ImageContainer>
          <ProjectImage src={src} title={title} />
        </ImageContainer>
      </Flex>
    </ProjectCard>
  </Card>
);

const Tools = () => (
  <Section.Container id="projects">
    <Section.Header name="Tools" icon="🛠️" Box="tools" />
    <CardContainer minWidth="150px" minWidthMobile="100px">
      <Fade bottom delay={1 * 200}>
        <Tool src={HTML} title="HTML5" />
      </Fade>
      <Fade bottom delay={2 * 200}>
        <Tool src={CSS} title="CSS3" />
      </Fade>
      <Fade bottom delay={3 * 200}>
        <Tool src={Sass} title="Sass" />
      </Fade>
      <Fade bottom delay={4 * 200}>
        <Tool src={Javascript} title="Javascript" />
      </Fade>
      <Fade bottom delay={5 * 200}>
        <Tool src={Jquery} title="jQuery" />
      </Fade>
      <Fade bottom delay={5 * 200}>
        <Tool src={ReactLogo} title="React.js" />
      </Fade>
      <Fade bottom delay={6 * 200}>
        <Tool src={Github} title="Github" />
      </Fade>
      <Fade bottom delay={7 * 200}>
        <Tool src={Npm} title="NPM" />
      </Fade>
      <Fade bottom delay={8 * 200}>
        <Tool src={Yarn} title="Yarn" />
      </Fade>
      <Fade bottom delay={9 * 200}>
        <Tool src={Vscode} title="Virtual Studio Code" />
      </Fade>
      <Fade bottom delay={10 * 200}>
        <Tool src={Gulp} title="Gulp" />
      </Fade>
      <Fade bottom delay={10 * 200}>
        <Tool src={Php} title="Php" />
      </Fade>
      <Fade bottom delay={10 * 200}>
        <Tool src={Wordpress} title="Wordpress" />
      </Fade>
      <Fade bottom delay={10 * 200}>
        <Tool src={Netlify} title="Netlify" />
      </Fade>
      <Fade bottom delay={10 * 200}>
        <Tool src={NetlifyCms} title="NetlifyCMS" />
      </Fade>

      <Fade bottom delay={10 * 200}>
        <Tool src={TagManager} title="Google Tag Manager" />
      </Fade>
      <Fade bottom delay={10 * 200}>
        <Tool src={GoogleAnalytics} title="Google Analytics" />
      </Fade>
      <Fade bottom delay={10 * 200}>
        <Tool src={GoogleAdSense} title="Google Adsense" />
      </Fade>
      <Fade bottom delay={10 * 200}>
        <Tool src={GoogleAds} title="Google Ads" />
      </Fade>
      <Fade bottom delay={10 * 200}>
        <Tool src={FbBusiness} title="Facebook Business Manager" />
      </Fade>
      <Fade bottom delay={10 * 200}>
        <Tool src={SendInBluse} title="SendInBlue" />
      </Fade>
      <Fade bottom delay={10 * 200}>
        <Tool src={Mailchimp} title="Mailchimp" />
      </Fade>
    </CardContainer>
  </Section.Container>
);

export default Tools;
