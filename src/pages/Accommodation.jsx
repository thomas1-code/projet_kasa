import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../data/data-card.json';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';

const Accommodation = () => {
  const { id } = useParams();
  const product = Products.find((product) => product.id === id);
  const { pictures, title } = product;
  return (
    <div>
      <Header />
      <Slideshow slides={pictures} alt={title} />
      <Footer />
    </div>
  );
};

export default Accommodation;
