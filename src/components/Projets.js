import React, { useState } from 'react';
import './Projets.css';
import { Container, Heading, Section } from './UI';
import Banner from './UI/Banner';
import {
  TbCode,
  TbAffiliate,
  TbUxCircle,
  TbDeviceDesktop,
  TbDatabase,
  TbCloud,
  TbNetwork,
  TbBolt,
  TbShieldCheck,
  TbPalette,
  TbLayout,
} from 'react-icons/tb';
import BottomSheet from './UI/BottomSheet';

const Projets = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [lastCategory, setLastCategory] = useState(null);

  const projectCategories = [
    {
      id: 'uiux',
      title: 'UI/UX',
      subtitle: 'Designs d\'interface construits',
      icon: <TbUxCircle />,
      projects: [
        {
          id: 'uiux-1',
          title: 'White Design',
          summary: 'Interface d\'administration sobre pour un service SaaS.',
          image: 'assets/images/phone.png',
          tags: [
            { id: 'ui', label: 'UI', icon: <TbPalette /> },
            { id: 'ux', label: 'UX', icon: <TbLayout /> },
            { id: 'web', label: 'Web', icon: <TbDeviceDesktop /> },
          ],
          context: 'Créer une interface claire et rapide pour la gestion des utilisateurs.',
          objective: 'Simplifier la navigation et réduire le temps d\'exécution des tâches.',
          work: 'Wireframes, prototypes, design system, tests utilisateurs.',
          result: 'Interface livrée avec 40% de clics en moins pour les actions clés.',
        },
        {
          id: 'uiux-2',
          title: 'Application Mobile Étudiants',
          summary: 'Expérience mobile orientée planning et suivi pédagogique.',
          image: 'assets/images/hardware.png',
          tags: [
            { id: 'mobile', label: 'Mobile', icon: <TbDeviceDesktop /> },
            { id: 'ux', label: 'UX', icon: <TbLayout /> },
          ],
          context: 'Concevoir une app simple pour suivre cours et devoirs.',
          objective: 'Réduire la friction et améliorer l\'engagement étudiant.',
          work: 'Personas, parcours, maquettes hi-fi, itérations.',
          result: 'Prototype validé avec 92% de satisfaction.',
        },
      ],
    },
    {
      id: 'reseaux',
      title: 'Réseaux',
      subtitle: 'Systèmes de communication réalisés',
      icon: <TbAffiliate />,
      projects: [
        {
          id: 'net-1',
          title: 'Réseau LAN Sécurisé',
          summary: 'Architecture VLAN pour une PME multi-sites.',
          image: 'assets/images/hat.png',
          tags: [
            { id: 'vlan', label: 'VLAN', icon: <TbNetwork /> },
            { id: 'sec', label: 'Sécurité', icon: <TbShieldCheck /> },
            { id: 'perf', label: 'Perf', icon: <TbBolt /> },
          ],
          context: 'Segmenter le réseau pour améliorer sécurité et performance.',
          objective: 'Isoler les flux et réduire la latence interne.',
          work: 'Plan d\'adressage, configuration switches, documentation.',
          result: 'Latence réduite de 25% et surveillance simplifiée.',
        },
        {
          id: 'net-2',
          title: 'Backbone Campus',
          summary: 'Interconnexion de bâtiments avec redondance.',
          image: 'assets/images/phone.png',
          tags: [
            { id: 'topo', label: 'Topo', icon: <TbNetwork /> },
            { id: 'cloud', label: 'Cloud', icon: <TbCloud /> },
          ],
          context: 'Créer un backbone stable pour la distribution.',
          objective: 'Assurer une haute disponibilité.',
          work: 'Planification, câblage logique, monitoring.',
          result: 'Disponibilité de 99.9% sur la période d\'essai.',
        },
      ],
    },
    {
      id: 'code',
      title: 'Code',
      subtitle: 'Logiciels développés',
      icon: <TbCode />,
      projects: [
        {
          id: 'code-1',
          title: 'White Cobalt',
          summary: 'Client Android natif permettant de télécharger des fichiers multimédias depuis Internet à l\'aide des API du serveur Cobalt.',
          image: 'assets/images/projects/whitecobalt.jpg',
          tags: [
            { id: 'api', label: 'API', icon: <TbCode /> },
            { id: 'db', label: 'DB', icon: <TbDatabase /> },
            { id: 'cloud', label: 'Cloud', icon: <TbCloud /> },
          ],
          context: 'Centraliser les données d\'inventaire.',
          objective: 'Automatiser les alertes et réduire les erreurs.',
          work: 'Conception API, endpoints, tests, déploiement.',
          result: 'Réduction de 30% des erreurs de saisie.',
        },
        {
          id: 'code-2',
          title: 'LibreLinkUpTray',
          summary: 'Application native Windows permettant de consulter l\'historique et les valeurs actuelles de glycémie grâce à l\'API LibreLinkUp.',
          image: 'assets/images/projects/librelinkuptray.jpg',
          tags: [
            { id: 'ci', label: 'CI', icon: <TbBolt /> },
            { id: 'sec', label: 'Sec', icon: <TbShieldCheck /> },
          ],
          context: 'Rendre la livraison continue fiable.',
          objective: 'Réduire le temps de déploiement.',
          work: 'Scripts, checks qualité, monitoring.',
          result: 'Temps de release divisé par 2.',
        },
        {
          id: 'code-3',
          title: 'Geometry Flip',
          summary: 'Un clône simple du jeu Geometry Dash pour Flipper Zero.',
          image: 'assets/images/projects/geometryflip.jpg',
          tags: [
            { id: 'ci', label: 'CI', icon: <TbBolt /> },
            { id: 'sec', label: 'Sec', icon: <TbShieldCheck /> },
          ],
          context: 'Rendre la livraison continue fiable.',
          objective: 'Réduire le temps de déploiement.',
          work: 'Scripts, checks qualité, monitoring.',
          result: 'Temps de release divisé par 2.',
        },
        {
          id: 'code-4',
          title: 'ODIN – Moyennes',
          summary: 'Script pour Tampermonkey capable de calculer la note moyenne pour l\'UE et le semestre directement dans le navigateur.',
          image: 'assets/images/projects/odin-moyennes.jpg',
          tags: [
            { id: 'ci', label: 'CI', icon: <TbBolt /> },
            { id: 'sec', label: 'Sec', icon: <TbShieldCheck /> },
          ],
          context: 'Rendre la livraison continue fiable.',
          objective: 'Réduire le temps de déploiement.',
          work: 'Scripts, checks qualité, monitoring.',
          result: 'Temps de release divisé par 2.',
        },
      ],
    },
  ];

  const handleOpenCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setLastCategory(categoryId);
  };

  const handleCloseCategory = () => {
    setActiveCategory(null);
  };

  const handleOpenProject = (categoryId, project) => {
    setSelectedProject(project);
    setLastCategory(categoryId);
    setActiveCategory(null);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (lastCategory) {
      setActiveCategory(lastCategory);
    }
  };

  const activeCategoryData = projectCategories.find((cat) => cat.id === activeCategory);

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
                onClick={() => handleOpenCategory('uiux')}
              />

              <Banner
                logo={<TbAffiliate />}
                title="Réseaux"
                subtitle="Systèmes de communication réalisés"
                onClick={() => handleOpenCategory('reseaux')}
              />

              <Banner
                logo={<TbCode />}
                title="Code"
                subtitle="Logiciels développés"
                onClick={() => handleOpenCategory('code')}
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

      {activeCategoryData && (
        <BottomSheet
          isOpen={!!activeCategoryData}
          onClose={handleCloseCategory}
          title={`Projets ${activeCategoryData.title}`}
        >
          <div className="projects-sheet">
            <div className="projects-list">
              {activeCategoryData.projects.map((project) => (
                <button
                  key={project.id}
                  className="project-card"
                  type="button"
                  onClick={() => handleOpenProject(activeCategoryData.id, project)}
                >
                  <div className="project-card-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-card-content">
                    <div className="project-card-title">{project.title}</div>
                    <p className="project-card-summary">{project.summary}</p>
                    <div className="project-card-tags">
                      {project.tags.map((tag) => (
                        <span key={tag.id} className="project-tag">
                          {tag.icon}
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </BottomSheet>
      )}

      {selectedProject && (
        <BottomSheet
          isOpen={!!selectedProject}
          onClose={handleCloseProject}
          title={selectedProject.title}
        >
          <div className="project-detail">
            <div className="project-detail-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="project-detail-content">
              <div className="project-detail-section">
                <h3 className="project-detail-heading">Contexte</h3>
                <p>{selectedProject.context}</p>
              </div>
              <div className="project-detail-section">
                <h3 className="project-detail-heading">Objectif</h3>
                <p>{selectedProject.objective}</p>
              </div>
              <div className="project-detail-section">
                <h3 className="project-detail-heading">Travail réalisé</h3>
                <p>{selectedProject.work}</p>
              </div>
              <div className="project-detail-section">
                <h3 className="project-detail-heading">Résultat</h3>
                <p>{selectedProject.result}</p>
              </div>
            </div>
          </div>
        </BottomSheet>
      )}
    </Section>
  );
};

export default Projets;
