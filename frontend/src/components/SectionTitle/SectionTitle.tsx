import * as S from "./SectionTitle.styles";

interface TitleProps {
  textContent: string;
  backgroundWidth?: string;
  backgroundPosition?: string;
  paddingTop?: string;
}

const SectionTitle = ({
  textContent,
  backgroundWidth,
  backgroundPosition,
  paddingTop,
}: TitleProps) => {
  return (
    <S.TitleContainer $paddingTop={paddingTop}>
      <S.TitleInner
        $backgroundWidth={backgroundWidth}
        $backgroundPosition={backgroundPosition}
      >
        <S.TitleText>{textContent}</S.TitleText>
      </S.TitleInner>
    </S.TitleContainer>
  );
};

export default SectionTitle;
