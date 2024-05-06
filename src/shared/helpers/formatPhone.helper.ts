export const formatPhone = (phone: string | undefined) =>
  phone?.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($2) $3 $4 $5");
