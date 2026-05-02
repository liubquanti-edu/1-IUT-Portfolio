import React from 'react';
import './Hero.css';
import { Button, Heading, Text, Section, Container } from './UI';
import { TbCode, TbAffiliate, TbUxCircle } from 'react-icons/tb';

const Hero = () => {
  return (
    <Section padding="none" className="hero-section">
      <Container size="lg" className="hero-container">
        <div className="hero-content">
          <Text variant="subtitle" color="tertiary" size="md">
            La polyvalence, c'est une attitude
          </Text>
          <Heading level={1} color="primary">
            Oleh Liubchenko
          </Heading>
          <Text variant="body" color="secondary" size="md">
            Étudiant en 1ère année de BUT Réseaux et Télécommunications.
          </Text>
          <div className="hero-buttons">
            <Button variant="primary" size="md">
              Me contacter
            </Button>
            <Button variant="secondary" size="md">
              Voir mes projets
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-wrapper">
            <img
              src="assets/images/avatar-main.png"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="geometric-elements">
            <div className="shape shape-1">
                <TbUxCircle size={24} className='shape-icon'/>
            </div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3">
                <TbCode size={24} className='shape-icon'/>
            </div>
            <div className="shape shape-4">
                <TbAffiliate size={24} className='shape-icon'/>
            </div>
            <div className="shape shape-5"></div>
            <div className="grid-pattern"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
