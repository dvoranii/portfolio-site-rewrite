import * as S from "./Projects.styles";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Element } from "react-scroll";
import { useScrollOpacity } from "../../Hooks/useScrollOpacity";

import GUMThumb from "../../assets/images/Projects/GUM.webp";
import YMCAThumb from "../../assets/images/Projects/YMCA-BG.png";
import ElegantWhite from "../../assets/images/Projects/elegant-white-bg.jpg";
import OPThumb from "../../assets/images/Projects/OutpostThumb.webp";

import FSFThumb from "../../assets/images/Projects/fsf-portfolio-thumbnail.png";

const Projects = () => {
  const styles = useScrollOpacity("projects", 150, 0.4, {
    animateBackground: true,
    animateBrightness: true,
    startBg: "#000000",
    endBg: "#ffffff",
  });
  return (
    <>
      <SectionTitle textContent="Projects" paddingTop="2.4rem" />

      <Element name="projects">
        <S.ProjectsSection
          id="projects"
          style={{
            backgroundColor: styles.backgroundColor,
            filter: styles.filter,
            transition: "background-color 0.3s ease-out, filter 0.3s ease-out",
          }}
        >
          <S.ProjectsWrapper>
            <S.ProjectsGridWrapper>
              <S.ProjectsGrid>
                {/* Row 1 */}
                <S.Project1>
                  <S.GridItemBackground
                    style={{
                      backgroundImage: `url(${GUMThumb})`,
                      backgroundPosition: "0px -95px",
                    }}
                  />
                </S.Project1>
                <S.Project2>
                  <S.GridItemBackground
                    style={{ backgroundImage: `url(${YMCAThumb})` }}
                  />
                </S.Project2>

                {/* Row 2 */}
                <S.Project3>
                  <img src={FSFThumb} alt="" />
                  <S.GridItemBackground
                    style={{ backgroundImage: `url(${ElegantWhite})` }}
                  />
                </S.Project3>
                <S.Project4>
                  <S.GridItemBackground
                    style={{
                      backgroundImage: `url(${OPThumb})`,
                      backgroundPosition: "-40px",
                    }}
                  />
                </S.Project4>

                {/* Row 3-4 */}
                <S.Project5>
                  <S.GridItemBackground />
                </S.Project5>
                <S.Project6>
                  <S.GridItemBackground />
                </S.Project6>
                <S.Project7>
                  <S.GridItemBackground />
                </S.Project7>
                <S.Project8>
                  <S.GridItemBackground />
                </S.Project8>
              </S.ProjectsGrid>
            </S.ProjectsGridWrapper>
          </S.ProjectsWrapper>
        </S.ProjectsSection>
      </Element>
    </>
  );
};

export default Projects;
