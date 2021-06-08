type MessageBuilderProps = {
  email: string;
  phone: string;
  howFind: string;
  dreamerLevel: number;
  motivations: string;
};

const messageBuilder = ({
  email,
  phone,
  howFind,
  dreamerLevel,
  motivations,
}: MessageBuilderProps) =>
  `Email: ${email}
  =========
  Telefone: ${phone}
  =========
  Como nos conheceu: ${howFind}
  =========
  Nível de sonhador: ${dreamerLevel}
  =========
  Motivações: ${motivations}
  `;

export default messageBuilder;
