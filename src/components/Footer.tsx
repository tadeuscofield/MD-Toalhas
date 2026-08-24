import { company, contacts } from "@/lib/contacts";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-white pb-28 pt-12 sm:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-ink">{company.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Aluguel de toalhas de mesa para casamentos, festas de 15 anos, formaturas e eventos
            empresariais no Rio de Janeiro.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a href="#formatos" className="hover:text-ink">
                Formatos
              </a>
            </li>
            <li>
              <a href="#eventos" className="hover:text-ink">
                Eventos
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-ink">
                Como funciona
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-ink">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">WhatsApp</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {contacts.map((c) => (
              <li key={c.id}>
                {c.name}: {c.displayPhone}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-[var(--line)] px-4 pt-6 text-xs text-muted sm:px-6 lg:px-8">
        <p>
          © {year} {company.name}. Todos os direitos reservados.
        </p>
        <p className="mt-2 max-w-3xl leading-relaxed">
          Palavras-chave: aluguel de toalhas RJ, toalhas para casamento, toalhas para festa de 15,
          toalhas para eventos corporativos, locação de toalhas de mesa no Rio de Janeiro.
        </p>
      </div>
    </footer>
  );
}
