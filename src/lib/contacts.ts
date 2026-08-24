export const company = {
  name: "MD Aluguel de Toalhas",
  shortName: "MD",
  tagline: "Toalhas elegantes para eventos que precisam impressionar",
  years: 30,
  city: "Rio de Janeiro",
  region: "RJ",
} as const;

export const contacts = [
  {
    id: "maureci",
    name: "Maureci",
    displayPhone: "(21) 98981-0370",
    whatsapp: "5521989810370",
  },
  {
    id: "devanilda",
    name: "Devanilda",
    displayPhone: "(21) 98846-8554",
    whatsapp: "5521988468554",
  },
] as const;

export function whatsappUrl(
  phone: string,
  message = "Olá! Gostaria de um orçamento de aluguel de toalhas para o meu evento.",
) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
