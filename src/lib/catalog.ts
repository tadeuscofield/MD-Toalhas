export type TowelColor = {
  slug: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
};

export const towelColors: TowelColor[] = [
  {
    slug: "branca",
    title: "Branca",
    copy: "Clássica e limpa — ideal para casamentos, formaturas e eventos corporativos.",
    image: "/toalhas/branca.jpg",
    alt: "Mesa redonda com toalha branca longa e arranjo formal para quatro lugares",
  },
  {
    slug: "azul-serenity",
    title: "Azul Serenity",
    copy: "Tom suave e sofisticado para recepções elegantes e jantares especiais.",
    image: "/toalhas/azul-serenity.jpg",
    alt: "Mesa redonda com toalha azul serenity longa e mesa posta elegante",
  },
  {
    slug: "rosa",
    title: "Rosa",
    copy: "Delicada para festas de 15 anos, chá de bebê e celebrações românticas.",
    image: "/toalhas/rosa.jpg",
    alt: "Mesa redonda com toalha rosa longa e composição de festa",
  },
  {
    slug: "verde-musgo",
    title: "Verde Musgo",
    copy: "Visual natural e premium para casamentos e eventos com atmosfera acolhedora.",
    image: "/toalhas/verde-musgo.jpg",
    alt: "Mesa redonda com toalha verde musgo longa e arranjo formal",
  },
  {
    slug: "terra-cota",
    title: "Terra Cota",
    copy: "Cor quente e moderna para mesas com personalidade e identidade visual marcante.",
    image: "/toalhas/terra-cota.jpg",
    alt: "Mesa redonda com toalha terra cota longa e mesa posta",
  },
  {
    slug: "cafe-com-leite-escuro",
    title: "Café com Leite Escuro",
    copy: "Neutro sofisticado para buffets, confraternizações e jantares empresariais.",
    image: "/toalhas/cafe-com-leite-escuro.jpg",
    alt: "Mesa redonda com toalha café com leite escuro longa e arranjo formal",
  },
];

export const heroImage = towelColors[0];
export const aboutImage = towelColors[1];
