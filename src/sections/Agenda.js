import React from 'react';

import Calendly from '../components/Calendly';
import Section from '../components/Section';

const Agenda = () => (
  <Section.Container id="calendar">
    <Section.Header name="Calendar" icon="📅" Box="calendar" />
    If you want to talk to me, just set here below an appointment. Easy as that!
    ⚡
    <Calendly />
  </Section.Container>
);

export default Agenda;
