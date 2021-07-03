type MessageBuilderProps = {
  nome: string;
  email: string;
  phone: string;
  howFind: string;
  dreamValue: number;
  motivations: string;
};

const messageBuilder = ({
  nome,
  email,
  phone,
  howFind,
  dreamValue,
  motivations,
}: MessageBuilderProps) =>
  `Nome: ${nome}
  =========
  Email: ${email}
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
