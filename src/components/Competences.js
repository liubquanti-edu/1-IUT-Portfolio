import React, { useState } from 'react';
import './Competences.css';
import { Container, Heading, Section } from './UI';
import Banner from './UI/Banner';
import { TbUsers, TbCode, TbLanguage, TbSettingsCog } from 'react-icons/tb';
import BottomSheet from './UI/BottomSheet';
import { TbDownload } from 'react-icons/tb';

const Competences = () => {
  const [openSheet, setOpenSheet] = useState(null);

  const languages = [
    { id: 'uk', name: 'Ukrainien', note: 'Langue maternelle', level: 6 },
    { id: 'ru', name: 'Russe', note: 'Deuxième langue', level: 6 },
    { id: 'fr', name: 'Français', note: 'B2 — Intermédiaire supérieur', level: 4 },
    { id: 'en', name: 'Anglais', note: 'B2 — Intermédiaire supérieur', level: 4 },
    { id: 'de', name: 'Allemand', note: 'A1 — Débutant', level: 1 },
  ];

  const humaines = [
    { id: 1, title: 'Polyvalence', description: 'Je m\'efforce d\'être polyvalent afin de mieux comprendre mon domaine.' },
    { id: 2, title: 'Adaptabilité', description: 'En m\'organisant, je m\'adapte simplement à différentes conditions.' },
    { id: 3, title: 'Organisation', description: 'J\'organise clairement ma vie et je suis toujours là où je dois être.' },
    { id: 4, title: 'Patience', description: 'Je peaufine mon travail jusqu\'à ce qu\'il réponde aux exigences.' },
  ];

  const diplomas = [
    {
      id: 1,
      image: 'assets/images/education/dup.png',
      description: 'Diplôme universitaire passerelle B2 en français.',
      downloadUrl: 'assets/docs/DUP_B2.pdf',
      downloadName: 'DUP_B2.pdf',
    },
    {
      id: 2,
      image: 'assets/images/education/eng.png',
      description: 'Certificat de compétence en anglais B2.',
      downloadUrl: 'assets/docs/English_B2.pdf',
      downloadName: 'English_B2.pdf',
    },
  ];

  const openLanguages = () => setOpenSheet('langues');
  const openHumaines = () => setOpenSheet('humaines');
  const closeSheet = () => setOpenSheet(null);

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
                onClick={openLanguages}
              />
              <Banner
                logo={<TbUsers />}
                title="Humaines"
                subtitle="Communication, Travail en équipe"
                onClick={openHumaines}
              />
            </div>
          </div>
        </div>
      </Container>
      {openSheet === 'langues' && (
        <BottomSheet isOpen={true} onClose={closeSheet} title="Langues">
          <div className="languages-and-diplomas">
            <div className="languages-block">
              <div className="languages-row">
                {languages.map((lang) => (
                  <div key={lang.id} className="language-item">
                    <div className="language-meta">
                      <div className="language-name">{lang.name}</div>
                      <div className="language-note">{lang.note}</div>
                    </div>

                    <div className="language-level">
                      {lang.level === 6 ? (
                        <div className={`level-block level-block--active level-block--full`} />
                      ) : (
                        Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className={`level-block ${i < lang.level ? 'level-block--active' : ''}`}
                          />
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="competences-diplomas-section">
              <h3 className="formation-section-heading">Diplômes</h3>
              <div className="diplomas-scroll">
                {diplomas.map((d) => (
                  <div key={d.id} className="diploma-card">
                    <div className="diploma-image">
                      <img src={d.image} alt={d.description} />
                    </div>
                    <p className="diploma-description">{d.description}</p>
                    <a
                      href={d.downloadUrl}
                      download={d.downloadName}
                      className="diploma-download-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbDownload />
                      Télécharger
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BottomSheet>
      )}
      {openSheet === 'humaines' && (
        <BottomSheet isOpen={true} onClose={closeSheet} title="Compétences Humaines">
          <div className="humaines-block">
            {humaines.map((skill) => (
              <div key={skill.id} className="humaine-item">
                <h3 className="humaine-title">{skill.title}</h3>
                <p className="humaine-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </BottomSheet>
      )}
    </Section>
  );
};

export default Competences;
