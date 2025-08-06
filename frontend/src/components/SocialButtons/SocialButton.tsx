import * as S from "./SocialButton.styles";

interface SocialButtonProps {
  url: string;
  icon: string;
  text: string;
  altText?: string;
}

const SocialButton = ({ url, icon, text, altText = "" }: SocialButtonProps) => {
  return (
    <S.SocialButtonContainer
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <S.Button>
        <S.Icon src={icon} alt={altText || `${text} icon`} />
        {text}
      </S.Button>
    </S.SocialButtonContainer>
  );
};

export default SocialButton;
