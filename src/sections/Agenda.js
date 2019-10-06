import React from 'react';

import Calendly from '../components/Calendly';
import Section from '../components/Section';

const Agenda = () => (
  <Section.Container id="Schedule a Chat">
    <Section.Header name="Schedule a Chat" icon="📅" Box="Schedule a Chat" />
    If you want to talk to me, just set here below an appointment. Easy as that!
    ⚡
    <Calendly />
  </Section.Container>
);

export default Agenda;
