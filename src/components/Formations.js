import React from 'react';
import './Formations.css';
import { Container, Heading, Section } from './UI';
import Banner from './UI/Banner';

const Formations = () => {
  return (
    <Section padding="lg" id="formations">
      <Container size="lg">
        <div className="formations-wrapper">
          <div className="formations-content">
            <Heading level={2} color="primary">
              Mes Formations
            </Heading>

            <div className="formations-buttons">
              <Banner
                logo="assets/images/facility/iut.png"
                title="IUT Clermont Auvergne"
                subtitle="BUT Réseaux et Télécommunications"
              />

              <Banner
                logo="assets/images/facility/pppc.png"
                title="CPP de Poltava"
                subtitle="Développement de logiciels"
              />
            </div>
          </div>

          <div className="formations-image">
            <div className="formations-image-wrapper">
              <img
                src="assets/images/hat.png"
                alt="Mes Formations"
                className="formations-img"
              />
            </div>
            <div className="formations-grid-pattern"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Formations;