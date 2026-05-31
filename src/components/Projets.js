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
          context: 'Le marché des applications mobiles permettant de télécharger du contenu depuis Internet regorge d\'applications de mauvaise qualité. Elles sont toutes truffées de publicités qui s\'affichent à chaque action que vous effectuez, ou bien exigent un abonnement pour débloquer toutes leurs fonctionnalités. De plus, elles ne proposent généralement le téléchargement qu\'à partir d\'un ou deux services. Il est très difficile de trouver une application qui allie une expérience utilisateur pratique et une polyvalence vis-à-vis des services Internet.',
          objective: 'Il faut créer une application mobile pour Android capable de télécharger des fichiers multimédias à partir d\'un large éventail de réseaux sociaux, qui soit entièrement gratuite et libre d\'utilisation, et qui offre diverses intégrations avec l\'appareil mobile.',
          work: 'J\'ai développé une application Android White Cobalt à l\'aide du framework Flutter et du langage de programmation Dart. Elle permet de télécharger des fichiers multimédias à partir d\'une large liste de réseaux sociaux et s\'intègre à la mémoire de l\'appareil, ce qui facilite la libération d\'espace en cas de manque de mémoire. Il est également possible d\'envoyer des liens vers ces fichiers multimédias via le menu de partage du système, et bien plus encore.',
          result: 'J\'ai amélioré mes compétences en développement d\'applications Android, ainsi que celles relatives au framework Flutter et au langage de programmation Dart.',
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
          context: 'Le système de capteurs FreeStyle, développé par la société chimico-pharmaceutique américaine Abbott, permet de surveiller en temps réel le taux de glucose dans le sang, ce qui aide les personnes atteintes de diabète à contrôler leur glycémie et à réagir rapidement en cas de dépassement des limites normales. Le suivi s\'effectue à l\'aide d\'une application mobile pour Android et iOS, ce qui implique de consulter constamment son téléphone. Mais lorsque vous travaillez sur un ordinateur, il serait bien plus simple d\'avoir ces informations constamment sous les yeux, par exemple dans la barre d\'état système.',
          objective: 'Il est nécessaire de développer une application de bureau pour Windows capable de reproduire les fonctionnalités de l\'application mobile officielle et d\'améliorer la convivialité en tirant parti de l\'interface du système d\'exploitation.',
          work: 'J\'ai développé l\'application Windows LibreLinkUpTray à l\'aide du framework Flutter et du langage de programmation Dart. Elle reproduit intégralement les fonctionnalités de l\'application d\'origine en matière de suivi de la glycémie, tout en offrant la possibilité de consulter ces données dans le menu de la barre d\'état système. Des notifications à l\'écran ont également été mises en place pour signaler les écarts de glycémie par rapport à la normale, ainsi que des informations sur la durée de vie du capteur.',
          result: 'J\'ai amélioré mes compétences en développement d\'applications Windows, ainsi que celles relatives au framework Flutter et au langage de programmation Dart.',
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
          context: 'Geometry Dash est l\'un de mes jeux préférés ; son gameplay est assez simple : il faut faire sauter un cube par-dessus des obstacles. Flipper Zero est un appareil destiné aux passionnés d\'informatique, sur lequel plusieurs versions de jeux vidéo simples ont déjà été développées.',
          objective: 'Créer un jeu qui reproduise le gameplay de Geometry Dash pour Flipper Zero, en tenant compte des capacités de cet appareil.',
          work: 'J\'ai créé un jeu pour Flipper Zero intitulé Geometry Flip, qui reproduit le gameplay de Geometry Dash à l\'aide du langage de programmation C. Il permet de modifier l\'apparence du personnage, propose plusieurs niveaux et offre la possibilité de créer ses propres niveaux dans un éditeur en ligne.',
          result: 'J\'ai acquis des compétences en développement de mini-programmes pour Flipper Zero et en langage de programmation C. J\'ai également perfectionné mes compétences en HTML, CSS et JS, que j\'ai utilisées pour créer un éditeur de niveaux.',
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
          context: 'La plateforme ODIN est utilisée à l\'IUT Clermont Auvergne pour communiquer aux étudiants les notes qu\'ils obtiennent tout au long de leur cursus. La validation de l\'année d\'études s\'effectue en calculant la moyenne des notes obtenues dans les différentes compétences, qui doit être égale ou supérieure au seuil de réussite. Malheureusement, la plateforme n\'affiche pas la moyenne par compétence sur la base des moyennes par matière, et comme les matières ont des coefficients différents, le calcul manuel de sa moyenne est une tâche assez complexe.',
          objective: 'Il faut créer un script pour Tampermonkey, une extension qui permet d\'exécuter des scripts personnalisés directement dans le navigateur, capable de calculer automatiquement les notes moyennes de compétences à partir des notes obtenues et de les afficher directement dans le navigateur.',
          work: 'J\'ai créé un script qui calcule automatiquement les notes moyennes pour chaque compétence à partir des notes obtenues dans les matières et de leurs coefficients, ce qui permet aux étudiants de toujours savoir quelle note ils ont pour chaque compétence.',
          result: 'J\'ai acquis des compétences en matière de création de scripts personnalisés pour les navigateurs et j\'ai perfectionné mes compétences en JavaScript.',
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
