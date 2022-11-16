import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BannerMobile from '../assets/img_banner_mobile.png';
import BannerDesktop from '../assets/img_banner_desktop.png';

const bannerTitle = 'Chez vous, partout et ailleurs';
const bannerAlt = 'Paysage de falaises au bord de la mer';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        mobile={BannerMobile}
        desktop={BannerDesktop}
        alt={bannerAlt}
        title={bannerTitle}
      />
      <Footer />
    </div>
  );
};

export default Home;
