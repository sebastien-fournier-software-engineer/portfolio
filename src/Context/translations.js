/**
 * Centralised translation dictionary for the portfolio.
 *
 * Structure:  translations.<section>.<key>  →  { en: "…", fr: "…" }
 *
 * To add a new language later, simply add a third property to each entry
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
                "Robotics Engineer",
                "Machine Learning & AI Expert",
                "Freelancer",
                "Software Architect",
                "Open Source Contributor",
            ],
            fr: [
                "Ingénieur Robotique",
                "Expert Machine Learning & IA",
                "Freelance",
                "Architecte Logiciel",
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
            en: "« Who am I? »",
            fr: "« Qui suis-je ? »",
        },
        body: {
            en: (
                <>
                    Hybrid Robotics / Software engineer with 6 years of experience
                    in healthcare, industry, and transportation sectors, I turn
                    complex concepts into high-performance systems. At the
                    intersection of software architecture, advanced robotics, and
                    embedded intelligence, I work to ensure that technological
                    innovation translates into reliable operational reality.
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
                    Ingénieur au profil hybride Robotique / Logiciel avec 6 ans d&apos;expérience
                    dans les secteurs de la santé, de l&apos;industrie et des transports,
                    je transforme des concepts complexes en systèmes performants. À
                    l&apos;intersection de l&apos;architecture logicielle, de la robotique
                    avancée et de l&apos;intelligence embarquée, j&apos;interviens pour
                    garantir que l&apos;innovation technologique se traduise par une
                    réalité opérationnelle fiable.
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
                title: { en: "Deliver", fr: "Livrer" },
                description: {
                    en: "Meet your deadlines, clear the backlog, deliver the results.",
                    fr: "Respectez vos deadlines, dépilez le backlog, livrez les résultats.",
                },
            },
            leadership: {
                title: { en: "Facilitate", fr: "Animer" },
                description: {
                    en: "Foster communication and collaboration across disciplines.",
                    fr: "Favoriser la communication et la collaboration entre métiers.",
                },
            },
            expertise: {
                title: { en: "Drive", fr: "Porter" },
                description: {
                    en: "End-to-end expertise on your projects, from design to deployment.",
                    fr: "Une expertise complète sur vos projets, de la conception au déploiement.",
                },
            },
            knowledge: {
                title: { en: "Transfer", fr: "Transmettre" },
                description: {
                    en: "Preserve expertise and knowledge.",
                    fr: "Conservez le savoir-faire et les connaissances.",
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
                    en: "Navigation and control, sensor fusion, 2D/3D localization, mapping, path planning, obstacle detection and avoidance.",
                    fr: "Navigation et contrôle, fusion de capteurs, localisation 2D/3D, mapping, planification de trajectoires, détection et évitement d'obstacles.",
                },
                tech: ["ROS2", "Nav2", "SLAM Toolbox", "RTAB-Map", "Cartographer"],
            },
            computerVision: {
                title: { en: "Computer Vision & Edge\u00A0AI", fr: "Computer Vision & Edge\u00A0AI" },
                description: {
                    en: "Train, integrate, optimize and industrialize your perception / machine learning pipelines.",
                    fr: "Entraîner, intégrer, optimiser, industrialiser vos pipelines de perception / machine learning.",
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
    /*  AboutCard                                                          */
    /* ------------------------------------------------------------------ */
    aboutCard: {
        intro: {
            en: (
                <>
                    Hi everyone! I'm <span className="purple">Sébastien Fournier</span>{" "}
                    from <span className="purple">France</span>.
                </>
            ),
            fr: (
                <>
                    Bonjour à tous ! Je suis <span className="purple">Sébastien Fournier</span>{" "}
                    originaire de <span className="purple">France</span>.
                </>
            ),
        },
        job: {
            en: (
                <>
                    I'm currently working as a{" "}
                    <span className="purple">Software Developer</span>.
                </>
            ),
            fr: (
                <>
                    Je travaille actuellement en tant que{" "}
                    <span className="purple">développeur logiciel</span>.
                </>
            ),
        },
        activities: {
            en: "Outside of coding, I love engaging in activities that keep me creative and inspired:",
            fr: "En dehors du code, j'adore m'adonner à des activités qui stimulent ma créativité et mon inspiration :",
        },
        activityList: {
            en: ["Playing Games 🎮", "Writing Tech Blogs ✍️", "Traveling and Exploring New Places 🌍"],
            fr: ["Jouer aux jeux vidéo 🎮", "Écrire des articles tech ✍️", "Voyager et découvrir de nouveaux endroits 🌍"],
        },
        quote: {
            en: '"Strive to build things that make a difference!"',
            fr: '"Efforçons-nous de créer des choses qui font la différence !"',
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Experiences / Clients                                              */
    /* ------------------------------------------------------------------ */
    experiences: {
        title: {
            en: <>Professional <strong className="purple">Experience</strong> & <strong className="purple">Clients</strong></>,
            fr: <>Expériences <strong className="purple">professionnelles</strong> & <strong className="purple">clients</strong></>,
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
            tags: { en: "Tags", fr: "Tags" },
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
                    role: "Robotics Engineer",
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
                    role: "Technical Project Manager",
                    period: "May 2024 – August 2024",
                    duration: "4 months",
                    location: "Villeurbanne, France",
                    project: "Management of the company's technical projects for the design and development of autonomous shuttles.",
                    missions: [
                        "Time and cost planning.",
                        "Strategic arbitration.",
                        "Product study.",
                        "Functional requirements analysis.",
                        "System specifications writing.",
                    ],
                    achievements: [
                        "Client needs study for the vehicle supervision system (level 4 autonomy).",
                        "Product study and analysis for MVP development.",
                        "MVP specifications writing.",
                    ],
                    results: [
                        "1 · Marketable MVP.",
                        "1 · Vehicle operating in level 4 autonomy (no human on board to supervise the vehicle).",
                        "1 · Implementation of business processes to synchronize project stakeholders.",
                        "1 · Complete 1-year roadmap.",
                    ],
                    tags: ["Autonomous Vehicles", "Project Management", "Specifications", "MVP"],
                },
                {
                    company: "GE HealthCare",
                    role: "Lead Software Engineer",
                    experienceType: "consultant",
                    period: "August 2023 – April 2024",
                    duration: "9 months",
                    location: "Versailles, France",
                    project: "Architecture and development of an application service for image generation and import in mammography.",
                    missions: [
                        "C++ application development in medical image acquisition (mammography).",
                        "Software architecture.",
                        "Ensuring patient data integrity and security.",
                        "Unit and functional testing, integration, validation.",
                        "Agile planning.",
                        "Support to other teams (other devs, DevOps, Validation, System).",
                        "Client reference.",
                    ],
                    achievements: [
                        "Architectural design of the software service.",
                        "Complete development and delivery of the software component.",
                        "Development of a functional test suite with implementation of a new framework.",
                        "Component tested and operational in real-world conditions.",
                        "Improved robustness of the image acquisition system.",
                    ],
                    results: [
                        "Enriched and reliable patient data.",
                        "Import/export of images to imaging devices from other manufacturers.",
                        "75% · Test coverage.",
                        "95% · Faster execution of the functional test suite.",
                        "50000 · Lines of code.",
                    ],
                    tags: ["C++", "Software solution architecture", "Unit testing", "Functional testing", "SonarQube", "Gherkin", "Computer Vision", "Digital image processing", "Git", "Linux"],
                },
                {
                    company: "Up Technologies",
                    role: "Engineering Office - Robotics Engineer and Project Manager",
                    period: "March 2023 – August 2023",
                    duration: "6 months",
                    location: "Lyon, France",
                    project: "Delivery of robotics projects, firmware and applications on a time-and-materials basis.",
                    projects: [
                        {
                            title: "Project 1: Development of an embedded real-time voice recognition system.",
                            missions: [
                                "Project management.",
                                "Client pre-sales.",
                                "System, firmware and software architecture.",
                                "API development (Python).",
                                "Prototyping and development on electronic board (Embedded-C).",
                                "Firmware and application configuration and development.",
                                "Audio encoding.",
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
                            tags: ["C++", "Python", "Embedded-C", "DMA", "Neural network", "Real-time", "Audio", "LCD"],
                        },
                        {
                            title: "Project 2: Electronic and firmware redesign of a reception robot (R2D2 type).",
                            missions: [
                                "Electronic and firmware development and architecture.",
                                "Trajectory calculation and localization.",
                                "Obstacle detection.",
                                "Integration, testing and validation.",
                            ],
                            achievements: [
                                "Development of the control system (propulsion, braking, rotation, odometry) and detection.",
                                "System documentation of future computer vision features.",
                                "Development of a motorized mockup for robot testing.",
                                "3D printing of a complete full-scale functional prototype.",
                            ],
                            results: [
                                "Robot operable remotely with obstacle detection and localization.",
                                "200% · Time savings on debugging.",
                                "2 · Minutes to test the entire robot on mockup (vs 30 min before).",
                            ],
                            tags: ["C++", "Embedded-C", "Robotics", "Odometry", "Trajectory", "Localization", "Obstacle detection", "3D printing"],
                        },
                    ],
                },
                {
                    company: "Echosens",
                    role: "Software and Algorithms Engineer",
                    experienceType: "consultant",
                    period: "October 2022 – March 2023",
                    duration: "6 months",
                    location: "Paris",
                    project: "Development of an examination engine for diagnostic assistance in hepatology.",
                    missions: [
                        "C++ software development and architecture.",
                        "Support to the embedded team for ultrasound guidance and probe control.",
                        "Integration of calculation algorithms.",
                        "DevOps support.",
                        "Integration and continuous delivery CI/CD.",
                        "CI/CD pipeline automation.",
                    ],
                    achievements: [
                        "Development of a continuous ultrasound probe guidance solution.",
                        "Implementation of new measurement criteria for the calculation of hepatic and blood scores for patients.",
                    ],
                    results: [
                        "75% · Continuous ultrasound guidance instead of one-by-one: reduced acquisition time.",
                        "First vibration-guided system in the world.",
                        "Improved detection of hepatic and cardiovascular risks.",
                    ],
                    tags: ["C++", "Embedded", "Algorithms", "Ultrasound", "CI/CD", "DevOps"],
                },
                {
                    company: "Navya Mobility",
                    role: "Software Engineer and Scrum Master",
                    experienceType: "consultant",
                    period: "March 2021 – September 2022",
                    duration: "1 year 7 months",
                    location: "Paris",
                    project: "Development of software solutions for autonomous shuttle control, cabin management and black box diagnostics. Scrum Master.",
                    missions: [
                        "Development of C++/CAN middleware APIs for transmission of propulsion, braking, steering, cabin and lighting commands to vehicle equipment.",
                        "Software and architectural expertise.",
                        "Design of vehicle diagnostic tools (black boxes).",
                        "Windows to Linux OS migration.",
                        "Creation and support of internal CI/CD integration and delivery tools.",
                        "Support and debugging.",
                        "Facilitation of Agile/Scrum meetings.",
                        "Agile/Scrum project management.",
                        "Project coaching and development practices.",
                    ],
                    achievements: [
                        "Complete architectural redesign of software components for 2 new vehicle models.",
                        "Development of a safety and diagnostic management feature: centralization of component information, autonomous vehicle error management.",
                        "BlackBox component redesign: data processing for filtering and visualization on graphical interface. Disk partitioning optimization.",
                        "Migration and automation of CI/CD pipelines from TeamCity to GitLab CI.",
                    ],
                    results: [
                        "50% · Technical debt reduction.",
                        "75% · Unit test coverage across all components.",
                        "3 · Level 4 autonomous shuttles deployed on test track for the Autonomy Show in Versailles.",
                        "60% · Reduction in cyclomatic complexity of algorithms.",
                        "New architecture for vehicle equipment control components.",
                        "New RPC communication API with network mapping graphical interface.",
                        "Agile/Scrum workflow implementation.",
                    ],
                    tags: ["C++", "CAN", "Linux", "GitLab CI", "Autonomous vehicles", "Agile", "Scrum"],
                },
                {
                    company: "STÖRK-TRONIC, Störk GmbH & Co. KG",
                    role: "R&D Engineer & Product Owner",
                    period: "October 2018 – February 2021",
                    duration: "2 years 5 months",
                    location: "Lyon, France & Stuttgart, Germany",
                    project: "Design and development of embedded middleware applications for control/regulation systems in the heating and cooling industry.",
                    missions: [
                        "Development and integration of middleware applications for IoT and Cloud solutions.",
                        "Development and integration of embedded applications.",
                        "Remote operation and configuration via cloud.",
                        "Development of unit and functional tests.",
                        "Product Owner of the Web graphical interface (frontend).",
                        "Development and design of the graphical interface.",
                        "Development of unit tests for the graphical interface.",
                        "Continuous integration of applications.",
                    ],
                    achievements: [
                        "Creation of automated CI/CD pipelines from GitLab to Jenkins then Nexus.",
                        "Development of a cloud application for a connected oven touch tablet.",
                        "Self-taught training in JavaScript/React.",
                        "Frontend development of an embedded and standalone web interface.",
                    ],
                    results: [
                        "24h · Code delivery time reduced to 15 minutes.",
                        "Standardized middleware component, 100% cross-platform.",
                        "1 · First professional experience as middleware/embedded and web developer.",
                    ],
                    tags: ["C++", "JavaScript", "React", "IoT", "Jenkins", "GitLab", "CI/CD", "Product Owner"],
                },
                {
                    company: "University of Strathclyde",
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
                        "Creation of an off-pool performance analysis system for swimmers.",
                        "15 000 · Lines of code.",
                        "Functional prototype.",
                    ],
                    tags: ["Bluetooth LE", "Android", "Database", "Statistics", "Research"],
                },
                {
                    company: "Bontronic Steuerungstechnik",
                    role: "Robotics Engineer",
                    experienceType: "stage",
                    period: "May 2017 – August 2017",
                    duration: "4 months",
                    location: "Bonn region, Germany · On site",
                    project: "Participation in the design of a robotic arm for the automotive industry.",
                    tags: ["Robotics", "Automotive", "Industrial"],
                },
            ],
            fr: [
                {
                    company: "Freelance",
                    role: "Ingénieur en robotique",
                    period: "mai 2025 – Aujourd'hui",
                    startDate: "2025-05",
                    isCurrent: true,
                    location: "France",
                    project: "Conception robotique, architecture logicielle, développement d'algorithmes de perception et de navigation sous contraintes embarquées, optimisation Edge AI et DevOps.",
                    missions: [
                        "Architecture et développement logiciel.",
                        "Robotique et navigation avec fusion de capteurs, localisation, planification de trajectoires, détection et évitement d'obstacles.",
                        "Vision par ordinateur et Edge AI : entraînement, intégration, optimisation et déploiement de pipelines embarqués pour la perception et l’analyse d’images.",
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
                    role: "Chef de projets techniques",
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
                        "Gestion de projet",
                        "Spécifications systèmes",
                        "Roadmap",
                        "MVP",
                        "Stratégie produit",
                    ],
                },
                {
                    company: "GE HealthCare",
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
                    company: "Up Technologies - Bureau d'Étude",
                    role: "Ingénieur robotique et chef de projet",
                    period: "mars 2023 - août 2023",
                    duration: "6 mois",
                    location: "Lyon, France",
                    project: "Réalisation de projets robotiques, firmwares et applicatifs.",
                    projects: [
                        {
                            title: "Projet 1 : Système embarqué temps-réel de reconnaissance vocale.",
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
                            tags: ["Python", "C", "DMA", "Réseau neuronal", "Deep learning", "RTOS", "Audio", "LCD", "CI/CD"],
                        },
                        {
                            title: "Projet 2 : Robot autonome d'accueil.",
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
                            tags: ["C", "C++","ROS", "Robotique", "Odométrie", "Navigation", "Perception", "Lidar", "Caméra", "Impression 3D"],
                        },
                    ],
                },
                {
                    company: "Echosens",
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
                    tags: ["C++", "Embarqué", "Algorithmes", "Ultrasons", "CI/CD", "DevOps"],
                },
                {
                    company: "Navya Mobility",
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
                    tags: ["C++", "CAN", "Linux", "GitLab CI", "SonarQube", "Véhicules autonomes", "Agile", "Scrum"],
                },
                {
                    company: "Störk-Tronic",
                    role: "Ingénieur recherche et développement & Product Owner",
                    period: "octobre 2018 - février 2021",
                    duration: "2 ans 5 mois",
                    location: "Lyon, France & Stuttgart, Allemagne",
                    project: "Développement d'applications middleware embarquées et graphiquespour des systèmes de régulation thermique industriels.",
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
                    tags: ["C++", "JavaScript", "ReactJS", "NodeJS", "IoT", "Jenkins", "GitLab", "CI/CD", "Product Owner", "Frontend", "Middleware", "Cloud", "Embarqué", "Tests"],
                },
                {
                    company: "University of Strathclyde",
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
                        "Definition et développement d'une base de données.",
                        "Implémentation d'algorithmes statistiques.",
                        "Conception d'une application Android.",
                        "Publication d'un mémoire de recherche.",
                    ],
                    results: [
                        "Système hors-bassin d'analyses de performances pour les nageurs.",
                        "15 000 · Lignes de code.",
                    ],
                    tags: ["Java", "Bluetooth Low Energy", "Android", "Base de données", "Statistiques", "Recherche"],
                },
                {
                    company: "Bontronic Steuerungstechnik",
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
    /*  Education / Formation                                              */
    /* ------------------------------------------------------------------ */
    education: {
        labels: {
            subjects: { en: "Subjects", fr: "Matières" },
        },
        title: {
            en: <>Academic <strong className="purple">Formation</strong> & <strong className="purple">Certifications</strong></>,
            fr: <>Formation <strong className="purple">académique</strong> & <strong className="purple">certifications</strong></>,
        },
        subtitle: {
            en: "Degrees, courses and certifications.",
            fr: "Diplômes, formations et certifications.",
        },
        entries: {
            en: [
                {
                    school: "INSA Rennes",
                    degree: "Engineering degree, Electronics and Industrial Computer Science, research specialization",
                    period: "Sept. 2012 – June 2017",
                    tags: ["Electronics", "Industrial Computing", "Research"],
                },
                {
                    school: "University of Strathclyde",
                    degree: "Master of Engineering - MEng, Robotics, Networks and Electronics Engineering",
                    period: "Sept. 2017 – Aug. 2018",
                    description: "Mention \"International Studies\".",
                    tags: ["Robotics", "Networks", "Electronics"],
                },
                {
                    school: "Lycée Pontus de Tyard",
                    degree: "European Baccalaureate in Science, S-SVT stream, Mathematics and English",
                    period: "Sept. 2009 – June 2012",
                    description: "Grade: Distinction (Très Bien).",
                    tags: ["Mathematics", "Sciences", "English"],
                },
            ],
            fr: [
                {
                    school: "INSA Rennes",
                    degree: "Diplôme d'ingénieur, Electronique et Informatique Industrielle, spécialisation recherche",
                    period: "sept. 2012 – juin 2017",
                    tags: ["Électronique", "Informatique industrielle", "Recherche"],
                },
                {
                    school: "University of Strathclyde",
                    degree: "Master of Engineering - MEng, Ingénierie robotique, réseaux et électronique",
                    period: "sept. 2017 – août 2018",
                    description: "Mention \"International Studies\".",
                    tags: ["Robotique", "Réseaux", "Électronique"],
                },
                {
                    school: "Lycée Pontus de Tyard",
                    degree: "Baccalauréat scientifique européen, S-SVT, Mathématiques Anglais",
                    period: "sept. 2009 – juin 2012",
                    description: "Mention Très Bien.",
                    tags: ["Mathématiques", "Sciences", "Anglais"],
                },
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Projects                                                           */
    /* ------------------------------------------------------------------ */
    projects: {
        title: {
            en: <>My Recent <strong className="purple">Works</strong></>,
            fr: <>Mes <strong className="purple">projets</strong> récents</>,
        },
        subtitle: {
            en: "Here are a few projects I've worked on recently.",
            fr: "Voici quelques projets sur lesquels j'ai travaillé récemment.",
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
