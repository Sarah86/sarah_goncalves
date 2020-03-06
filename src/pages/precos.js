import React from 'react';

import Layout from '../components/Layout';
import LandingReduced from '../sections/LandingReduced';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PriceTable from '../sections/PriceTable';

const PricePage = () => (
  <Layout>
    <Header />
    <PriceTable />
    <Footer />
  </Layout>
);

export default PricePage;
