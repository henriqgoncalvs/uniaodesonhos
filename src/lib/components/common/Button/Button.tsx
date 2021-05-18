import * as S from './Button.styles';

function Button({
  colorStyle = 'yellowFilled',
  border = 'rounded',
  size = 'medium',
  children,
  ...rest
}: S.ButtonProps) {
  return (
    <S.Button colorStyle={colorStyle} border={border} size={size} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
