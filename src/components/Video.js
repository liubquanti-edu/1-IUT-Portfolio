import React from 'react';
import './Video.css';
import { Section, Container, Heading, Text } from './UI';

function Video() {
  return (
    <Section padding="lg" id="video">
      <Container size="lg">
        <div className="video-wrapper">
          {/* Left side - Content */}
          <div className="video-content">
            <Heading as="h2" level="2" color="primary">
              Présentation vidéo
            </Heading>
            <Text variant="body" color="secondary">
              Découvrez qui je suis à travers cette courte présentation vidéo. Je vous parle de mes passions, de mes objectifs et de ce qui me pousse à apprendre et à me développer continuellement dans le domaine de l'informatique. Cette vidéo vous donnera une meilleure compréhension de ma personnalité et de ma vision professionnelle.
            </Text>
          </div>

          {/* Right side - Video Player */}
          <div className="video-player-container">
            <video
              className="video-player"
              controls
              poster="assets/images/avatar-main.png"
            >
              <source src="assets/videos/PPP.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéo HTML5.
            </video>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Video;
