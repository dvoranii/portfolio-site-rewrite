// Skills.tsx
import * as S from "./Skills.styles";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import type { SkillItem } from "../../types/skill.type";

import JSLogo from "../../assets/images/Skills/JS-skills-Card-img.jpg";
import TSLogo from "../../assets/images/Skills/Typescript_logo.webp";
import ViteLogo from "../../assets/images/Skills/Vitejs-logo.svg";
import WebpackLogo from "../../assets/images/Skills/webpack.png";
import CSSLogo from "../../assets/images/Skills/css-3.svg";
import SassLogo from "../../assets/images/Skills/sass-logo.webp";
import HTMLLogo from "../../assets/images/Skills/html-1.svg";
import NodeLogo from "../../assets/images/Skills/node.png";
import ReactLogo from "../../assets/images/Skills/react-logo.webp";
import FirebaseLogo from "../../assets/images/Skills/firebase-modal.png";
import PSLogo from "../../assets/images/skills/Adobe-Photoshop-Logo.png";
import SQLLogo from "../../assets/images/Skills/sql-logo.webp";

const skillsData: SkillItem[] = [
  {
    id: 1,
    title: "JavaScript/TypeScript",
    description:
      "Building interactive web applications with modern ES6+ features. I leverage TypeScript for complex projects to enhance code quality and maintainability through static typing.",
    logo: JSLogo,
    hoverLogo: TSLogo,
    logoAlt: "javascript logo icon",
    hoverLogoAlt: "typescript logo icon",
    logoTitle: "JavaScript",
    logoClassName: "js-logo",
  },
  {
    id: 2,
    title: "React",
    description:
      "Developing performant SPAs using React hooks, context API, and component composition. Focused on creating reusable UI components with proper state management and clean prop interfaces.",
    logo: ReactLogo,
    logoAlt: "react logo icon",
    logoTitle: "React",
    logoClassName: "react-logo",
    wrapperClassName: "react-logo",
  },
  {
    id: 3,
    title: "Node.js",
    description:
      "Building RESTful APIs and server-side applications with Express. Experienced in creating efficient backend services, CLI tools, and automating workflows with Node's ecosystem.",
    logo: NodeLogo,
    logoAlt: "node logo icon",
    logoTitle: "Node",
    logoClassName: "node-logo",
    wrapperClassName: "node-logo",
  },
  {
    id: 4,
    title: "Vite/Webpack",
    description:
      "Configuring modern build tools like Vite for lightning-fast development with instant HMR, and Webpack for complex module bundling. Optimizing production builds for performance across both ecosystems.",
    logo: ViteLogo,
    logoAlt: "Vite logo",
    hoverLogo: WebpackLogo,
    hoverLogoAlt: "webpack logo",
    logoTitle: "Vite",
    logoClassName: "vite-logo",
  },
  {
    id: 5,
    title: "CSS/Sass",
    description:
      "Writing maintainable, modular CSS with methodologies like BEM. Utilizing Sass for efficient styling with variables, mixins, and nested rules. Implementing responsive layouts with Flexbox/Grid and creating performant animations.",
    logo: CSSLogo,
    hoverLogo: SassLogo,
    logoAlt: "css logo icon",
    hoverLogoAlt: "sass logo",
    logoTitle: "CSS",
    logoClassName: "css-logo",
  },
  {
    id: 6,
    title: "HTML",
    description:
      "Creating semantic, accessible markup that follows WCAG standards. Experienced with JSX for React apps and templating engines for server-rendered content.",
    logo: HTMLLogo,
    logoAlt: "html logo icon",
    logoTitle: "HTML",
    logoClassName: "html-logo",
  },
  {
    id: 7,
    title: "SQL",
    description:
      "Designing efficient database schemas and writing optimized queries. Implementing data relationships and transactions in PostgreSQL and MySQL environments.",
    logo: SQLLogo,
    logoAlt: "SQL Logo",
    logoTitle: "SQL",
    logoClassName: "sql-logo",
    wrapperClassName: "SQLLogo",
  },
  {
    id: 8,
    title: "Google Firebase",
    description:
      "Implementing real-time data sync with Firestore, user auth flows, and serverless functions. Rapidly prototyping full-stack apps with Firebase's integrated services.",
    logo: FirebaseLogo,
    logoAlt: "google firebase logo icon",
    logoTitle: "Firebase",
    logoClassName: "fb-logo",
  },
  {
    id: 9,
    title: "Photoshop",
    description:
      "Creating and optimizing web graphics, UI elements, and marketing assets. Exporting production-ready images with proper compression and responsive variants.",
    logo: PSLogo,
    logoAlt: "photoshop logo",
    logoTitle: "Photoshop",
    logoClassName: "ps-logo",
  },
];

const Skills = () => {
  return (
    <S.SkillsWrapper id="skills--section">
      <SectionTitle
        textContent="Skills"
        backgroundWidth="68"
        backgroundPosition="67"
        paddingTop="6.8rem"
      />
      <S.SkillsContainer>
        <S.SkillsGrid>
          {skillsData.map((skill) => (
            <S.SkillTilt key={skill.id} className="tilt">
              <S.SkillCard className={`skill--${skill.id}`}>
                <S.SkillImageWrapper className={skill.wrapperClassName}>
                  <h4>{skill.title}</h4>
                  {skill.hoverLogo ? (
                    <S.SkillImageContainer>
                      <S.SkillLogo
                        src={skill.logo}
                        loading="lazy"
                        alt={skill.logoAlt}
                        title={skill.logoTitle}
                        className={skill.logoClassName}
                      />
                      <S.SkillHoverLogo
                        src={skill.hoverLogo}
                        loading="lazy"
                        alt={skill.hoverLogoAlt}
                        title="TypeScript"
                        className={skill.logoClassName}
                      />
                    </S.SkillImageContainer>
                  ) : (
                    <img
                      src={skill.logo}
                      loading="lazy"
                      alt={skill.logoAlt}
                      title={skill.logoTitle}
                      className={skill.logoClassName}
                    />
                  )}
                </S.SkillImageWrapper>
                <p>{skill.description}</p>
              </S.SkillCard>
            </S.SkillTilt>
          ))}
        </S.SkillsGrid>
      </S.SkillsContainer>
    </S.SkillsWrapper>
  );
};

export default Skills;
