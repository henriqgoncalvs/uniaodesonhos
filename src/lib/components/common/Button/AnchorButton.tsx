import * as S from './Button.styles';

function AnchorButton({
  colorStyle = 'yellowFilled',
  border = 'rounded',
  size = 'medium',
  children,
  ...rest
}: S.AnchorProps) {
  return (
    <S.AnchorButton
      colorStyle={colorStyle}
      border={border}
      size={size}
      {...rest}
    >
      {children}
    </S.AnchorButton>
  );
}

export default AnchorButton;
