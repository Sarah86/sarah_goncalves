import React from 'react';

import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import LandingReduced from '../sections/LandingReduced';
import About from '../sections/About';
import Tools from '../sections/Tools';
import Projects from '../sections/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Prices from '../sections/Prices';
import Services from '../sections/Services';
import Agenda from '../sections/Agenda';

const IndexPage = () => (
  <Layout>
    <Header />
    <LandingReduced />
    <Services />
    <Tools />
    <Projects />
    <About />
    <Agenda />
    <Footer />
  </Layout>
);

export default IndexPage;
