# MD Aluguel de Toalhas

Site institucional e comercial para aluguel de toalhas de mesa — casamentos, festas de 15 anos e eventos corporativos no Rio de Janeiro.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- SEO: metadata, Open Graph, `sitemap.xml`, `robots.txt` e JSON-LD (`LocalBusiness`)

## Como rodar

```bash
npm install
npm run dev -- --port 3847 --hostname 127.0.0.1
```

Abra [http://127.0.0.1:3847](http://127.0.0.1:3847).

Build de produção:

```bash
npm run build
npm run start -- --port 3847
```

## Contatos (WhatsApp)

- **Maureci:** (21) 98981-0370
- **Devanilda:** (21) 98846-8554

## Fotos do cliente

Os espaços de imagem estão preparados como placeholders (“Foto em breve”). Quando as fotos das toalhas chegarem, substitua os blocos `photo-slot` em `Formats` e `About` por `next/image` apontando para `/public/toalhas/`.

## Variáveis

Opcional no `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```
