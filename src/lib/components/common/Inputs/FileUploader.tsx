import React, { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCloudUpload } from 'react-icons/bs';
import styled, { css } from 'styled-components';

interface Event<T = EventTarget> {
  target: T;
  // ...
}

interface Props {
  handleFile?: (fileUploaded?: File) => unknown;
}

const Button = styled.div`
  ${({ theme }) => css`
    ${theme.utils.display.flex.center}
    justify-content: center!important;
    flex-direction: row !important;
    background-color: ${theme.colors.input};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-family: ${theme.font.family.ptsans};

    border-radius: 0.4rem;
    border: none;

    padding: 3rem 1rem;

    width: 100%;

    cursor: pointer;

    svg {
      margin-right: 1.5rem;
      font-size: ${theme.font.sizes.xlarge};
    }

    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 95%;
      height: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 3px dashed white;
      border-radius: 0.4rem;
    }
  `}
`;

const FileUploader = ({ handleFile }: Props) => {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | undefined>('');

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: Event<HTMLInputElement>) => {
    const fileUploaded = event.target.files?.[0];
    setFileName(fileUploaded?.name);
    handleFile?.(fileUploaded);
  };

  return (
    <>
      <Button onClick={handleClick}>
        {fileName ? (
          <>
            <AiOutlineCheckCircle />
            {fileName}
          </>
        ) : (
          <>
            <BsCloudUpload />
            Adicione um vídeo do sonho
          </>
        )}
      </Button>
      <input
        name="file"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </>
  );
};
export default FileUploader;
