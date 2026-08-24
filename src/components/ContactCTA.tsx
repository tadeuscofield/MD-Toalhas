import { company, contacts } from "@/lib/contacts";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ContactCTA() {
  return (
    <section id="contato" className="scroll-mt-20 bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] px-6 py-10 sm:px-10 sm:py-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne">
              Orçamento agora
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Fale com a {company.shortName} e feche as toalhas do seu evento
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Dois atendimentos no WhatsApp. Escolha o contato e envie data, bairro e quantidade de
              mesas — retornamos com a melhor combinação de formatos e cores.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:max-w-xl">
            {contacts.map((c) => (
              <WhatsAppButton
                key={c.id}
                name={c.name}
                phone={c.whatsapp}
                displayPhone={c.displayPhone}
                variant="primary"
                className="w-full"
                message={`Olá, ${c.name}! Quero orçamento de aluguel de toalhas com a MD.`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
