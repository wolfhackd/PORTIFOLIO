export const dateFormatter = (date: string | null) => {
  if (!date) return '';
  const createdDate = new Date(date);
  const formattedDate = createdDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return formattedDate;
};