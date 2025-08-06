import * as S from "./About.styles";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SocialButton from "../../components/SocialButtons/SocialButton";
import GithubIcon from "../../assets/images/SocialIcons/logo-github.svg";
import LinkedinIcon from "../../assets/images/SocialIcons/logo-linkedin.svg";

const About = () => {
  return (
    <S.AboutWrapper id="about-me">
      <SectionTitle textContent="About"></SectionTitle>
      <S.AboutContent>
        <S.AboutText>
          <span>Full-Stack Engineer</span> specializing in{" "}
          <i>high-performance web applications</i> with <span>5+ years</span>{" "}
          delivering production-ready solutions. I architect systems that
          balance technical excellence with business objectives, from{" "}
          <span>PWA development</span> to <span>3D visualization</span> and
          <span> enterprise-grade tooling</span>.
        </S.AboutText>

        <S.ExpertiseHeading>Core Expertise:</S.ExpertiseHeading>

        <S.ExpertiseList>
          <S.ExpertiseItem>
            End-to-end application development (React, TypeScript, Node.js)
          </S.ExpertiseItem>
          <S.ExpertiseItem>
            DevOps implementation (CI/CD pipelines, Nginx, Cloud/IAM
            configuration)
          </S.ExpertiseItem>
          <S.ExpertiseItem>
            {" "}
            Performance optimization & secure cloud deployments
          </S.ExpertiseItem>
          <S.ExpertiseItem>
            Cross-functional leadership (UX, Design, Stakeholders)
          </S.ExpertiseItem>
          <S.ExpertiseItem>
            Application security hardening (OWASP Top 10 mitigation)
          </S.ExpertiseItem>
          <S.ExpertiseItem>
            Technical debt reduction & scalable architecture
          </S.ExpertiseItem>
        </S.ExpertiseList>

        <S.AboutText>
          Recent work includes building iPad-optimized PWAs for dental product
          marketing and developing THREE.js visualizations for logistics
          platforms. I thrive on solving complex technical challenges while
          ensuring deliverables drive measurable business results.
        </S.AboutText>

        <S.SocialsAndSkillsWrapper>
          <S.SocialButtonsWrapper>
            <SocialButton
              url="https://github.com/dvoranii"
              icon={GithubIcon}
              text="GitHub"
              altText="GitHub logo"
            />
            <SocialButton
              url="https://linkedin.com/in/ildi-dvorani-a04452210"
              icon={LinkedinIcon}
              text="LinkedIn"
              altText="LinkedIn logo"
            />
          </S.SocialButtonsWrapper>

          <S.SkillsContainer>
            <S.Skill>Communicative</S.Skill>
            <S.Skill>Efficient</S.Skill>
            <S.Skill>Adaptable</S.Skill>
            <S.Skill>Organized</S.Skill>
            <S.Skill>Logical</S.Skill>
            <S.Skill>Open-minded</S.Skill>
            <S.Skill>Driven</S.Skill>
            <S.Skill>Collaborative</S.Skill>
            <S.Skill>Resilient</S.Skill>
            <S.Skill>Proactive</S.Skill>
          </S.SkillsContainer>
        </S.SocialsAndSkillsWrapper>

        <S.CallToAction>
          &mdash;&nbsp;Let's connect to discuss how I can bring this expertise
          to your company&nbsp;&mdash;
        </S.CallToAction>
      </S.AboutContent>
    </S.AboutWrapper>
  );
};

export default About;
