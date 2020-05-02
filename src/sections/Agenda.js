import React from 'react';

import Section from '../components/Section';

const Agenda = () => (
  <Section.Container id="contact">
    <Section.Header name="Contact" icon="📅" Box="Contact" />
    <p>
      If you want to talk to me,{' '}
      <a
        href="https://sarahrgoncalves.typeform.com/to/NGgQ0D"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inlineBlock' }}
      >
        go ahead!
      </a>
    </p>
  </Section.Container>
);

export default Agenda;
