import Image from "next/image";
import { company } from "@/lib/contacts";
import { aboutImage } from "@/lib/catalog";

export function About() {
  return (
    <section id="sobre" className="linen-wash scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne-deep">
            Sobre a {company.shortName}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Mais de {company.years} anos vestindo mesas no Rio de Janeiro
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            A {company.name} nasceu para facilitar a vida de empresas, buffets e organizadores:
            toalhas de qualidade, atendimento direto e foco em eventos que precisam de boa
            apresentação — casamentos, festas de 15, confraternizações e reuniões corporativas.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Nosso diferencial é a combinação de tradição com resposta comercial rápida pelo
            WhatsApp. Você fala com quem resolve.
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[var(--line)] shadow-[var(--shadow)] sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src={aboutImage.image}
            alt={aboutImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/75 via-ink/10 to-transparent p-6 text-white">
            <p className="font-display text-2xl font-semibold">{aboutImage.title}</p>
            <p className="mt-2 max-w-xs text-sm text-white/85">
              Acervo real da MD — cores prontas para combinar com o tema do seu evento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
