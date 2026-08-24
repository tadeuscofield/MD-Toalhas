import Image from "next/image";
import { towelColors } from "@/lib/catalog";

export function Formats() {
  return (
    <section id="formatos" className="linen-wash scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne-deep">
            Catálogo
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Cores do acervo para vestir a mesa do seu evento
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Toalhas longas para mesas redondas, em cores prontas para casamentos, festas de 15 e
            eventos empresariais. Peça no WhatsApp a combinação ideal para a sua quantidade.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {towelColors.map((item, index) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-[1.25rem] border border-[var(--line)] bg-white/80 shadow-[var(--shadow)] backdrop-blur-sm transition duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-mist-deep">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-ink">
                  {String(index + 1).padStart(2, "0")} · {item.title}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
