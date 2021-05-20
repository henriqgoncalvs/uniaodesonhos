import { FormEvent } from 'react';

import { Button } from 'lib/components/common/Button';
import { FileUploader } from 'lib/components/common/Inputs';

import * as S from './FormDream.styles';

const WannaDream = ({
  handleFormSuccess,
  handleFormError,
}: {
  handleFormSuccess: () => void;
  handleFormError: () => void;
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      nome: { value: string };
      email: { value: string };
      phone: { value: string };
      howFind: { value: string };
      dreamerLevel: { value: number };
      motivations: { value: string };
      file: { value: File };
    };

    const nome = target.nome.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const howFind = target.howFind.value;
    const dreamerLevel = target.dreamerLevel.value;
    const motivations = target.motivations.value;
    const file = target.file.value;

    const values = {
      nome,
      email,
      phone,
      howFind,
      dreamerLevel,
      motivations,
      file,
    };

    if (!values.nome) handleFormError();
    else handleFormSuccess();

    console.log(values);
  };

  return (
    <S.Container>
      <S.FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input name="nome" type="text" placeholder="Nome" />
            <input name="email" type="email" placeholder="E-mail" />
            <input name="phone" type="phone" placeholder="Telefone" />
            <input
              name="howFind"
              type="text"
              placeholder="Como nos conheceu?"
            />
            <label htmlFor="dreamerLevel">Qual seu nível de sonhador?</label>
            <input
              name="dreamerLevel"
              id="slider"
              type="range"
              min="1"
              max="100"
            />
          </div>
          <div>
            <textarea
              name="motivations"
              rows={5}
              placeholder="Suas motivacões"
            />
            <FileUploader />
            <Button>Sonhar</Button>
          </div>
        </form>
      </S.FormContainer>

      <S.IllustrationWrapper>
        <S.Illustration
          src="/img/modal-illustration.svg"
          alt="Mascote da União de Sonhos brincando"
        />
      </S.IllustrationWrapper>
    </S.Container>
  );
};

export default WannaDream;
