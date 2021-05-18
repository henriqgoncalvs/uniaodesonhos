import * as S from './Button.styles';

function AnchorButton({ colorStyle, children, ...rest }: S.AnchorProps) {
  return (
    <S.AnchorButton colorStyle={colorStyle} {...rest}>
      {children}
    </S.AnchorButton>
  );
}

export default AnchorButton;
