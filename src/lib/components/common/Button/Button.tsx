import * as S from './Button.styles';

function Button({
  colorStyle = 'yellowFilled',
  children,
  ...rest
}: S.ButtonProps) {
  return (
    <S.Button colorStyle={colorStyle} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
