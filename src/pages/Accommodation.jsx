import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Products from '../data/data-card.json';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';

const Accommodation = () => {
  const { id } = useParams();
  const product = Products.find((product) => product.id === id);

  return (
    <div>
      {product ? (
        <div>
          <Header />
          <main>
            <Slideshow slides={product.pictures} alt={product.title} />
            <section className="accommodation">
              <div className="accommodation__container">
                <div className="accommodation__header">
                  <h2 className="accommodation__title">{product.title}</h2>
                  <p className="accommodation__location">{product.location}</p>
                  <Tags>
                    <ul className="accommodation__tags">
                      {product.tags.map((tag, index) => (
                        <li className="accommodation__item" key={index}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </Tags>
                </div>
                <div className="accommodation__additionnal-info">
                  <Rating rating={product.rating} />
                  <Host
                    name={product.host.name}
                    image={product.host.picture}
                    alt={product.host.name}
                  />
                </div>
              </div>
              <div className="accommodation__collapse">
                <Collapse
                  label="Description"
                  className="accommodation__collapse-title"
                >
                  <p className="accommodation__collapse-description">
                    {product.description}
                  </p>
                </Collapse>
                <Collapse
                  label="Équipements"
                  className="accommodation__collapse-title"
                >
                  <ul className="accommodation__collapse-description">
                    {product.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                </Collapse>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      ) : (
        <Navigate to="/error" />
      )}
    </div>
  );
};

export default Accommodation;
