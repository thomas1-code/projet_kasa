import React from 'react';
import { useParams } from 'react-router-dom';
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
  const {
    pictures,
    title,
    location,
    tags,
    rating,
    host,
    description,
    equipments,
  } = product;
  return (
    <div>
      <Header />
      <main>
        <Slideshow slides={pictures} alt={title} />
        <section className="accommodation">
          <div className="accommodation__container">
            <div className="accommodation__header">
              <h2 className="accommodation__title">{title}</h2>
              <p className="accommodation__location">{location}</p>
              <Tags>
                <ul className="accommodation__tags">
                  {tags.map((tag, index) => (
                    <li className="accommodation__item" key={index}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </Tags>
            </div>
            <div className="accommodation__additionnal-info">
              <Rating rating={rating} />
              <Host name={host.name} image={host.picture} alt={host.name} />
            </div>
          </div>
          <div className="accommodation__collapse">
            <Collapse
              label="Description"
              className="accommodation__collapse-title"
            >
              <p className="accommodation__collapse-description">
                {description}
              </p>
            </Collapse>
            <Collapse
              label="Équipements"
              className="accommodation__collapse-title"
            >
              <ul className="accommodation__collapse-description">
                {equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Accommodation;
