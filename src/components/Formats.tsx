const formats = [
  {
    title: "Mesas redondas",
    copy: "Toalhas longas e de tampo para mesas de convidados, com caimento elegante para casamentos e recepções.",
    specs: "Diâmetros comuns · várias cores",
  },
  {
    title: "Mesas quadradas",
    copy: "Opções para cobrir o tampo ou compor com cobre-manchas, ideais para coffee breaks e festas íntimas.",
    specs: "1,00 × 1,00 m · 1,50 × 1,50 m",
  },
  {
    title: "Pranchão",
    copy: "Cobertura completa para mesas retangulares de buffet, apoio e área gastronômica do evento.",
    specs: "Formatos alongados · oxford e cetim",
  },
  {
    title: "Cores e tecidos",
    copy: "Paleta ampla para combinar com a identidade do evento — do clássico branco ao visual corporativo.",
    specs: "Sob consulta no WhatsApp",
  },
];

export function Formats() {
  return (
    <section id="formatos" className="linen-wash scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne-deep">
            Catálogo
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Formatos certos para cada mesa do seu evento
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Monte a composição com redondas, quadradas e pranchão. As fotos das toalhas serão
            adicionadas em breve — por enquanto, peça o orçamento direto no WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {formats.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.25rem] border border-[var(--line)] bg-white/80 shadow-[var(--shadow)] backdrop-blur-sm transition duration-300 hover:-translate-y-1"
            >
              <div
                className="photo-slot relative aspect-[16/10]"
                role="img"
                aria-label={`Espaço reservado para foto: ${item.title}`}
              >
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/55 via-transparent to-transparent p-5">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
                    Foto em breve · {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-champagne-deep">
                  {item.specs}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
