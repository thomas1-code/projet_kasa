import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import ImageMobile from '../assets/gustavo_alves.png';
import ImageDesktop from '../assets/kalen_emsley.png';
import Arrow from '../assets/arrow.png';

const imageAlt = 'Paysage de montagnes enneigés';
const symbolAlt = "Symbole d'un chevron";

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner
          className="banner banner--about"
          mobile={ImageMobile}
          desktop={ImageDesktop}
          alt={imageAlt}
        />
        <section className="about">
          <Collapse label="Fiabilité" symbol={Arrow} alt={symbolAlt}>
            <p className="about__description">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </Collapse>
          <Collapse label="Respect" symbol={Arrow} alt={symbolAlt}>
            <p className="about__description">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Collapse>
          <Collapse label="Service" symbol={Arrow} alt={symbolAlt}>
            <p className="about__description">
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </Collapse>
          <Collapse label="Sécurité" symbol={Arrow} alt={symbolAlt}>
            <p className="about__description">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Collapse>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
