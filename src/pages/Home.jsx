import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import BannerMobile from '../assets/img_banner_mobile.png';
import BannerTablet from '../assets/img_banner_desktop.png';
import Card from '../components/Card';
import Products from '../data/data-card.json';

const bannerTitle = 'Chez vous, partout et ailleurs';
const bannerAlt = 'Paysage de falaises au bord de la mer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner
          className="banner"
          mobile={BannerMobile}
          tablet={BannerTablet}
          alt={bannerAlt}
          title={bannerTitle}
        />
        <section className="container-card">
          {Products.map((product) => {
            return (
              <article key={product.id}>
                <Link to={`/accommodation/${product.id}`}>
                  <Card picture={product.cover} title={product.title} />
                </Link>
              </article>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
