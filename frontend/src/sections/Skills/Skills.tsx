import * as S from "./Skills.styles";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { skillsData } from "./skills.data";

import { Element } from "react-scroll";
import { useScrollOpacity } from "../../Hooks/useScrollOpacity";

const Skills = () => {
  const opacity = useScrollOpacity("skills", 150, 0.5);
  return (
    <Element name="skills">
      <S.SkillsWrapper
        id="skills"
        style={{
          opacity: opacity,
          transition: "opacity 0.3s ease-out",
        }}
      >
        <SectionTitle
          textContent="Skills"
          backgroundWidth="68px"
          backgroundPosition="67%"
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
                          title={skill.title}
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
    </Element>
  );
};

export default Skills;
