type MessageBuilderProps = {
  email: string;
  phone: string;
  howFind: string;
  dreamValue: number;
  motivations: string;
};

const messageBuilder = ({
  email,
  phone,
  howFind,
  dreamValue,
  motivations,
}: MessageBuilderProps) =>
  `Email: ${email}
  =========
  Telefone: ${phone}
  =========
  Como nos conheceu: ${howFind}
  =========
  Valor estimado do sonho: ${dreamValue}
  =========
  Motivações: ${motivations}
  `;

export default messageBuilder;
