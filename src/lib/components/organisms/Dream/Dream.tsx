import { AiFillInstagram } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { MdLink } from 'react-icons/md';
import { Line } from 'rc-progress';

import { Button } from 'lib/components/common/Button';
import { DreamProps } from 'lib/types/api';

import * as S from './Dream.styles';

function Dream({ dream }: { dream: DreamProps }) {
  return (
    <S.Container>
      <S.Title>{dream.title}</S.Title>

      <S.MainWrapper>
        <S.PresentationWrapper>
          <S.DreamImage src={dream.image.url} />
        </S.PresentationWrapper>

        <S.Content>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet maximus arcu. Nam maximus pharetra imperdiet. Nam varius tellus
            vitae nisl malesuada, a vehicula ipsum mollis. Nunc sapien leo,
            ultrices id blandit eu, condimentum ut quam. Nulla fermentum metus
            et arcu pharetra, sit amet efficitur eros commodo. In a cursus arcu.
            Mauris tortor dui, mattis rutrum pulvinar eu, laoreet fermentum
            erat. Sed nisi ex, condimentum nec aliquet eu, finibus ac arcu.
            Integer dignissim eros eu nisi commodo, vel egestas nulla convallis.
            Cras eget leo vel tortor suscipit consequat in at enim.
          </S.Description>

          <S.DreamData>
            <S.PeopleDreaming>
              <p>876</p>
              <p>Pessoas sonhando em conjunto</p>
            </S.PeopleDreaming>

            <S.DreamDate>
              <S.DateWrapper>
                <p>13/01/2020</p>
                <p>Início do sonho</p>
              </S.DateWrapper>
              <S.DateWrapper>
                <p>13/01/2020</p>
                <p>Fim do sonho</p>
              </S.DateWrapper>
            </S.DreamDate>

            <S.TotalValue>
              <p>Valor arrecadado</p>
              <Line percent={10} strokeWidth={4} strokeColor="#66D3E6" />
              <S.TotalValueBounds>
                <p>R$ 200,00</p>
                <p>R$ 1500,00</p>
              </S.TotalValueBounds>
            </S.TotalValue>

            <S.Companies>
              <S.CompaniesTitle>
                Parceiros que apoiam esse sonho
              </S.CompaniesTitle>
              <S.CompaniesTagWrapper>
                <S.CompaniesTag>Transforma Recife</S.CompaniesTag>
                <S.CompaniesTag>Samaritanos</S.CompaniesTag>
              </S.CompaniesTagWrapper>
            </S.Companies>
          </S.DreamData>

          <S.ButtonsWrapper>
            <Button icon={<BiDollar />}>Contribuir</Button>
            <Button icon={<BsPeopleFill />} colorStyle="blueFilled">
              Conectar voluntários
            </Button>
          </S.ButtonsWrapper>

          <S.SocialWrapper>
            <S.SocialTitle>
              Faça com que esse sonho seja conhecido!
            </S.SocialTitle>

            <S.SocialButtonsWrapper>
              <Button
                colorStyle="twitter"
                border="squared"
                icon={<FaTwitter fontSize={32} />}
                size="small"
              >
                Compartilhar no Twitter
              </Button>
              <Button
                colorStyle="instagram"
                border="squared"
                icon={<AiFillInstagram fontSize={32} />}
                size="small"
              >
                Compartilhar no Instagram
              </Button>
              <Button
                colorStyle="blueFilled"
                border="squared"
                icon={<MdLink fontSize={32} />}
                size="small"
              >
                Copiar link
              </Button>
            </S.SocialButtonsWrapper>
          </S.SocialWrapper>
        </S.Content>
      </S.MainWrapper>
    </S.Container>
  );
}

export default Dream;
