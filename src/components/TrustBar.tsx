const items = [
  { label: "+30 anos", detail: "de tradição no mercado" },
  { label: "Empresas", detail: "e organizadores de eventos" },
  { label: "RJ", detail: "entrega e suporte comercial" },
  { label: "WhatsApp", detail: "dois canais de orçamento" },
];

export function TrustBar() {
  return (
    <section aria-label="Diferenciais" className="border-y border-[var(--line)] bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <p className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {item.label}
            </p>
            <p className="mt-1 text-sm text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
