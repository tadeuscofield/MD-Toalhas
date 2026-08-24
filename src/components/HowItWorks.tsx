const steps = [
  {
    n: "01",
    title: "Peça o orçamento",
    copy: "Chame Maureci ou Devanilda no WhatsApp com data, local, quantidade de mesas e formato.",
  },
  {
    n: "02",
    title: "Combine cores e medidas",
    copy: "Alinhamos redondas, quadradas ou pranchão com a paleta do evento e o volume necessário.",
  },
  {
    n: "03",
    title: "Receba no local",
    copy: "Toalhas higienizadas e prontas para montagem — com logística pensada para o dia do evento.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne-deep">
            Processo simples
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Orçamento rápido, sem burocracia
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Menos formulário, mais conversa. Dois canais no WhatsApp para acelerar a resposta
            comercial.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="relative border-t border-[var(--line)] pt-6">
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-champagne-deep">
                {step.n}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
