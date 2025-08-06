import { useEffect, useState } from "react";
import * as S from "./Hero.styles";
import LaptopHeader from "../../assets/images/Hero/LaptopHeader.svg";
import { TypewriterCursor } from "./TypewriterCursor/TypewriterCursor";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <S.HeroWrapper id="section1">
      <S.HeroInner>
        <S.TextWrapper>
          <S.Name>Ildi Dvorani</S.Name>
          <S.JobTitle>
            <TypewriterCursor text="Full Stack Developer" speed={60} />
          </S.JobTitle>
          <S.WelcomeText>Welcome to my portfolio website.</S.WelcomeText>
          <S.ButtonGroup>
            <S.ButtonLink href="#projects">
              <S.Button>
                <span>Projects</span>
              </S.Button>
            </S.ButtonLink>
            <S.ButtonLink href="#about-me">
              <S.Button>
                <span>About Me</span>
              </S.Button>
            </S.ButtonLink>
          </S.ButtonGroup>
        </S.TextWrapper>
        <S.ImageWrapper>
          <S.LaptopImage
            src={LaptopHeader}
            alt="laptop graphical design image"
            $loaded={isLoaded}
            onLoad={() => setIsLoaded(true)}
          />
        </S.ImageWrapper>
      </S.HeroInner>

      <S.WavesContainer>
        <S.WavesSVG
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <S.ParallaxGroup>
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#FCFCFC" />
          </S.ParallaxGroup>
        </S.WavesSVG>
      </S.WavesContainer>
    </S.HeroWrapper>
  );
};
export default Hero;
