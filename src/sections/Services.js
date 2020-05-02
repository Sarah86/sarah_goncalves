import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import markdownRenderer from '../components/MarkdownRenderer';

const WorkScope = [
  {
    title: 'Websites',
    description:
      'Websites in Wordpress, HTML, ReactJs and e-commerces (OpenCart, Shopify, WooCommerce...)',
  },
  {
    title: 'Web Scraping',
    description:
      'Web scraping is the process of extracting data from websites. Some data that is available on the web is presented in a format that makes it easier to collect and use it, for example in the form of downloadable comma-separated values (CSV) datasets that can then be imported in a spreadsheet or loaded into a data analysis script. Often however, even though it is publicly available, data is not readily available for reuse. For example it can be contained in a PDF, or a table on a website, or spread across multiple web pages.',
  },
  {
    title: 'Data Mining and Data Analysis',
    description:
      'Data analysis is a process of inspecting, cleansing, transforming and modeling data with the goal of discovering useful information, informing conclusion and supporting decision-making.',
  },
  {
    title: 'Google Ads',
    description:
      'Online ads to reach customers that are interested in the products and services you offer. You don’t pay for the ads if they don’t click on them.',
  },
  {
    title: 'Facebook and Instagram Ads',
    description:
      'Facebook ads are purchased on an auction basis, where advertisers are charged based on either clicks, impressions or actions. There are plenty of different ad formats offered.',
  },
];

const Services = () => (
  <Section.Container id="services">
    <Section.Header name="Services" icon="🧟" label="person" />
    <Flex justifyContent="left" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 4 / 6]}>
        <Fade bottom>
          {WorkScope.map(work => (
            <>
              <h2>{work.title}</h2>
              <p>{work.description}</p>
            </>
          ))}
        </Fade>
      </Box>
    </Flex>
  </Section.Container>
);

export default Services;
