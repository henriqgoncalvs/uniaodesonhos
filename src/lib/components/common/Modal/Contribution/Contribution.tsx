import * as S from './Contribution.styles';

type Props = {
  donationArray: [
    {
      url: string;
      value: number;
    },
  ];
};

function Contribution({ donationArray }: Props) {
  return (
    <S.Container>
      <S.Title>Selecione o valor que deseja contribuir</S.Title>

      <S.TagWrapper>
        {donationArray?.map((donation) => (
          <S.Tag key={donation.value} href={donation.url} target="_blank">
            R$ {donation.value}
          </S.Tag>
        ))}
      </S.TagWrapper>
    </S.Container>
  );
}

export default Contribution;
