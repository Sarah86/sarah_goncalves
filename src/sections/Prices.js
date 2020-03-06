import React from 'react';

import Calendly from '../components/Calendly';
import Section from '../components/Section';
import { Link } from 'gatsby';

const Prices = () => (
  <Section.Container id="Prices">
    <Section.Header name="Prices" icon="📅" Box="Prices" />
    Para os brasileiros, condições especiais de preços e parcelamentos
    <Link to="/precos">Veja a tabela de preços</Link>
  </Section.Container>
);

export default Prices;
