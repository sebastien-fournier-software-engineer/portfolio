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
        iAm: { en: "I'M", fr: "Je suis" },
        contactBtn: { en: "Contact Me", fr: "Contactez-moi" },
        downloadCV: { en: "Download Skills Portfolio", fr: "Télécharger Dossier de compétences" },
        scrollHint: { en: "Scroll with your mouse", fr: "Défiler avec la souris" },
    },

    /* ------------------------------------------------------------------ */
    /*  Typewriter                                                         */
    /* ------------------------------------------------------------------ */
    typewriter: {
        strings: {
            en: [
                "Software Engineer",
                "Architect",
                "Robotics",
                "Computer Vision",
                "Machine Learning Engineer",
                "Edge AI",
                "Freelancer",
            ],
            fr: [
                "Ingénieur Logiciel",
                "Architecte",
                "Robotique",
                "Computer Vision",
                "Machine Learning Engineer",
                "Edge AI",
                "Freelance",
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
            en: "« Benefit from expertise in Software Architecture, Computer Vision and Machine Learning. »",
            fr: "« Bénéficiez d'une expertise en Architecture Logicielle, Computer Vision et Machine Learning. »",
        },
        body: {
            en: (
                <>
                    Senior software engineer specialized in C/C++ and Python, I work on software architecture,
                    software and embedded development, and the training and deployment of machine learning
                    and computer vision models, from scoping to production.
                    <br /><br />
                    Autonomous vehicles, mobile robotics, medical imaging, industry, agritech: I design robust
                    systems for servers and constrained targets.
                    <br /><br />
                    My clients appreciate iterative, pragmatic, results-oriented support: meeting
                    deadlines, putting robust, maintainable, and observable solutions into
                    production.
                    <br /><br />
                    Beyond technical expertise, I emphasize knowledge transfer, clear communication,
                    and collective intelligence to align business lines around a common vision,
                    in both French and English.
                    <br /><br />
                    Let&apos;s move forward together to turn your technological visions into a
                    sustainable reality.
                </>
            ),
            fr: (
                <>
                    Ingénieur logiciel senior spécialisé en C/C++ et Python, j'interviens sur l'architecture,
                    le développement logiciel ou embarqué, l'entraînement et le déploiement de modèles
                    de Machine Learning et Computer Vision — du cadrage à la mise en production.
                    <br /><br />
                    Véhicules autonomes, robotique mobile, imagerie médicale, industrie, agritech : 
                    je conçois des systèmes robustes sur serveur ou sur cibles contraintes.
                    <br /><br />
                    Mes clients apprécient un accompagnement itératif et pragmatique, orienté résultats :
                    respect des délais, mise en production de solutions
                    robustes, maintenables et observables.
                    <br /><br />
                    Au-delà de l&apos;expertise technique, je mets l&apos;accent sur la
                    transmission, la clarté de la communication et l&apos;intelligence collective,
                    pour aligner les métiers autour d&apos;une vision commune, en français comme en
                    anglais.
                    <br /><br />
                    Avançons ensemble pour transformer vos visions technologiques en une réalité durable.
                </>
            ),
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Skills                                                             */
    /* ------------------------------------------------------------------ */
    skills: {
        title: {
            en: <>Professional <strong className="purple">Skillset</strong></>,
            fr: <>Compétences <strong className="purple">professionnelles</strong></>,
        },
        valuePillarsTitle: {
            en: "What my clients value",
            fr: "Ce que mes clients apprécient",
        },
        valuePillars: {
            delivery: {
                title: { en: "Pragmatism", fr: "Pragmatisme" },
                description: {
                    en: "Meet your deadlines, clear the backlog, deliver results.",
                    fr: "Respectez vos deadlines, dépilez le backlog, livrez les résultats.",
                },
            },
            leadership: {
                title: { en: "Collective intelligence", fr: "Intelligence collective" },
                description: {
                    en: "Motivate the team, promote communication between disciplines, build a strategic vision",
                    fr: "Animez l’équipe, favorisez l'échange entre les métiers, élaborez une vision stratégique.",
                },
            },
            knowledge: {
                title: { en: "Knowledge transfer", fr: "Transmission" },
                description: {
                    en: "Natural pedagogy, clear documentation, upskilling of your teams.",
                    fr: "Pédagogie naturelle, documentation claire, montée en compétences de vos équipe.",
                },
            },
            expertise: {
                title: { en: "Systemic approach", fr: "Vision systémique" },
                description: {
                    en: "End-to-end expertise on your projects, from design to deployment.",
                    fr: "Une expertise complète sur vos projets, de la conception au déploiement.",
                },
            },
        },
        categoriesTitle: {
            en: "My areas of expertise",
            fr: "Mes domaines d'expertise",
        },
        categories: {
            architecture: {
                title: { en: "Architecture & Software Development", fr: "Architecture et développement logiciel" },
                description: {
                    en: "Design and development of modular and robust systems. Modern and maintainable code. Clean and Event-Driven architecture. SOLID principles. Microservices.",
                    fr: "Conception et développement de systèmes modulaires et robustes. Code moderne et maintenable. Architecture Clean et Event Driven. Principes SOLID. Microservices.",
                },
                tech: ["C++", "Python", "SQL", "Microservices", "FastAPI", "Numpy", "Pandas"],
            },
            computerVision: {
                title: { en: "Computer Vision & Machine Learning", fr: "Computer Vision & Machine Learning" },
                description: {
                    en: "Computer vision pipelines. Detection, segmentation, tracking. Training, tuning, optimization. Deep Learning. Deployment on server or embedded targets.",
                    fr: "Pipelines de perception. Détection, segmentation d'images, tracking. Entrainement, tuning, optimisation. Deep Learning. Déploiement serveur ou embarqué.",
                },
                tech: ["OpenCV", "PyTorch", "TensorFlow","YOLOv8", "HuggingFace", "TensorRT", "ONNX", "Scikit-learn"],
            },
            devops: {
                title: { en: "Automation & DevOps", fr: "Automatisation & DevOps" },
                description: {
                    en: "Automation of integration and delivery pipelines (CI/CD), observability.",
                    fr: "Automatisation de pipelines d'intégration et livraison continue (CI/CD), observabilité.",
                },
                tech: ["Git", "GitLab CI", "GitHub Actions", "Docker", "Grafana", "PlotJuggler", "FoxGlove"],
            },
            qa: {
                title: { en: "Q&A", fr: "Q&A" },
                description: {
                    en: "Unit and functional testing, non-regression.",
                    fr: "Tests unitaires et fonctionnels, non-régression.",
                },
                tech: ["Google Test", "Boost.test", "PyTest", "Robot Framework", "Cucumber"],
            },
            embedded: {
                title: { en: "Embedded Systems", fr: "Systèmes embarqués" },
                description: {
                    en: "Development of firmware and middleware for real-time systems. Hardware/software integration. Industrial protocols (CAN, I2C, serial).",
                    fr: "Développement firmware et middleware temps-réel. Intégration hardware/software. Protocoles industriels (CAN, I2C, série).",
                },
                tech: ["NVIDIA Jetson", "STM32", "Raspberry Pi", "Arduino", "FreeRTOS", "Linux"],
            },
            robotics: {
                title: { en: "Robotics", fr: "Robotique" },
                description: {
                    en: "Sensor fusion, 2D/3D localization and mapping, navigation, perception, obstacle detection and avoidance.",
                    fr: "Fusion de capteurs, localisation et cartographie 2D/3D, navigation, perception,détection et évitement d'obstacles.",
                },
                tech: ["ROS2", "Nav2", "SLAM Toolbox", "RTAB-Map", "Cartographer"],
            },
            simulation: {
                title: { en: "Simulation", fr: "Simulation" },
                description: {
                    en: "Environment simulation. Reducing the Sim-to-Real gap for robust deployment.",
                    fr: "Simulation d'environnement. Réduction du « Sim-to-Real gap » pour un déploiement robuste.",
                },
                tech: ["Gazebo", "Isaac Sim", "RViz"],
            },
            strategy: {
                title: { en: "Projects", fr: "Projets" },
                description: {
                    en: "Lead Developer. Technical referent. Writing studies and specifications. Technological watch.",
                    fr: "Lead Developer. Référent technique. Rédaction d’études et spécifications. Veille technologique."},
                tech: ["Agile", "Scrum", "V-Model", "Facilitation"],
            },
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Experiences / Clients                                              */
    /* ------------------------------------------------------------------ */
    experiences: {
        title: {
            en: <>Professional <strong className="purple">Experience</strong> & <strong className="purple">Clients</strong></>,
            fr: <>Expériences <strong className="purple">professionnelles</strong> & <strong className="purple">Clients</strong></>,
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
        },
        toggleExpand: { en: "Show details", fr: "Afficher le détail" },
        toggleCollapse: { en: "Hide details", fr: "Masquer le détail" },
        entries: {
            en: [
                {
                    company: "Freelance",
                    logo: null,
                    role: "Software and Computer Vision Engineer",
                    period: "May 2025 – Present",
                    startDate: "2025-05",
                    isCurrent: true,
                    location: "France",
                    project: "Software architecture, computer vision and machine learning, robotics development with perception and navigation under embedded constraints.",
                    missions: [
                        "Software architecture and development.",
                        "Computer vision, machine learning, and deep learning pipelines.",
                        "Detection, image segmentation, and automated tracking.",
                        "Training, fine-tuning, and integration.",
                        "Deployment on servers and embedded targets (Edge AI).",
                        "Embedded systems: real-time firmware and middleware development.",
                        "Robotics: sensor fusion, 2D/3D SLAM, trajectory planning, obstacle detection.",
                        "CI/CD automation and observability solutions.",
                        "Simulation.",
                        "QA with unit, functional, and non-regression tests.",
                        "Strategy and business vision.",
                    ],
                    achievements: [
                        "Design of an autonomous defect-detection rover for solar farms.",
                        "Creation of an optimized C++ library for image processing.",
                        "Implementation of obstacle detection algorithms for autonomous vehicles.",
                    ],
                    results: [
                        "30% · Inference time optimization.",
                        "35% · Increase in execution performance of developed applications.",
                        "50% · Reduction in development time thanks to the libraries and tools created.",
                    ],
                    tags: [
                        "C++",
                        "Python",
                        "OpenCV",
                        "PyTorch",
                        "TensorFlow",
                        "YOLOv8",
                        "Scikit-learn",
                        "HuggingFace",
                        "CI/CD",
                        "GitHub Actions",
                        "Docker",
                        "Linux",
                        "NVIDIA Jetson",
                        "FastAPI",
                        "ROS2",
                        "Nav2",
                        "slam_toolbox",
                        "RTAB-Map",
                        "PlotJuggler",
                        "FoxGlove",
                        "Gazebo",
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
                        "30 000 · Lines of code.",
                    ],
                    tags: ["C++", "Software solution architecture", "Unit testing", "Functional testing", "SonarQube", "Gherkin", "Computer Vision", "Digital image processing", "DICOM", "DDS", "Git", "Linux"],
                },
                {
                    company: "Up Technologies",
                    logoKey: "up-technologies",
                    role: "Software and Robotics Engineer",
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
                    role: "Software and Robotics Engineer, Scrum Master",
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
                        "Software architecture.",
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
            ],
            fr: [
                {
                    company: "Freelance",
                    logo: null,
                    role: "Ingénieur Logiciel et Computer Vision",
                    period: "mai 2025 – Aujourd'hui",
                    startDate: "2025-05",
                    isCurrent: true,
                    location: "France",
                    project: "Architecture logicielle, vision par ordinateur et machine learning, développement robotique avec perception et navigation sous contraintes embarquées.",
                    missions: [
                        "Architecture et développement logiciel.",
                        "Pipelines de Computer Vision & Machine Learning, Deep Learning.",
                        "Détection, segmentation d'images, tracking automatique.",
                        "Entraînement, fine-tuning, intégration.",
                        "Déploiement sur serveur et sur cibles embarquées (Edge AI).",
                        "Systèmes embarqués : développement firmware et middleware temps-réel.",
                        "Robotique : fusion de capteurs, SLAM 2D/3D, planification de trajectoires, détection d'obstacles.",
                        "Automatisation CI/CD, solutions d'observabilité.",
                        "Simulation.",
                        "Q&A avec tests unitaires, fonctionnels et non-régression.",
                        "Stratégie et vision business.",
                    ],
                    achievements: [
                        "Conception d’un rover autonome de détection de défauts dans les fermes solaires.",
                        "Création d'une bibliothèque C++ optimisée pour traitement d'images.",
                        "Implémentation d'algorithmes de détection d'obstacles pour véhicules autonomes.",
                    ],
                    results: [
                        "30% · Optimisation du temps d’inférence.",
                        "35% · Augmentation des performances d'exécution des applications développées.",
                        "50% · Réduction du temps de développement grâce aux bibliothèques et outils créés.",
                    ],
                    tags: [
                        "C++",
                        "Python",
                        "OpenCV",
                        "PyTorch",
                        "TensorFlow",
                        "YOLOv8",
                        "Scikit-learn",
                        "HuggingFace",
                        "CI/CD",
                        "GitHub Actions",
                        "Docker",
                        "Linux",
                        "NVIDIA Jetson",
                        "FastAPI",
                        "ROS2",
                        "Nav2",
                        "slam_toolbox",
                        "RTAB-Map",
                        "PlotJuggler",
                        "FoxGlove",
                        "Gazebo",
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
                        "30 000 · Lignes de code.",
                    ],
                    tags: ["C++", "Architecture de solutions logicielles", "Tests unitaires", "Tests fonctionnels", "SonarQube", "Langage Gherkin", "Computer Vision", "Traitement numérique des images", "DICOM", "DDS", "Git", "Linux"],
                },
                {
                    company: "Up Technologies",
                    logoKey: "up-technologies",
                    role: "Ingénieur Logiciel et Robotique",
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
                    role: "Ingénieur logiciel et Robotique, Scrum Master",
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
                        "Architecture logicielle.",
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
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Projects                                                           */
    /* ------------------------------------------------------------------ */
    projects: {
        title: {
            en: <>Projects</>,
            fr: <>Projets</>,
        },
        ongoing: { en: "Ongoing", fr: "En cours" },
        entries: {
            en: [
                {
                    title: "Autonomous inspection rover for solar farms",
                    description:
                        "Design and development of an autonomous rover for defect inspection in solar farms. Autonomous navigation, computer vision and machine learning for anomaly detection on photovoltaic panels.",
                    imgAlt: "Autonomous inspection rover",
                    stack: ["ROS2", "Nav2", "C++", "OpenCV", "Computer Vision", "Machine Learning", "FoxGlove", "Docker", "NVIDIA Jetson"],
                },
                {
                    title: "Wi-Fi robotic car",
                    description:
                    "Design and development of an Android application to drive a robotic car via Wi-Fi. Real-time communication, intuitive user interface, embedded command handling, PID control and full electronic integration.",
                    imgAlt: "Robotic control and development",
                    stack: ["Android", "Wi-Fi", "Real-time", "Embedded"],
                },
                {
                    title: "This portfolio",
                    description:
                        "Single-page portfolio built in ReactJS: hero, about, skills, experiences, projects, education and contact form. 3D Fibonacci sphere animation (Three.js). Bilingual FR/EN, responsive layout, Web3Forms for the contact form. Docker for local dev, CI/CD with GitHub Actions for build and deploy to GitHub Pages.",
                    imgAlt: "Portfolio logo",
                    stack: ["React", "Three.js", "Bootstrap", "Docker", "GitHub Actions", "GitHub Pages", "Web3Forms"],
                },
                {
                    title: "REST API Fin-Tech",
                    description:
                    "Python project in two apps: a REST API for a metadata database, and a service exposing a dictionary (15min-delayed BTC/EUR, ECB monthly EUR→GBP rate, BTC in GBP). API documented via two Postman collections (JSON). Deploy: venv + requirements.txt.",
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
                    title: "Towerfall-like video game (C)",
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
                        "Conception et développement d'un rover autonome d'inspection de défauts en fermes solaires. Navigation autonome, vision par ordinateur et machine learning pour la détection d'anomalies sur panneaux photovoltaïques.",
                    imgAlt: "Rover autonome d'inspection",
                    stack: ["ROS2", "Nav2", "C++", "OpenCV", "Computer Vision", "Machine Learning", "FoxGlove", "Docker", "NVIDIA Jetson"],
                },
                {
                    title: "Voiture robotisée Wi-Fi",
                    description:
                    "Conception et développement d'une application Android pour piloter une voiture robotisée via Wi-Fi. Communication en temps réel, interface utilisateur intuitive, gestion embarquée des commandes, contrôle PID et intégration électronique complète.",
                    imgAlt: "Contrôle robotisé et développement",
                    stack: ["Android", "Wi-Fi", "Temps réel", "Embedded"],
                },
                {
                    title: "Ce portfolio",
                    description:
                        "Portfolio single-page réalisé en ReactJS : hero, à propos, compétences, expériences, projets, formations et formulaire de contact. Animation 3D sphère de Fibonacci (Three.js). Bilingue FR/EN, mise en page responsive, Web3Forms pour le formulaire. Docker pour le dev local, CI/CD avec GitHub Actions pour le build et le déploiement sur GitHub Pages.",
                    imgAlt: "Logo du portfolio",
                    stack: ["React", "Three.js", "Bootstrap", "Docker", "GitHub Actions", "GitHub Pages", "Web3Forms"],
                },
                {
                    title: "API REST Fin-Tech",
                    description:
                        "Projet Python en deux apps : API REST pour une base de métadonnées, et un service exposant un dictionnaire (BTC/EUR 15 min, taux mensuel EUR→GBP BCE, BTC en GBP). API documentée par deux collections Postman (JSON). Déploiement : venv + requirements.txt.",
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
                    title: "Jeu vidéo type Towerfall (C)",
                    description:
                        "Moteur de jeu 2D en C (inspiré Towerfall, multijoueur local). Architecture et boucle de jeu de zéro ; physique 2D, collisions et rendu.",
                    imgAlt: "Jeu 2D Towerfall",
                    stack: ["C", "Jeu 2D", "Multijoueur local", "Physique"],
                },
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Education                                                           */
    /* ------------------------------------------------------------------ */
    education: {
        title: {
            en: <>Education & Certifications</>,
            fr: <>Formations & certifications</>,
        },
        entries: {
            en: [
                {
                    school: "University of Strathclyde",
                    logoKey: "strathclyde",
                    degree: "Master of Engineering: Robotics, Networks and Electronics Engineering",
                    period: "2018",
                    mention: <>International Studies<br />Award</>,
                },
                {
                    school: "INSA Rennes",
                    logoKey: "insa",
                    degree: "Engineering degree: Electronics and Industrial Computer Science, research specialization",
                    period: "2017",
                },
            ],
            fr: [
                {
                    school: "University of Strathclyde",
                    logoKey: "strathclyde",
                    degree: "Master of Engineering - Ingénierie robotique, réseaux et électronique",
                    period: "2018",
                    mention: <>Mention<br />International Studies</>,
                },
                {
                    school: "INSA Rennes",
                    logoKey: "insa",
                    degree: "Diplôme d'ingénieur, Electronique et Informatique Industrielle, spécialisation recherche",
                    period: "2017",
                },
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  FindMeOn                                                           */
    /* ------------------------------------------------------------------ */
    findMeOn: {
        title: {
            en: <>Contact <strong className="purple">me</strong></>,
            fr: <>Contactez-<strong className="purple">moi</strong></>,
        },
        cardIntro: {
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
        formFirstName: { en: "First name", fr: "Prénom" },
        formFirstNamePlaceholder: { en: "John", fr: "Jean" },
        formLastName: { en: "Last name", fr: "Nom" },
        formLastNamePlaceholder: { en: "Doe", fr: "Dupont" },
        formEmail: { en: "Email", fr: "Email" },
        formEmailPlaceholder: { en: "you@example.com", fr: "vous@exemple.com" },
        formPhone: { en: "Phone (optional)", fr: "Téléphone (facultatif)" },
        formPhonePlaceholder: { en: "+1 234 567 8900", fr: "+33 6 12 34 56 78" },
        formMessageLabel: { en: "Message", fr: "Message" },
        formMessagePlaceholder: {
            en: "Describe your project or question...",
            fr: "Décrivez votre projet ou question...",
        },
        formSend: { en: "Send", fr: "Envoyer" },
        calendlyCta: { en: "Book a 15-min call", fr: "Réserver un appel de 15 min" },
        formSubmitSending: { en: "Sending…", fr: "Envoi en cours…" },
        formSubmitSuccess: {
            en: "Message sent successfully. I'll get back to you soon.",
            fr: "Message envoyé. Je vous répondrai bientôt.",
        },
        formSubmitError: {
            en: "Something went wrong. Please try again or email me directly.",
            fr: "Une erreur s'est produite. Réessayez ou écrivez-moi directement.",
        },
        formErrorRequired: {
            en: "This field is required.",
            fr: "Ce champ est obligatoire.",
        },
        formErrorEmailInvalid: {
            en: "Please enter a valid email address (e.g. name@example.com).",
            fr: "Veuillez saisir une adresse email valide (ex. nom@exemple.com).",
        },
        formErrorPhoneInvalid: {
            en: "Please enter a valid international number (e.g. +33 6 12 34 56 78 or +1 234 567 8900). Between 10 and 15 digits.",
            fr: "Veuillez saisir un numéro international valide (ex. +33 6 12 34 56 78). Entre 10 et 15 chiffres.",
        },
        emailCopyHint: {
            en: "Click to copy to clipboard",
            fr: "Cliquer pour copier dans le presse-papier",
        },
        emailCopied: {
            en: "Copied to clipboard",
            fr: "Copié dans le presse-papier",
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
