import { company, contacts } from "@/lib/contacts";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section
      id="topo"
      className="atmosphere fabric-grid relative min-h-[100svh] overflow-hidden text-white"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-3xl opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -right-16 top-24 h-72 w-72 rounded-full bg-champagne/25 blur-3xl float-soft" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.12),transparent_45%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-28 pt-28 sm:px-6 sm:pb-24 lg:justify-center lg:px-8 lg:pb-16">
        <div className="max-w-3xl">
          <p className="reveal font-display text-4xl font-semibold tracking-tight text-champagne sm:text-5xl md:text-6xl lg:text-7xl">
            {company.name}
          </p>
          <h1 className="reveal reveal-delay-1 mt-5 max-w-2xl text-2xl font-medium leading-snug text-white sm:text-3xl md:text-4xl">
            Aluguel de toalhas para casamentos, festas de 15 e eventos corporativos
          </h1>
          <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Atendimento comercial ágil no Rio de Janeiro, com peças limpas, variedade de cores e
            experiência de mais de {company.years} anos para empresas e organizadores de eventos.
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            {contacts.map((c) => (
              <WhatsAppButton
                key={c.id}
                name={c.name}
                phone={c.whatsapp}
                displayPhone={c.displayPhone}
                variant="primary"
                className="w-full sm:flex-1"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
