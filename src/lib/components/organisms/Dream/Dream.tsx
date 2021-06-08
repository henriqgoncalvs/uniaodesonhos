import { useState } from 'react';
import { BiDollar } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { MdLink } from 'react-icons/md';
import dayjs from 'dayjs';
import { Line } from 'rc-progress';

import { AnchorButton, Button } from 'lib/components/common/Button';
import Modal from 'lib/components/common/Modal';
import Contribution from 'lib/components/common/Modal/Contribution';
import toast from 'lib/components/common/Toast';
import { DreamProps } from 'lib/types/api';
import copyToClipboard from 'lib/utils/copyToClipboard';

import * as S from './Dream.styles';

function Dream({ dream }: { dream: DreamProps }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <S.Container>
      <S.Title>{dream.title}</S.Title>

      <S.MainWrapper>
        <S.PresentationWrapper>
          <S.DreamImage src={dream.image.url} />
        </S.PresentationWrapper>

        <S.Content>
          <S.Description>{dream.fullDescription}</S.Description>

          <S.DreamData>
            <S.PeopleDreaming>
              <p>{dream.peopleDreaming}</p>
              <p>Pessoas sonhando em conjunto</p>
            </S.PeopleDreaming>

            <S.DreamDate>
              <S.DateWrapper>
                <p>{dayjs(dream.startDate).format('DD/MM/YYYY')}</p>
                <p>Início do sonho</p>
              </S.DateWrapper>
              <S.DateWrapper>
                <p>{dayjs(dream.endDate).format('DD/MM/YYYY')}</p>
                <p>Fim do sonho</p>
              </S.DateWrapper>
            </S.DreamDate>

            <S.TotalValue>
              <p>Valor arrecadado</p>
              <Line
                percent={(dream.collectedValue * 100) / dream.totalValue}
                strokeWidth={4}
                strokeColor="#66D3E6"
              />
              <S.TotalValueBounds>
                <p>R$ {dream.collectedValue}</p>
                <p>R$ {dream.totalValue}</p>
              </S.TotalValueBounds>
            </S.TotalValue>

            <S.Companies>
              <S.CompaniesTitle>
                Parceiros que apoiam esse sonho
              </S.CompaniesTitle>
              <S.CompaniesTagWrapper>
                {dream.companies?.map((company) => (
                  <S.CompaniesTag key={company.title}>
                    {company.title}
                  </S.CompaniesTag>
                ))}
              </S.CompaniesTagWrapper>
            </S.Companies>
          </S.DreamData>

          <S.ButtonsWrapper>
            <Button icon={<BiDollar />} onClick={toggleModal}>
              Contribuir
            </Button>
            <AnchorButton
              href={`https://api.whatsapp.com/send?phone=5587988254611&text=${encodeURI(
                `Olá, gostaria de me tornar voluntário para o projeto "${dream.title}`,
              )}"`}
              icon={<BsPeopleFill />}
              colorStyle="blueFilled"
            >
              Conectar voluntários
            </AnchorButton>
          </S.ButtonsWrapper>

          <Modal open={modalOpen} setOpen={setModalOpen}>
            <Contribution donationArray={dream.donation} />
          </Modal>

          <S.SocialWrapper>
            <S.SocialTitle>
              Faça com que esse sonho seja conhecido!
            </S.SocialTitle>

            <S.SocialButtonsWrapper>
              <AnchorButton
                colorStyle="twitter"
                border="squared"
                icon={<FaTwitter fontSize={32} />}
                size="small"
                href={`https://twitter.com/intent/tweet?text=${encodeURI(
                  `Encontrei um sonho maravilhoso na União de Sonhos, ${dream.title}. Venha ajudar comigo: https://uniaodesonhos.vercel.app/sonho/${dream.id}`,
                )}`}
              >
                Compartilhar no Twitter
              </AnchorButton>
              <Button
                colorStyle="blueFilled"
                border="squared"
                icon={<MdLink fontSize={32} />}
                size="small"
                onClick={() => {
                  copyToClipboard(
                    `https://uniaodesonhos.vercel.app/sonho/${dream.id}`,
                  );
                  toast({
                    type: 'success',
                    message: 'Link copiado para a área de transferência',
                  });
                }}
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
