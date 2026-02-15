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
    about:    { en: "ABOUT",    fr: "À PROPOS" },
    projects: { en: "PROJECTS", fr: "PROJETS" },
    contact:  { en: "CONTACT",  fr: "CONTACT" },
  },

  /* ------------------------------------------------------------------ */
  /*  Home (hero section)                                                */
  /* ------------------------------------------------------------------ */
  home: {
    greeting:   { en: "Hello There!",  fr: "Bonjour !" },
    iAm:        { en: "I'M",           fr: "JE SUIS" },
    contactBtn: { en: "Contact Me",    fr: "Me contacter" },
    downloadCV: { en: "Download CV",   fr: "Télécharger CV" },
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
  /*  Home2 (introduction)                                               */
  /* ------------------------------------------------------------------ */
  home2: {
    title: {
      en: <>LET ME <span className="purple"> INTRODUCE </span> MYSELF</>,
      fr: <>LAISSEZ-MOI <span className="purple"> ME PRÉSENTER</span></>,
    },
    body: {
      en: (
        <>
          I'm a Software Engineer who loves transforming ideas into
          reliable, scalable products. Over time, I've explored several
          technologies and found my passion in building high-performance
          systems and intuitive user experiences.
          <br /><br />
          I'm proficient in
          <i>
            <b className="purple">
              {" "}JavaScript, C++, Rust, Node.js, and Java{" "}
            </b>
          </i>
          — and I enjoy working across both backend and frontend stacks.
        </>
      ),
      fr: (
        <>
          Je suis un ingénieur logiciel passionné par la transformation
          d'idées en produits fiables et évolutifs. Au fil du temps,
          j'ai exploré plusieurs technologies et trouvé ma passion dans
          la construction de systèmes performants et d'expériences
          utilisateur intuitives.
          <br /><br />
          Je maîtrise
          <i>
            <b className="purple">
              {" "}JavaScript, C++, Rust, Node.js et Java{" "}
            </b>
          </i>
          — et j'aime travailler aussi bien côté backend que frontend.
        </>
      ),
    },
    interests: {
      en: (
        <>
          My key areas of interest include developing
          <i>
            <b className="purple">
              {" "}Web Applications, Blockchain Solutions,{" "}
            </b>
          </i>
          and exploring new ways to bridge on-chain and off-chain systems.
        </>
      ),
      fr: (
        <>
          Mes principaux domaines d'intérêt incluent le développement
          <i>
            <b className="purple">
              {" "}d'applications Web, de solutions Blockchain,{" "}
            </b>
          </i>
          et l'exploration de nouvelles façons de relier les systèmes on-chain et off-chain.
        </>
      ),
    },
    frameworks: {
      en: (
        <>
          Whenever possible, I love building projects with
          <b className="purple"> Node.js </b> and modern frameworks like{" "}
          <i>
            <b className="purple">React.js</b> and{" "}
            <b className="purple">Next.js</b>.
          </i>
        </>
      ),
      fr: (
        <>
          Dès que possible, j'adore construire des projets avec
          <b className="purple"> Node.js </b> et des frameworks modernes comme{" "}
          <i>
            <b className="purple">React.js</b> et{" "}
            <b className="purple">Next.js</b>.
          </i>
        </>
      ),
    },
  },

  /* ------------------------------------------------------------------ */
  /*  About section                                                      */
  /* ------------------------------------------------------------------ */
  about: {
    knowWho: {
      en: <>Know Who <strong className="purple">I'M</strong></>,
      fr: <>Découvrez <strong className="purple">qui je suis</strong></>,
    },
    skillset: {
      en: <>Professional <strong className="purple">Skillset</strong></>,
      fr: <>Compétences <strong className="purple">professionnelles</strong></>,
    },
    tools: {
      en: <><strong className="purple">Tools</strong> I use</>,
      fr: <><strong className="purple">Outils</strong> que j'utilise</>,
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
      en: "Find Me On",
      fr: "Me retrouver sur",
    },
    subtitle: {
      en: <>Feel free to <span className="purple">connect</span> with me</>,
      fr: <>N'hésitez pas à <span className="purple">me contacter</span></>,
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
