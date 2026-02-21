/**
 * Centralised translation dictionary for the portfolio.
 *
 * Structure:  translations.<section>.<key>  →  { en: "…", fr: "…" }
 *
 * Section order matches the page order in App.js:
 *   Navbar → Home (+ Typewriter) → About → Skills → Experiences → Projects → Education → FindMeOn → Footer
 *
 * To add a new language later, add a third property to each entry
 * (e.g. `es: "…"`) and update the toggle logic in LanguageContext.
 */

const translations = {
    /* ------------------------------------------------------------------ */
    /*  Navbar                                                             */
    /* ------------------------------------------------------------------ */
    navbar: {
        about: { en: "ABOUT", fr: "À PROPOS" },
        skills: { en: "SKILLS", fr: "COMPÉTENCES" },
        experiences: { en: "EXPERIENCE", fr: "EXPÉRIENCES" },
        projects: { en: "PROJECTS", fr: "PROJETS" },
        education: { en: "EDUCATION", fr: "FORMATIONS" },
        contact: { en: "CONTACT", fr: "CONTACT" },
    },

    /* ------------------------------------------------------------------ */
    /*  Home                                                               */
    /* ------------------------------------------------------------------ */
    home: {
        greeting: { en: "Hello There!", fr: "Bonjour !" },
        iAm: { en: "I'M", fr: "JE SUIS" },
        contactBtn: { en: "Contact Me", fr: "Me contacter" },
        downloadCV: { en: "Download CV", fr: "Télécharger CV" },
    },

    /* ------------------------------------------------------------------ */
    /*  Typewriter                                                         */
    /* ------------------------------------------------------------------ */
    typewriter: {
        strings: {
            en: [
                "Software Robotics Engineer",
                "Computer Vision",
                "Machine Learning",
                "Edge Computing",
                "Software Architect",
                "Freelancer",
                "Open Source Contributor",
            ],
            fr: [
                "Ingénieur Robotique Logicielle",
                "Computer Vision",
                "Machine Learning",
                "Edge Computing",
                "Architecte Logiciel",
                "Freelance",
                "Contributeur Open Source",
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  About                                                              */
    /* ------------------------------------------------------------------ */
    about: {
        title: {
            en: "About",
            fr: "À Propos",
        },
        subtitle: {
            en: "« Benefit from expertise in Robotics, Computer Vision and Software. »",
            fr: "« Bénéficiez d'une expertise en Robotique, Computer Vision et Logiciel. »",
        },
        body: {
            en: (
                <>
                    From strategic framing to field deployment and observability of your systems,
                    I support all stages of your project lifecycle at the intersection of software
                    architecture, advanced robotics, and embedded intelligence.
                    <br /><br />
                    Autonomous robotics, perception, and computer vision are the disruptive
                    technologies redefining many standards today. I don&apos;t just build theoretical
                    prototypes: I build robust, maintainable, and high-performance systems capable
                    of facing real-world constraints.
                    <br /><br />
                    My name is Sébastien Fournier. I am a software robotics engineer and architect,
                    passionate about autonomous navigation, embedded AI, and technical excellence.
                    <br /><br />
                    <strong>My various roles</strong>
                    <ul>
                        <li>
                            <strong>The Architect:</strong> I structure your
                            projects to build robust and maintainable systems. My
                            goal is to ensure software reliability from the design
                            phase to support the long-term evolution of your
                            solutions.
                        </li>
                        <li>
                            <strong>The Field &amp; Infrastructure Expert:</strong>{" "}
                            With an operational mindset, I support infrastructures
                            and CI/CD pipelines that streamline team workflows. I
                            rely on relevant simulation and solid observability to
                            secure the transition to real-world testing.
                        </li>
                        <li>
                            <strong>The Strategic Partner:</strong> From design to
                            deployment, I provide end-to-end expertise. Bilingual
                            and pedagogical, I lead teams using a cross-functional
                            language to turn your complex challenges into tangible
                            results, both in industry and research centers.
                        </li>
                    </ul>
                    My approach is based on an iterative methodology and a strong
                    ability to prioritize the most critical challenges. Beyond
                    technical expertise, I put my energy and proactivity at the
                    service of the collective. Let&apos;s work together to turn your
                    technological visions into lasting reality.
                </>
            ),
            fr: (
                <>
                    Du cadrage stratégique jusqu&apos;au déploiement sur le terrain et à
                    l&apos;observabilité de vos systèmes, j&apos;interviens sur toutes les étapes
                    du cycle de vie de vos projets à l&apos;intersection de l&apos;architecture
                    logicielle, de la robotique avancée et de l&apos;intelligence embarquée.
                    <br /><br />
                    La robotique autonome, la perception et la vision par ordinateur sont les
                    technologies de rupture qui redéfinissent aujourd&apos;hui de nombreux standards.
                    Je ne crée pas seulement des prototypes théoriques : je bâtis des systèmes
                    robustes, maintenables et performants, capables d&apos;affronter les contraintes
                    du monde réel.
                    <br /><br />
                    Je m&apos;appelle Sébastien Fournier. Je suis ingénieur en robotique logicielle
                    et architecte, passionné par la navigation autonome, l&apos;IA embarquée et
                    l&apos;excellence technique.
                    <br /><br />
                    <strong>Mes différentes casquettes</strong>
                    <ul>
                        <li>
                            <strong>L&apos;Architecte :</strong> Je structure vos projets
                            pour bâtir des systèmes robustes et maintenables. Mon
                            objectif est d&apos;assurer la fiabilité logicielle dès la
                            conception pour soutenir l&apos;évolution de vos solutions
                            sur le long terme.
                        </li>
                        <li>
                            <strong>L&apos;Expert Terrain &amp; Infrastructure :</strong>{" "}
                            Avec une vision opérationnelle, j&apos;apporte un soutien aux
                            infrastructures et pipelines CI/CD qui
                            facilitent le quotidien des équipes. Je m&apos;appuie sur une
                            simulation pertinente et une observabilité solide pour
                            sécuriser le passage aux tests en conditions réelles.
                        </li>
                        <li>
                            <strong>Le Partenaire Stratégique :</strong> De la conception
                            au déploiement, j&apos;apporte une expertise complète.
                            Bilingue et pédagogue, j&apos;anime les équipes en utilisant
                            un langage multi-métier pour transformer vos
                            enjeux complexes en résultats tangibles, en entreprise comme
                            en centre de recherche.
                        </li>
                    </ul>
                    Ma méthode repose sur une approche itérative et une
                    forte capacité à prioriser les défis les plus critiques. Au-delà de
                    l&apos;expertise technique, je mets mon énergie et ma proactivité au
                    service d&apos;un collectif. Avançons ensemble pour transformer vos
                    visions technologiques en une réalité durable.
                </>
            ),
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Skills                                                             */
    /* ------------------------------------------------------------------ */
    skills: {
        title: {
            en: <>Professional <strong className="purple">Skillset</strong> & <strong className="purple">Tools</strong></>,
            fr: <>Compétences <strong className="purple">professionnelles</strong> & <strong className="purple">outils</strong></>,
        },
        valuePillarsTitle: {
            en: "What I bring to the table",
            fr: "Ma valeur apportée",
        },
        valuePillars: {
            delivery: {
                title: { en: "Pragmatism", fr: "Pragmatisme" },
                description: {
                    en: "Meet your deadlines, clear the backlog, deliver the results.",
                    fr: "Respectez vos deadlines, dépilez le backlog, livrez les résultats.",
                },
            },
            leadership: {
                title: { en: "Collective intelligence", fr: "Intelligence collective" },
                description: {
                    en: "Foster communication and collaboration across disciplines.",
                    fr: "Animez l’équipe. Favorisez l’échange entre les métiers.",
                },
            },
            knowledge: {
                title: { en: "Knowledge transfer", fr: "Transmission" },
                description: {
                    en: "Preserve expertise and knowledge.",
                    fr: "Conservez le savoir-faire et les connaissances.",
                },
            },
            expertise: {
                title: { en: "Systemic approach", fr: "Approche systémique" },
                description: {
                    en: "End-to-end expertise on your projects, from design to deployment.",
                    fr: "Une expertise complète sur vos projets, de la conception au déploiement.",
                },
            },
        },
        categoriesTitle: {
            en: "Technical expertise",
            fr: "Expertise technique",
        },
        categories: {
            architecture: {
                title: { en: "Architecture & Software Development", fr: "Architecture et développement logiciel" },
                description: {
                    en: "Design of systems with modern, modular, robust and maintainable code, suited to production and deployment requirements.",
                    fr: "Conception de systèmes avec code moderne, modulaire, robuste et maintenable, adaptés aux exigences de production et du déploiement.",
                },
                tech: ["C++", "Python", "microservices", "API Rest", "FastAPI"],
            },
            robotics: {
                title: { en: "Robotics", fr: "Robotique" },
                description: {
                    en: "Navigation and control, sensor fusion, 2D/3D localization and mapping, path planning, obstacle detection and avoidance.",
                    fr: "Navigation et contrôle, fusion de capteurs, localisation et cartographie 2D/3D, planification de trajectoires, détection et évitement d'obstacles.",
                },
                tech: ["ROS2", "Nav2", "SLAM Toolbox", "RTAB-Map", "Cartographer"],
            },
            computerVision: {
                title: { en: "Computer Vision & Edge\u00A0AI", fr: "Computer Vision & Edge\u00A0AI" },
                description: {
                    en: "Optimization and industrialization of your perception and machine learning pipelines on embedded targets.",
                    fr: "Optimisation et industrialisation de vos pipelines de perception et Machine Learning sur cibles embarquées.",
                },
                tech: ["NVIDIA Jetson", "OpenCV", "PyTorch", "TensorFlow", "HuggingFace", "TensorRT"],
            },
            devops: {
                title: { en: "Automation & DevOps", fr: "Automatisation, DevOps" },
                description: {
                    en: "CI/CD, pipelines and infrastructure automation.",
                    fr: "CI/CD, pipelines et automatisation d'infrastructure.",
                },
                tech: ["GitLab CI", "GitHub Actions", "Docker"],
            },
            observability: {
                title: { en: "Observability", fr: "Observabilité" },
                description: {
                    en: "Monitoring, visualization and analysis of system data.",
                    fr: "Monitoring, visualisation et analyse des données système.",
                },
                tech: ["PlotJuggler", "FoxGlove", "Grafana"],
            },
            simulation: {
                title: { en: "Simulation", fr: "Simulation" },
                description: {
                    en: "Reducing the Sim-to-Real gap for robust deployment.",
                    fr: "Réduction du « Sim-to-Real gap » pour un déploiement robuste.",
                },
                tech: ["Gazebo", "Isaac Sim", "RViz"],
            },
            qa: {
                title: { en: "Q&A", fr: "Q&A" },
                description: {
                    en: "Unit and functional testing, non-regression.",
                    fr: "Tests unitaires et fonctionnels, non-régression.",
                },
                tech: ["Google Test", "Boost.test", "PyTest", "Robot Framework"],
            },
            strategy: {
                title: { en: "Strategy & Business Vision", fr: "Stratégie et vision business" },
                description: {
                    en: "Align teams and stakeholders through clear, bilingual (FR/EN) communication and shared vision.",
                    fr: "Aligner les métiers grâce à une communication claire, bilingue (FR/EN) et une vision partagée.",
                },
                tech: ["Agile", "Scrum", "Facilitation", "Roadmap"],
            },
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Experiences / Clients                                              */
    /* ------------------------------------------------------------------ */
    experiences: {
        title: {
            en: <>Professional <strong className="purple">Experience</strong> & <strong className="purple">Customers</strong></>,
            fr: <>Expériences <strong className="purple">professionnelles</strong> & <strong className="purple">Clients</strong></>,
        },
        subtitle: {
            en: "Key roles and collaborations.",
            fr: "Principaux postes et collaborations.",
        },
        labels: {
            project: { en: "Context", fr: "Contexte" },
            missions: { en: "Missions", fr: "Missions" },
            achievements: { en: "Key achievements", fr: "Réalisations" },
            results: { en: "Results", fr: "Résultats" },
            tags: { en: "Topics", fr: "Thématiques" },
            duration: { en: "Duration", fr: "Durée cumulée" },
            location: { en: "Location", fr: "Lieu" },
        },
        durationFormat: {
            month: { en: "month", fr: "mois" },
            months: { en: "months", fr: "mois" },
            year: { en: "year", fr: "an" },
            years: { en: "years", fr: "ans" },
        },
        ongoing: { en: "Ongoing", fr: "En cours" },
        experienceTypeBadges: {
            consultant: { en: "Consultant", fr: "Consultant" },
            stage: { en: "Internship", fr: "Stage" },
        },
        entries: {
            en: [
                {
                    company: "Freelance",
                    logo: null,
                    role: "Software Robotics Engineer",
                    period: "May 2025 – Present",
                    startDate: "2025-05",
                    isCurrent: true,
                    location: "France",
                    project: "Robotics design, software architecture, development of perception and navigation algorithms under embedded constraints, Edge AI optimization and DevOps.",
                    missions: [
                        "Software architecture and development.",
                        "Robotics and Navigation: Sensor fusion, localization, trajectory planning, obstacle detection and avoidance.",
                        "Computer Vision & Edge AI: training, integration, optimization, industrialization of perception / machine learning pipelines.",
                        "Integration, continuous deployment, DevOps.",
                        "Observability.",
                        "Simulation: reducing the \"Sim-to-Real gap\".",
                        "Q&A: unit and functional testing, non-regression.",
                        "Strategy and business vision.",
                    ],
                    achievements: [
                        "Development of an autonomous navigation system for an exploration robot.",
                        "Creation of an optimized C++ library for image processing.",
                        "Design of a simplified programming interface for embedded systems.",
                        "Implementation of obstacle detection algorithms for autonomous vehicles.",
                        "Design of an autonomous rover for defect detection in solar farms.",
                    ],
                    results: [
                        "35% · Increase in execution performance of developed applications.",
                        "50% · Reduction in development time thanks to the libraries and tools created.",
                    ],
                    tags: [
                        "C++",
                        "Python",
                        "FastAPI",
                        "ROS2",
                        "Nav2",
                        "slam_toolbox",
                        "RTAB-Map",
                        "OpenCV",
                        "PyTorch",
                        "TensorFlow",
                        "YOLOv8",
                        "HuggingFace",
                        "NVIDIA Jetson",
                        "Linux",
                        "CI/CD",
                        "GitHub Actions",
                        "Docker",
                        "Gazebo",
                        "PlotJuggler",
                        "FoxGlove",
                        "GoogleTest",
                    ],
                },
                {
                    company: "Navya Mobility",
                    logoKey: "navya",
                    role: "Robotics Project Manager",
                    period: "May 2024 – August 2024",
                    duration: "4 months",
                    location: "Villeurbanne, France",
                    project: "Management of the company's technical projects for the design and development of autonomous shuttles.",
                    missions: [
                        "Project lifecycle management, from requirements definition to production.",
                        "Time and cost planning.",
                        "Strategic arbitration.",
                        "Product study.",
                        "Functional requirements analysis.",
                        "System specifications writing.",
                    ],
                    achievements: [
                        "Definition and design of an MVP.",
                        "Design of the vehicle supervision system (level 4 autonomy).",
                        "MVP system specifications writing.",
                    ],
                    results: [
                        "1 · Marketable MVP.",
                        "1 · Vehicle operating in level 4 autonomy (no human on board to supervise the vehicle).",
                        "1 · Implementation of business processes to synchronize project stakeholders.",
                        "1 · Complete 1-year roadmap.",
                    ],
                    tags: ["Autonomous Vehicles", "Supervision", "Cameras", "LiDAR", "Project Management", "System specifications", "Roadmap", "MVP", "Product strategy"],
                },
                {
                    company: "GE HealthCare",
                    logoKey: "ge-healthcare",
                    role: "Lead Software Engineer",
                    experienceType: "consultant",
                    period: "August 2023 – April 2024",
                    duration: "9 months",
                    location: "Versailles, France",
                    project: "Architecture and development of an application service for image generation and reading in mammography.",
                    missions: [
                        "Software architecture.",
                        "Software development.",
                        "Ensuring patient data integrity and security.",
                        "Unit and functional testing, integration, validation.",
                        "Agile planning.",
                        "Support for DevOps and System teams.",
                        "Key client contact.",
                    ],
                    achievements: [
                        "Complete architecture of the software service.",
                        "Complete development and delivery of the software component.",
                        "Setup and development of a new functional test framework.",
                        "Improved robustness of the image acquisition system.",
                    ],
                    results: [
                        "Enriched and reliable patient data.",
                        "Compatibility of images with imaging devices from other manufacturers.",
                        "75% · Test coverage.",
                        "95% · Faster execution of the functional test suite.",
                        "50 000 · Lines of code.",
                    ],
                    tags: ["C++", "Software solution architecture", "Unit testing", "Functional testing", "SonarQube", "Gherkin", "Computer Vision", "Digital image processing", "DICOM", "DDS", "Git", "Linux"],
                },
                {
                    company: "Up Technologies",
                    logoKey: "up-technologies",
                    role: "Robotics Engineer",
                    period: "March 2023 – August 2023",
                    duration: "6 months",
                    location: "Lyon, France",
                    project: "Delivery of robotics projects, firmware and applications.",
                    projects: [
                        {
                            title: "Project 1: Embedded real-time voice recognition system",
                            missions: [
                                "Client pre-sales.",
                                "Project management.",
                                "System, firmware and software architecture.",
                                "Prototyping and development on electronic board.",
                                "Audio encoding.",
                                "Software development.",
                                "Integration of deep learning model for voice recognition.",
                                "Integration and continuous deployment.",
                            ],
                            achievements: [
                                "Electronic board porting.",
                                "Memory optimization via DMA.",
                                "Real-time development.",
                                "Development, tuning and integration of the voice recognition neural network.",
                                "Development of a display of detected voice commands on LCD screen.",
                                "Development of a logging system.",
                                "Project management and delivery from pre-sales to final handover to client.",
                                "Writing of a business best practices booklet for new developers.",
                            ],
                            results: [
                                "Functional voice control of the system.",
                                "Robust voice recognition and control in the order of 1 millisecond.",
                                "150% · Performance gain on a more powerful board.",
                                "60% · Technical debt reduction.",
                            ],
                            tags: ["Python", "C", "DMA", "Neural network", "Deep learning", "Embedded", "STM32", "RTOS", "Audio", "LCD", "CI/CD"],
                        },
                        {
                            title: "Project 2: Autonomous reception robot",
                            missions: [
                                "Architecture, software and firmware development.",
                                "Autonomous navigation and perception (sensors, vision, lidar).",
                                "Electronic validation.",
                                "Continuous integration, testing and validation.",
                            ],
                            achievements: [
                                "Development of the control system (propulsion, braking, rotation, odometry).",
                                "System design of navigation and perception features.",
                                "Development of a test bench for robot components.",
                                "3D printing and assembly of the robot (full scale).",
                            ],
                            results: [
                                "Robot operable remotely with obstacle detection.",
                                "200% · Time savings on debugging.",
                                "2 · Minutes to test the entire robot on test bench (vs. 30 min).",
                            ],
                            tags: ["C", "C++", "ROS", "Robotics", "Odometry", "Navigation", "Perception", "Lidar", "Camera", "Solidworks", "3D printing"],
                        },
                    ],
                },
                {
                    company: "Echosens",
                    logoKey: "echosens",
                    role: "Software and Algorithms Engineer",
                    experienceType: "consultant",
                    period: "October 2022 – March 2023",
                    duration: "6 months",
                    location: "Paris",
                    project: "Development of an examination engine for diagnostic assistance in hepatology.",
                    missions: [
                        "Software architecture and development.",
                        "Support for the embedded team for ultrasound guidance and probe control.",
                        "Integration of measurement calculation algorithms.",
                        "Integration and continuous delivery.",
                        "CI/CD pipeline automation.",
                        "DevOps support.",
                    ],
                    achievements: [
                        "Development of a continuous ultrasound probe guidance solution.",
                        "Implementation of new measurement criteria for the calculation of hepatic and blood scores for patients.",
                    ],
                    results: [
                        "Continuous ultrasound guidance instead of one-by-one.",
                        "Improved detection of hepatic and cardiovascular risks.",
                        "75% · Reduction in acquisition time.",
                        "1 · First vibration-guided system in the world.",
                    ],
                    tags: ["C++", "Embedded", "Algorithms", "Ultrasound", "Conan", "Chocolatey", "TeamCity", "CI/CD", "DevOps"],
                },
                {
                    company: "Navya Mobility",
                    logoKey: "navya",
                    role: "Software Engineer and Scrum Master",
                    experienceType: "consultant",
                    period: "March 2021 – September 2022",
                    duration: "1 year 7 months",
                    location: "Paris",
                    project: "Development of software solutions for autonomous shuttle control and diagnostics.",
                    missions: [
                        "Software architecture and development.",
                        "Development of vehicle actions (propulsion, braking, steering) and cabin (doors, lights, comfort, etc.).",
                        "Design of vehicle diagnostic tools (black boxes).",
                        "Windows to Linux OS migration.",
                        "DevOps support.",
                        "Development of integration and delivery tools.",
                        "Facilitation of Agile/Scrum meetings (planning, retrospective, etc.).",
                        "Agile/Scrum project management.",
                        "Training in project and development practices.",
                    ],
                    achievements: [
                        "Complete architectural redesign of software components for 2 new vehicle models.",
                        "Development of a safety and diagnostic management feature: centralization of component information, autonomous vehicle error management.",
                        "BlackBox component redesign: data processing for filtering and visualization on graphical interface. Disk partitioning optimization.",
                        "Migration and automation of CI/CD pipelines from TeamCity to GitLab CI.",
                    ],
                    results: [
                        "Agile/Scrum workflow implementation.",
                        "75% · Unit test coverage across all components.",
                        "60% · Reduction in cyclomatic complexity of algorithms.",
                        "50% · Technical debt reduction.",
                        "New architecture for vehicle equipment control components.",
                        "New network communication interface with graphical interface.",
                        "3 · Level 4 autonomous shuttles deployed on test track for the Autonomy Show in Versailles.",
                    ],
                    tags: ["C++", "Python", "CAN", "Linux", "GitLab CI", "SonarQube", "Qt Creator", "Autonomous vehicles", "Agile", "Scrum"],
                },
                {
                    company: "Störk-Tronic",
                    logoKey: "stoerk-tronic",
                    role: "R&D Software Engineer, Product Owner",
                    period: "October 2018 – February 2021",
                    duration: "2 years 5 months",
                    location: "Lyon, France & Stuttgart, Germany",
                    project: "Design and development of embedded and graphical middleware applications for industrial thermal regulation systems.",
                    missions: [
                        "Development and integration of middleware applications for IoT and Cloud solutions.",
                        "Development and integration of embedded applications.",
                        "Cloud development.",
                        "Development of unit and functional tests.",
                        "Product Owner of the Web graphical interface (frontend).",
                        "Development and design of the graphical interface.",
                        "Development of unit tests for the graphical interface.",
                        "Continuous integration of applications.",
                    ],
                    achievements: [
                        "Development of automated CI/CD pipelines.",
                        "Development of an embedded user interface for control of a connected oven touch tablet.",
                        "Self-taught training in JavaScript/React.",
                        "Frontend development of an embedded web interface.",
                    ],
                    results: [
                        "24h · Code delivery time reduced to 15 minutes.",
                        "1 · First professional experience as middleware/embedded and web developer.",
                    ],
                    tags: ["C++", "JavaScript", "ReactJS", "NodeJS", "IoT", "Conan", "Qt Creator", "Jenkins", "GitLab", "CI/CD", "Product Owner", "Frontend", "Middleware", "Cloud", "Embedded"],
                },
                {
                    company: "University of Strathclyde",
                    logoKey: "strathclyde",
                    role: "Research Engineer",
                    experienceType: "stage",
                    period: "September 2017 – June 2018",
                    duration: "10 months",
                    location: "Glasgow, United Kingdom",
                    project: "Research and development project for a movement tracker for professional swimmers.",
                    achievements: [
                        "Research and bibliographic study.",
                        "Kinematic, mechanical and architectural study of the prototype.",
                        "Acquisition, processing and fusion of data (photoelectric sensors, encoder wheels).",
                        "Implementation of Bluetooth Low Energy protocol for data transmission.",
                        "Database design.",
                        "Implementation of statistical algorithms.",
                        "Android application design.",
                        "Publication of a research thesis.",
                    ],
                    results: [
                        "Off-pool performance analysis system for swimmers.",
                        "15 000 · Lines of code.",
                    ],
                    tags: ["Biomechanics", "Java", "Bluetooth Low Energy", "Android", "Database", "Statistics", "Research"],
                },
                {
                    company: "Bontronic",
                    logoKey: "bontronic",
                    role: "Robotics Engineer",
                    experienceType: "stage",
                    period: "May 2017 – August 2017",
                    duration: "4 months",
                    location: "Troisdorf, Germany",
                    project: "Study and design of a robotic arm for the automotive industry.",
                    achievements: [
                        "Feasibility study.",
                        "Architectural study.",
                        "Electromagnetic Compatibility (EMC) study.",
                        "Redesign of the robot state architecture.",
                    ],
                    tags: ["C", "C++", "Robotics", "NXP", "Automotive", "Industrial"],
                },
            ],
            fr: [
                {
                    company: "Freelance",
                    logo: null,
                    role: "Ingénieur en robotique logicielle",
                    period: "mai 2025 – Aujourd'hui",
                    startDate: "2025-05",
                    isCurrent: true,
                    location: "France",
                    project: "Conception robotique, architecture logicielle, développement d'algorithmes de perception et de navigation sous contraintes embarquées, optimisation Edge AI et DevOps.",
                    missions: [
                        "Architecture et développement logiciel.",
                        "Robotique et navigation avec fusion de capteurs, localisation, planification de trajectoires, détection et évitement d'obstacles.",
                        "Vision par ordinateur et Edge AI : entraînement, intégration, optimisation et industrialisation de pipelines embarqués pour la perception et Machine Learning.",
                        "Intégration, déploiement continu et DevOps.",
                        "Mise en place de solutions d'observabilité.",
                        "Simulation avec réduction du \"Sim-to-Real gap\".",
                        "Q&A avec tests unitaires, fonctionnels et non-régression.",
                        "Stratégie et vision business.",
                    ],
                    achievements: [
                        "Développement d'un système de navigation autonome pour un robot d'exploration.",
                        "Création d'une bibliothèque C++ optimisée pour traitement d'images.",
                        "Conception d'une interface de programmation simplifiée pour systèmes embarqués.",
                        "Implémentation d'algorithmes de détection d'obstacles pour véhicules autonomes.",
                        "Conception d’un rover autonome de détection de défauts dans les fermes solaires.",
                    ],
                    results: [
                        "35% · Augmentation des performances d'exécution des applications développées.",
                        "50% · Réduction du temps de développement grâce aux bibliothèques et outils créés.",
                    ],
                    tags: [
                        "C++",
                        "Python",
                        "FastAPI",
                        "ROS2",
                        "Nav2",
                        "slam_toolbox",
                        "RTAB-Map",
                        "OpenCV",
                        "PyTorch",
                        "TensorFlow",
                        "YOLOv8",
                        "HuggingFace",
                        "NVIDIA Jetson",
                        "Linux",
                        "CI/CD",
                        "GitHub Actions",
                        "Docker",
                        "Gazebo",
                        "PlotJuggler",
                        "FoxGlove",
                        "GoogleTest",
                    ],
                },
                {
                    company: "Navya Mobility",
                    logoKey: "navya",
                    role: "Chef de projets robotiques",
                    period: "mai 2024 - août 2024",
                    duration: "4 mois",
                    location: "Villeurbanne, France",
                    project: "Gestion des projets techniques de l'entreprise pour la conception et le développement des navettes autonomes.",
                    missions: [
                        "Pilotage du cycle projet, de la définition du besoin à la production.",
                        "Planification temps et coûts.",
                        "Arbitrage stratégique.",
                        "Etude produit.",
                        "Etude fonctionnelle du besoin.",
                        "Rédaction des spécifications systèmes.",
                    ],
                    achievements: [
                        "Définition et conception d'un MVP.",
                        "Conception du système de supervision des véhicules (autonomie lv4).",
                        "Rédaction des spécifications systèmes du MVP.",
                    ],
                    results: [
                        "1 · MVP commercialisable.",
                        "1 · Véhicule circulant en autonomie 4 (pas d'humain à bord pour superviser le véhicule).",
                        "1 · Mise en place de processus métiers pour synchroniser les parties prenantes du projet.",
                        "1 · Roadmap complète sur 1 an.",
                    ],
                    tags: [
                        "Véhicules autonomes",
                        "Supervision",
                        "Cameras",
                        "LiDAR",
                        "Gestion de projet",
                        "Spécifications systèmes",
                        "Roadmap",
                        "MVP",
                        "Stratégie produit",
                    ],
                },
                {
                    company: "GE HealthCare",
                    logoKey: "ge-healthcare",
                    role: "Lead Ingénieur logiciel",
                    experienceType: "consultant",
                    period: "août 2023 - avril 2024",
                    duration: "9 mois",
                    location: "Versailles, France",
                    project: "Architecture et développement d'un service applicatif de génération et lecture d'images médicales en mammographie.",
                    missions: [
                        "Architecture logicielle.",
                        "Développement logiciel.",
                        "Garantie de l'intégrité et sécurité des data patients.",
                        "Tests unitaires et fonctionnels, intégration, validation.",
                        "Planification agile.",
                        "Support DevOps et Système.",
                        "Référent Client.",
                    ],
                    achievements: [
                        "Architecture complète du service logiciel.",
                        "Développement complet de la brique logicielle.",
                        "Mise en place et Développement d'un nouveau framework de tests fonctionnels.",
                        "Amélioration de la robustesse du système d'acquisition d'images.",
                    ],
                    results: [
                        "Enrichissement et fiabilité des data patients.",
                        "Compatibilité des images avec les appareils d'imagerie d'autres fabricants.",
                        "75% · Couverture de tests.",
                        "95% · Exécution de la suite de tests fonctionnels plus rapide.",
                        "50 000 · Lignes de code.",
                    ],
                    tags: ["C++", "Architecture de solutions logicielles", "Tests unitaires", "Tests fonctionnels", "SonarQube", "Langage Gherkin", "Computer Vision", "Traitement numérique des images", "DICOM", "DDS", "Git", "Linux"],
                },
                {
                    company: "Up Technologies",
                    logoKey: "up-technologies",
                    role: "Ingénieur en robotique",
                    experienceType: "consultant",
                    period: "mars 2023 - août 2023",
                    duration: "6 mois",
                    location: "Lyon, France",
                    project: "Réalisation de projets robotiques, firmwares et applicatifs.",
                    projects: [
                        {
                            title: "Projet 1 : Système embarqué temps-réel de reconnaissance vocale",
                            missions: [
                                "Avant-vente client.",
                                "Gestion de projet.",
                                "Architecture système, firmware et logicielle.",
                                "Prototypage et développement sur carte électronique.",
                                "Encodage audio.",
                                "Développement logiciel.",
                                "Intégration de modèle de deep learning pour la reconnaissance vocale.",
                                "Intégration et déploiement continu.",
                            ],
                            achievements: [
                                "Portage de carte électronique.",
                                "Optimisation mémoire via DMA.",
                                "Développement temps-réel.",
                                "Intégration et tuning du modèle de reconnaissance vocale.",
                                "Développement d'un affichage des commandes vocales détectées.",
                                "Développement d'un outil de journalisation.",
                                "Gestion et réalisation du projet de bout en bout.",
                                "Rédaction d'un livret métier pour la transmission des connaissances.",
                            ],
                            results: [
                                "Contrôle vocal robuste du système.",
                                "1 milli-seconde · Reconnaissance et contrôle vocal robuste.",
                                "150% · Gain de performance sur une carte plus puissante.",
                                "60% · Dette technique réduite.",
                            ],
                            tags: ["Python", "C", "DMA", "Réseau neuronal", "Deep learning", "Embarqué", "STM32", "RTOS", "Audio", "LCD", "CI/CD"],
                        },
                        {
                            title: "Projet 2 : Robot autonome d'accueil",
                            missions: [
                                "Architecture, développement logiciel et firmware.",
                                "Navigation autonome et perception (capteurs, vision, lidar).",
                                "Validation électronique.",
                                "Intégration continue, tests et validation.",
                            ],
                            achievements: [
                                "Développement du système de contrôle (propulsion, freinage, rotation, odométrie).",
                                "Conception système des fonctionnalités de navigation et perception.",
                                "Réalisation du banc de test des composants du robot.",
                                "Impression 3D et assemblage du robot (échelle réelle).",
                            ],
                            results: [
                                "Robot opérable à distance avec détection d'obstacles.",
                                "200% · Gain de temps sur le debogage.",
                                "2 · Minutes pour tester l'ensemble du robot sur banc de test (vs. 30 min).",
                            ],
                            tags: ["C", "C++","ROS", "Robotique", "Odométrie", "Navigation", "Perception", "Lidar", "Caméra", "Solidworks", "Impression 3D"],
                        },
                    ],
                },
                {
                    company: "Echosens",
                    logoKey: "echosens",
                    role: "Ingénieur logiciel et algorithmes",
                    experienceType: "consultant",
                    period: "octobre 2022 - mars 2023",
                    duration: "6 mois",
                    location: "Paris",
                    project: "Développement d'un moteur d'examen pour l'aide au diagnostic en hépatologie.",
                    missions: [
                        "Architecture et développement logiciel.",
                        "Support au développement embarqué pour le contrôle et guidage des sondes par ultrasons.",
                        "Intégration des algorithmes de calculs de mesure.",
                        "Intégration et livraison continue.",
                        "Automatisation des pipelines CI/CD.",
                        "Support DevOps.",
                    ],
                    achievements: [
                        "Solution de guidage continu de la sonde par ultrasons.",
                        "Implémentation de nouveaux algorithmes de mesure pour le calcul des scores hépatiques (fibrose, stéatose) et sanguins.",
                    ],
                    results: [
                        "Guidage par ultrasons en continu plutôt qu'au coup par coup.",
                        "Détection améliorée des risques hépatiques et cardio-vasculaires.",
                        "75% · Réduction du temps d'acquisition.",
                        "1 · Premier système au monde de guidage par vibration.",
                    ],
                    tags: ["C++", "Embarqué", "Algorithmes", "Ultrasons","Conan","Chocolatey", "TeamCity", "CI/CD", "DevOps"],
                },
                {
                    company: "Navya Mobility",
                    logoKey: "navya",
                    role: "Ingénieur logiciel et Scrum Master",
                    experienceType: "consultant",
                    period: "mars 2021 - septembre 2022",
                    duration: "1 an 7 mois",
                    location: "Paris",
                    project: "Développement de solutions logicielles pour le pilotage et le diagnostique de navettes autonomes.",
                    missions: [
                        "Architecture et développement logiciel.",
                        "Développement des actions du véhicule (propulsion, freinage, direction) et de son habitacle (portes, lumières, confort, etc.).",
                        "Conception des outils de diagnostic du véhicule (boîtes noires).",
                        "Migration d'OS Windows vers Linux.",
                        "Support DevOps.",
                        "Développement d'outils d'intégration et livraison continu.",
                        "Animation des réunions Agile/Scrum (planning, retrospective, etc.).",
                        "Gestion de projet Agile/Scrum.",
                        "Formation aux projets et pratiques de développement.",
                    ],
                    achievements: [
                        "Refonte architecturale complète des composants logiciels pour 2 nouveaux modèles de véhicules.",
                        "Fonctionnalité de gestion autonome des actions de sécurité et de diagnostic : freinages et arrêts d'urgences, définition des séquences de mise en sécurité, centralisation des événements.",
                        "Refonte du composant boîte noire : dashboard pour la visualisation des événements et des données. Optimisation mémoire disque.",
                        "Migration et automatisation des pipelines CI/CD de TeamCity à GitLab CI.",
                    ],
                    results: [
                        "Process Agile/Scrum mis en place.",
                        "75% · Couverture de tests unitaires sur tous les composants.",
                        "60% · Diminution de la complexité cyclomatique des algorithmes.",
                        "50% · Diminution de la dette technique.",
                        "Nouvelle architecture des composants d'actions du véhicule.",
                        "Nouvelle interface de communication réseau avec interface graphique.",
                        "3 · Navettes déployées en autonomie 4 sur piste d'essai pour le Salon de l'Autonomie à Versailles.",
                    ],
                    tags: ["C++", "Python", "CAN", "Linux", "GitLab CI", "SonarQube","Qt Creator", "Véhicules autonomes", "Agile", "Scrum"],
                },
                {
                    company: "Störk-Tronic",
                    logoKey: "stoerk-tronic",
                    role: "Ingénieur R&D logiciel, Product Owner",
                    period: "octobre 2018 - février 2021",
                    duration: "2 ans 5 mois",
                    location: "Lyon, France & Stuttgart, Allemagne",
                    project: "Développement d'applications middleware embarquées et graphiques pour des systèmes de régulation thermique industriels.",
                    missions: [
                        "Développement d'applications middleware pour des solutions IoT et Cloud.",
                        "Développement et intégration d'applications embarquées.",
                        "Développement Cloud.",
                        "Développement des tests unitaires et fonctionnels.",
                        "Product Owner de l'interface graphique Web.",
                        "Design et développement de l'interface graphique.",
                        "Développement des tests unitaires de l'interface graphique.",
                        "Intégration continue des applications.",
                    ],
                    achievements: [
                        "Développement de pipelines CI/CD automatisés.",
                        "Développement d'une interface utilisateur embarquée pour le contrôle d'un four connecté.",
                        "Formation autodidacte en JavaScript/React.",
                        "Développement frontend d'une interface web embarquée.",
                    ],
                    results: [
                        "24h · Temps de livraison de code réduit à 15 minutes.",
                        "1 · Première expérience métier de développeur middleware/embarqué et web.",
                    ],
                    tags: ["C++", "JavaScript", "ReactJS", "NodeJS", "IoT","Conan", "Qt Creator", "Jenkins", "GitLab", "CI/CD", "Product Owner", "Frontend", "Middleware", "Cloud", "Embarqué"],
                },
                {
                    company: "University of Strathclyde",
                    logoKey: "strathclyde",
                    role: "Ingénieur de recherche",
                    experienceType: "stage",
                    period: "septembre 2017 - juin 2018",
                    duration: "10 mois",
                    location: "Glasgow, Royaume-Uni",
                    project: "Projet de recherche et développement d'un tracker de mouvements pour les nageurs professionnels.",
                    achievements: [
                        "Recherche et étude bibliographique.",
                        "Etude cinématique, mécanique et architecturale du prototype.",
                        "Acquisition, traitement et fusion des données (capteurs photo-électriques, roues codeuses).",
                        "Protocole Bluetooth Low Energy pour la transmission des données.",
                        "Définition et développement d'une base de données.",
                        "Implémentation d'algorithmes statistiques.",
                        "Conception d'une application Android.",
                        "Publication d'un mémoire de recherche.",
                    ],
                    results: [
                        "Système hors-bassin d'analyses de performances pour les nageurs.",
                        "15 000 · Lignes de code.",
                    ],
                    tags: ["Biomechanics", "Java", "Bluetooth Low Energy", "Android", "Base de données", "Statistiques", "Recherche"],
                },
                {
                    company: "Bontronic",
                    logoKey: "bontronic",
                    role: "Ingénieur en robotique",
                    experienceType: "stage",
                    period: "mai 2017 - août 2017",
                    duration: "4 mois",
                    location: "Troisdorf, Allemagne",
                    project: "Etude et conception d'un bras robotisé pour l'industrie automobile.",
                    achievements: [
                        "Etude de faisabilité.",
                        "Etude architecturale.",
                        "Etude de Compatibilité Electromagnétique (CEM).",
                        "Refonte de l'architecture des états du robot.",
                    ],
                    tags: ["C", "C++", "Robotique", "NXP", "Automobile", "Industriel"],
                },
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Projects                                                           */
    /* ------------------------------------------------------------------ */
    projects: {
        title: {
            en: <>My <strong className="purple">Projects</strong></>,
            fr: <>Mes <strong className="purple">projets</strong></>,
        },
        subtitle: {
            en: "Here are a few projects I've worked on.",
            fr: "Voici quelques projets sur lesquels j'ai travaillé.",
        },
        entries: {
            en: [
                {
                    title: "Autonomous inspection rover for solar farms",
                    description:
                        "Design and development of an autonomous rover for defect inspection in solar farms. Autonomous navigation and anomaly detection on photovoltaic panels.",
                    imgAlt: "Autonomous inspection rover",
                    stack: ["ROS2", "Nav2", "C++", "OpenCV", "FoxGlove", "Docker", "NVIDIA Jetson"],
                },
                {
                    title: "Wi-Fi robotic car",
                    description:
                        "Design and development of an Android application to drive a robotic car via Wi-Fi. Real-time communication, intuitive user interface, embedded command handling, PID control and full electronic integration.",
                    imgAlt: "Robotic control and development",
                    stack: ["Android", "Wi-Fi", "Real-time", "Embedded"],
                },
                {
                    title: "REST API Fin-Tech",
                    description:
                        "Python project in two apps: a REST API for a web metadata database, and a service exposing a dictionary (15min-delayed BTC/EUR, ECB monthly EUR→GBP rate, BTC in GBP). API documented via two Postman collections (JSON). Deploy: venv + requirements.txt.",
                    imgAlt: "Python API",
                    stack: ["Python", "REST", "PostgreSQL", "Web crawler"],
                },
                {
                    title: "ARM energy optimization",
                    description:
                        "Modelling and energy optimization of multi-core ARM processors. Power consumption analysis and power management strategies.",
                    imgAlt: "ARM processor optimization",
                    stack: ["Modelling", "ARM", "Multi-core", "Energy optimization"],
                },
                {
                    title: "Towerfall-style video game (C)",
                    description:
                        "2D game engine in C (Towerfall-inspired, local multiplayer). Architecture and game loop from scratch; 2D physics, collisions and rendering.",
                    imgAlt: "2D Towerfall-style game",
                    stack: ["C", "2D game", "Local multiplayer", "Physics"],
                },
            ],
            fr: [
                {
                    title: "Rover autonome d'inspection de fermes solaires",
                    description:
                        "Conception et développement d'un rover autonome d'inspection de défauts en fermes solaires. Navigation autonome et détection des anomalies sur panneaux photovoltaïques.",
                    imgAlt: "Rover autonome d'inspection",
                    stack: ["ROS2", "Nav2", "C++", "OpenCV", "FoxGlove", "Docker", "NVIDIA Jetson"],
                },
                {
                    title: "Voiture robotisée Wi-Fi",
                    description:
                        "Conception et développement d'une application Android pour piloter une voiture robotisée via Wi-Fi. Communication en temps réel, interface utilisateur intuitive, gestion embarquée des commandes, contrôle PID et intégration électronique complète.",
                    imgAlt: "Contrôle robotisé et développement",
                    stack: ["Android", "Wi-Fi", "Temps réel", "Embedded"],
                },
                {
                    title: "API REST Fin-Tech",
                    description:
                        "Projet Python en deux apps : API REST pour une base de métadonnées web, et un service exposant un dictionnaire (BTC/EUR 15 min, taux mensuel EUR→GBP BCE, BTC en GBP). API documentée par deux collections Postman (JSON). Déploiement : venv + requirements.txt.",
                    imgAlt: "API Python",
                    stack: ["Python", "REST", "PostgreSQL", "Web crawler"],
                },
                {
                    title: "Optimisation énergétique ARM",
                    description:
                        "Modélisation et optimisation énergétique des processeurs multi-cœurs ARM. Analyse des consommations et stratégies de gestion de la puissance.",
                    imgAlt: "Optimisation processeurs ARM",
                    stack: ["Modélisation", "ARM", "Multi-cœur", "Optimisation énergétique"],
                },
                {
                    title: "Jeu vidéo style Towerfall (C)",
                    description:
                        "Moteur de jeu 2D en C (inspiré Towerfall, multijoueur local). Architecture et boucle de jeu de zéro ; physique 2D, collisions et rendu.",
                    imgAlt: "Jeu 2D Towerfall",
                    stack: ["C", "Jeu 2D", "Multijoueur local", "Physique"],
                },
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Education / Formation                                              */
    /* ------------------------------------------------------------------ */
    education: {
        labels: {
            subjects: { en: "Subjects", fr: "Matières" },
        },
        title: {
            en: <>Education & Certifications</>,
            fr: <>Formations & certifications</>,
        },
        subtitle: {
            en: "Degrees, courses and certifications.",
            fr: "Diplômes, formations et certifications.",
        },
        entries: {
            en: [
                {
                    school: "University of Strathclyde",
                    logoKey: "strathclyde",
                    degree: "Master of Engineering: Robotics, Networks and Electronics Engineering",
                    period: "2017 – 2018",
                    mention: "International Studies Award",
                    tags: ["Robotics", "Networks", "Electrical Engineering", "Embedded Systems", "Communication Systems", "Machine Learning", "Computer Vision", "International Studies"],
                },
                {
                    school: "INSA Rennes",
                    logoKey: "insa",
                    degree: "Engineering degree: Electronics and Industrial Computer Science, research specialization",
                    period: "2012 – 2017",
                    tags: ["Electronics", "Industrial Computing", "Embedded Systems", "Signal Processing", "Control Systems", "Automation", "Programming", "Research", "Real-time Systems", "Computer Architecture"],
                },
                {
                    school: "Lycée Pontus de Tyard",
                    logo: null,
                    degree: "European Baccalaureate: Sciences, Mathematics and English",
                    period: "2009 – 2012",
                    mention: "Distinction",
                    tags: ["Mathematics", "Sciences", "Physics", "English"],
                },
            ],
            fr: [
                {
                    school: "University of Strathclyde",
                    logoKey: "strathclyde",
                    degree: "Master of Engineering - Ingénierie robotique, réseaux et électronique",
                    period: "sept. 2017 – août 2018",
                    mention: "Mention International Studies",
                    tags: ["Robotique", "Réseaux", "Électronique", "Automatique", "Systèmes embarqués", "Systèmes de communication", "Traitement du signal", "Machine Learning", "Vision par ordinateur", "International Studies"],
                },
                {
                    school: "INSA Rennes",
                    logoKey: "insa",
                    degree: "Diplôme d'ingénieur, Electronique et Informatique Industrielle, spécialisation recherche",
                    period: "sept. 2012 – juin 2017",
                    tags: ["Électronique", "Informatique industrielle", "Systèmes embarqués", "Traitement du signal", "Automatique", "Automatisation", "Programmation", "Recherche", "Temps réel", "Architecture des ordinateurs"],
                },
                {
                    school: "Lycée Pontus de Tyard",
                    logo: null,
                    degree: "Baccalauréat scientifique européen, S-SVT, Mathématiques Anglais",
                    period: "sept. 2009 – juin 2012",
                    mention: "Mention Très Bien",
                    tags: ["Mathématiques", "Sciences","Physique-Chimie", "Anglais"],
                },
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  FindMeOn                                                           */
    /* ------------------------------------------------------------------ */
    findMeOn: {
        title: {
            en: <>Get In <strong className="purple">Touch</strong></>,
            fr: <>Me <strong className="purple">contacter</strong></>,
        },
        subtitle: {
            en: (
                <>
                    Whether you lead the{" "}
                    <strong className="purple">R&amp;D of a company</strong>{" "}
                    in full acceleration or drive{" "}
                    <strong className="purple">innovation</strong>{" "}
                    within a research center, I&apos;d be delighted to connect with you.
                    Contact me to turn your most complex concepts into real, robust, deployable solutions.
                    <br /><br />
                    Are you a{" "}
                    <strong className="purple">technology partner</strong> or an{" "}
                    <strong className="purple">engineering design office</strong>{" "}
                    looking for cutting-edge expertise in robotics, software architecture, or Computer Vision&nbsp;?
                    Let&apos;s meet and bring your most ambitious projects to life.
                </>
            ),
            fr: (
                <>
                    Que vous pilotiez la{" "}
                    <strong className="purple">R&amp;D d&apos;une entreprise</strong>{" "}
                    en pleine accélération ou que vous dirigiez l&apos;<strong className="purple">innovation</strong>{" "}
                    au sein d'un centre de recherche, je serais ravi d'échanger avec vous. Contactez-moi pour transformer vos concepts les plus complexes en solutions réelles, robustes et déployables.
                    <br /><br />
                    Vous êtes un{" "}
                    <strong className="purple">partenaire technologique</strong> ou un{" "}
                    <strong className="purple">bureau d&apos;études</strong>{" "}
                    à la recherche d'une expertise de pointe en robotique, architecture logicielle ou Computer Vision&nbsp;?
                    Rencontrons-nous pour donner vie à vos projets les plus ambitieux.
                </>
            ),
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Footer                                                             */
    /* ------------------------------------------------------------------ */
    footer: {
        allRightsReserved: {
            en: "All rights reserved",
            fr: "Tous droits réservés",
        },
    },
};

export default translations;
