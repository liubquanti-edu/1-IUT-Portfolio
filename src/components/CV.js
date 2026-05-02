import React from 'react';
import './CV.css';
import Section from './UI/Section';
import Container from './UI/Container';
import Heading from './UI/Heading';
import Text from './UI/Text';
import Button from './UI/Button';
import { TbFileTypePdf, TbDownload, TbPrinter, TbExternalLink } from 'react-icons/tb';

function CV() {
  const cvPath = '/assets/docs/Oleh_Liubchenko_CV_IUT.pdf';

  const handleOpenCV = () => {
    window.open(cvPath, '_blank');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Oleh_Liubchenko_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintCV = () => {
    const printWindow = window.open(cvPath, 'print');
    printWindow.addEventListener('load', () => {
      printWindow.print();
    });
  };

  return (
    <Section id="cv" backgroundColor="var(--color-bg-primary)">
      <Container>
        <div className="cv-wrapper">
          {/* Left side - PDF Preview Placeholder */}
          <div className="cv-preview-container">
            <div className="cv-preview-placeholder">
              <div className="cv-icon-wrapper">
                <TbFileTypePdf className="cv-icon" />
              </div>
              <h3 className="cv-placeholder-title">Oleh Liubchenko CV</h3>
              <p className="cv-placeholder-text">Curriculum Vitae en format PDF</p>
              <p className="cv-placeholder-meta">Mis à jour: Janvier 2026</p>
              <button className="cv-preview-button" onClick={handleOpenCV}>
                <TbExternalLink /> Ouvrir dans un nouvel onglet
              </button>
            </div>
          </div>

          {/* Right side - Content and Actions */}
          <div className="cv-content">
            <Heading as="h2" level="2" color="primary">
              Mon CV
            </Heading>
            <Text variant="body" color="secondary">
              Téléchargez mon curriculum vitae pour obtenir un résumé de mon projet professionnel.
            </Text>

            <div className="cv-actions">
              <Button variant="primary" size="md" onClick={handleOpenCV}>
                <TbExternalLink /> Ouvrir le CV
              </Button>
              <Button variant="secondary" size="md" onClick={handleDownloadCV}>
                <TbDownload /> Télécharger
              </Button>
              <Button variant="secondary" size="md" onClick={handlePrintCV}>
                <TbPrinter /> Imprimer
              </Button>
            </div>

            <div className="cv-info">
              <Text variant="caption" color="tertiary">
                Format: PDF
              </Text>
              <Text variant="caption" color="tertiary">
                Mis à jour: Janvier 2026
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default CV;
