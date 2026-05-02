import React from 'react';
import './Hero.css';
import { Button, Heading, Text, Section, Container } from './UI';

const Hero = () => {
  return (
    <Section padding="none" className="hero-section">
      <Container size="lg" className="hero-container">
        <div className="hero-content">
          <Text variant="subtitle" color="tertiary" size="md">
            Oleh Liubchenko
          </Text>
          <Heading level={1} color="primary">
            La polyvalence,<br />c'est une attitude
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
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="grid-pattern"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
