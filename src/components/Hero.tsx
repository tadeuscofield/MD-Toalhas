import Image from "next/image";
import { company, contacts } from "@/lib/contacts";
import { heroImage } from "@/lib/catalog";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative min-h-[100svh] overflow-hidden text-white"
    >
      <Image
        src={heroImage.image}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0a292e]/94 via-[#0a292e]/78 to-[#0a292e]/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a292e]/70 via-transparent to-[#0a292e]/35"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-28 pt-28 sm:px-6 sm:pb-24 lg:justify-center lg:px-8 lg:pb-16">
        <div className="max-w-3xl">
          <p className="reveal font-display text-4xl font-semibold tracking-tight text-champagne sm:text-5xl md:text-6xl lg:text-7xl">
            {company.name}
          </p>
          <h1 className="reveal reveal-delay-1 mt-5 max-w-2xl text-2xl font-medium leading-snug text-white sm:text-3xl md:text-4xl">
            Aluguel de toalhas para casamentos, festas de 15 e eventos corporativos
          </h1>
          <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Atendimento em todo o RJ, com peças limpas, cores reais do acervo e mais de{" "}
            {company.years} anos de experiência para empresas e organizadores de eventos.
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
