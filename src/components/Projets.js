import React from 'react';
import './Projets.css';
import { Container, Heading, Section } from './UI';
import Banner from './UI/Banner';
import { TbCode, TbAffiliate, TbUxCircle } from 'react-icons/tb';

const Projets = () => {
  return (
    <Section padding="lg" id="projets">
      <Container size="lg">
        <div className="projets-wrapper">
          <div className="projets-content">
            <Heading level={2} color="primary">
              Mes Projets
            </Heading>

            <div className="projets-banners">
              <Banner
                logo={<TbUxCircle />}
                title="UI/UX"
                subtitle="Designs d'interface construits"
              />

              <Banner
                logo={<TbAffiliate />}
                title="Réseaux"
                subtitle="Systèmes de communication réalisés"
              />

              <Banner
                logo={<TbCode />}
                title="Code"
                subtitle="Logiciels développés"
              />
            </div>
          </div>

          <div className="projets-image">
            <div className="projets-image-wrapper">
              <img
                src="assets/images/phone.png"
                alt="Mes Projets"
                className="projets-img"
              />
            </div>
            <div className="projets-grid-pattern"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projets;
