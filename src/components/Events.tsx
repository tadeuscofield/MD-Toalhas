const events = [
  {
    title: "Casamentos",
    copy: "Mesas de convidados com acabamento limpo e cores alinhadas ao tema da celebração.",
  },
  {
    title: "Festas de 15 anos",
    copy: "Volume e variedade para salões cheios, com entrega e retirada organizadas.",
  },
  {
    title: "Eventos corporativos",
    copy: "Coffee breaks, convenções e confraternizações com visual profissional e pontualidade.",
  },
  {
    title: "Formaturas e celebrações",
    copy: "Soluções práticas para buffets, cerimonialistas e empresas de eventos.",
  },
];

export function Events() {
  return (
    <section id="eventos" className="scroll-mt-20 bg-ink text-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne">
            Para quem atendemos
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Do salão de festa ao coffee break da empresa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Público principal: empresas e organizadores que precisam de toalhas confiáveis, limpas e
            com atendimento comercial direto.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <article
              key={event.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:bg-white/10"
            >
              <h3 className="font-display text-lg font-semibold text-champagne">{event.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{event.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
