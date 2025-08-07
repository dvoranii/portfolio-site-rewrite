import { useEffect, useRef, useState } from "react";
import * as S from "./Companies.styles";

import AlexionLogo from "../../assets/images/Companies/alexion-logo.png";
import CGLLogo from "../../assets/images/Companies/CGL-logo.png";
import InsuletLogo from "../../assets/images/Companies/insulet-logo.png";
import JanssenLogo from "../../assets/images/Companies/janssen-logo.png";
import NovoLogo from "../../assets/images/Companies/novo-logo.png";
import OGLogo from "../../assets/images/Companies/og-logo.webp";
import OPLogo from "../../assets/images/Companies/op-logo-2.svg";
import YMCALogo from "../../assets/images/Companies/ymca-gta(with-text).png";
import GUMLogo from "../../assets/images/Companies/sunstar-gum-logo.jpg";

const Companies = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      setIsAnimated(true);

      const scroller = scrollerRef.current;
      if (scroller) {
        const scrollerInner = scroller.querySelector("ul");
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      }
    }
  }, []);

  const companies = [
    { name: "OP", logo: OPLogo },
    { name: "Alexion", logo: AlexionLogo },
    { name: "GUM", logo: GUMLogo },
    { name: "Janssen", logo: JanssenLogo },
    { name: "Novo Nordisk", logo: NovoLogo },
    { name: "YMCA GTA", logo: YMCALogo },
    { name: "CGL", logo: CGLLogo },
    { name: "Insulet", logo: InsuletLogo },
    { name: "OG", logo: OGLogo, className: "og-logo" },
  ];

  return (
    <S.CompaniesWrapper>
      <S.IntroHeadingWrapper>
        <S.IntroHeading>Trusted by Leading Organizations</S.IntroHeading>
      </S.IntroHeadingWrapper>

      <S.Scroller ref={scrollerRef} $isAnimated={isAnimated}>
        <ul>
          {companies.map((company, index) => (
            <li key={index} className={company.name === "OG" ? "og-logo" : ""}>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </S.Scroller>
    </S.CompaniesWrapper>
  );
};

export default Companies;
