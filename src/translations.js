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
    /*  Home (hero section)                                                */
    /* ------------------------------------------------------------------ */
    home: {
        greeting: { en: "Hello There!", fr: "Bonjour !" },
        iAm: { en: "I'M", fr: "JE SUIS" },
        contactBtn: { en: "Contact Me", fr: "Me contacter" },
        downloadCV: { en: "Download CV", fr: "Télécharger CV" },
    },

    /* ------------------------------------------------------------------ */
    /*  Typewriter strings                                                 */
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
    /*  About (À Propos)                                                   */
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
                    Hybrid engineer with 6 years of experience in healthcare,
                    industry, and transportation, I turn complex concepts into
                    high-performance systems. At the intersection of software
                    architecture, advanced robotics, and embedded intelligence, I
                    ensure that technological innovation translates                     into reliable
                    operational reality.
                    <br /><br />
                    <strong>My various roles</strong>
                    <ul>
                        <li>
                            <strong>The Architect:</strong> I structure your
                            projects to build robust, maintainable systems. My goal
                            is to ensure software reliability from the design phase
                            to support the long-term evolution of your solutions.
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
                    Ingénieur au profil hybride avec 6 ans d&apos;expérience
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
    /*  Skills / Compétences section                                      */
    /* ------------------------------------------------------------------ */
    skills: {
        skillset: {
            en: <>Professional <strong className="purple">Skillset</strong> & <strong className="purple">Tools</strong></>,
            fr: <>Compétences <strong className="purple">professionnelles</strong> & <strong className="purple">outils</strong></>,
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
            fr: "En dehors du code, j'adore m'adonner à des activités qui stimulent ma créativité :",
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
    /*  Projects section                                                   */
    /* ------------------------------------------------------------------ */
    projects: {
        heading: {
            en: <>My Recent <strong className="purple">Works</strong></>,
            fr: <>Mes <strong className="purple">projets</strong> récents</>,
        },
        subtitle: {
            en: "Here are a few projects I've worked on recently.",
            fr: "Voici quelques projets sur lesquels j'ai travaillé récemment.",
        },
    },

    /* ------------------------------------------------------------------ */
    /*  FindMeOn (contact section)                                         */
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
                    en pleine accélération ou que vous dirigiez l&apos;{" "}
                    <strong className="purple">innovation</strong>{" "}
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
        designed: {
            en: "All rights reserved",
            fr: "Tout droits réservés",
        },
    },
};

export default translations;
