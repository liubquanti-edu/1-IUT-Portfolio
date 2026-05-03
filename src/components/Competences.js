import React from 'react';
import './Competences.css';
import { Container, Heading, Section } from './UI';
import Banner from './UI/Banner';
import { TbUsers, TbCode, TbLanguage, TbSettingsCog } from 'react-icons/tb';

const Competences = () => {
  return (
    <Section padding="lg" id="competences">
      <Container size="lg">
        <div className="competences-wrapper">
          <div className="competences-image">
            <div className="competences-image-wrapper">
              <img
                src="assets/images/hardware.png"
                alt="Mes Compétences"
                className="competences-img"
              />
            </div>
            <div className="competences-grid-pattern"></div>
          </div>

          <div className="competences-content">
            <Heading level={2} color="primary">
              Mes Compétences
            </Heading>

            <div className="competences-banners">
              <Banner
                logo={<TbSettingsCog />}
                title="Techniques"
                subtitle="Développement, Programmation"
              />
              <Banner
                logo={<TbLanguage />}
                title="Langues"
                subtitle="Français, Anglais"
              />
              <Banner
                logo={<TbUsers />}
                title="Humaines"
                subtitle="Communication, Travail en équipe"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Competences;
