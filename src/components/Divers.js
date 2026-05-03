import React from 'react';
import './Divers.css';
import { Container, Heading, Section } from './UI';
import Banner from './UI/Banner';
import { TbMoodSmile, TbStar } from 'react-icons/tb';

const Divers = () => {
  return (
    <Section padding="lg" id="divers">
      <Container size="lg">
        <div className="divers-wrapper">
          <div className="divers-image">
            <div className="divers-image-wrapper">
              <img
                src="assets/images/cars.png"
                alt="Divers"
                className="divers-img"
              />
            </div>
            <div className="divers-grid-pattern"></div>
          </div>

          <div className="divers-content">
            <Heading level={2} color="primary">
              Divers
            </Heading>

            <div className="divers-banners">
              <Banner
                logo={<TbMoodSmile />}
                title="Passe-temps"
                subtitle="Loisirs, activités créatives"
              />

              <Banner
                logo={<TbStar />}
                title="Intérêts"
                subtitle="Sujets d'étude et passions"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Divers;
