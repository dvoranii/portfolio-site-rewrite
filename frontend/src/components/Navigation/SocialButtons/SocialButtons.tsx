import * as S from "./SocialButtons.styles";

import LinkedInLogo from "../../../assets/images/Navigation/logo-linkedin.svg";
import GithubLogo from "../../../assets/images/Navigation/logo-github.svg";
import CodepenLogo from "../../../assets/images/Navigation/logo-codepen.svg";

const SocialButtons: React.FC = () => {
  return (
    <li>
      <S.SocialsList>
        <li>
          <S.SocialLink
            href="https://www.linkedin.com/in/ildi-dvorani-a04452210/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <S.SocialLogo alt="LinkedIn" src={LinkedInLogo} loading="lazy" />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink
            href="https://github.com/dvoranii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <S.SocialLogo alt="GitHub" src={GithubLogo} loading="lazy" />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink
            href="https://codepen.io/dvoranii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodePen Profile"
          >
            <S.SocialLogo alt="CodePen" src={CodepenLogo} loading="lazy" />
          </S.SocialLink>
        </li>
      </S.SocialsList>
    </li>
  );
};

export default SocialButtons;
