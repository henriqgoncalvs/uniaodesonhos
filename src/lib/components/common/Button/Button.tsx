import * as S from './Button.styles';

function Button({ colorStyle, children, ...rest }: S.ButtonProps) {
  return (
    <S.Button colorStyle={colorStyle} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
