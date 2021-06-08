import * as S from './Button.styles';

function AnchorButton({
  colorStyle = 'yellowFilled',
  border = 'rounded',
  size = 'medium',
  children,
  icon,
  ...rest
}: S.AnchorProps) {
  return (
    <S.AnchorButton
      colorStyle={colorStyle}
      border={border}
      size={size}
      {...rest}
    >
      {icon}
      {children}
    </S.AnchorButton>
  );
}

export default AnchorButton;
