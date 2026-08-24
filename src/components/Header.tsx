import { company, contacts } from "@/lib/contacts";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <a href="#topo" className="group flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-sm font-bold tracking-[0.18em] text-champagne ring-1 ring-white/20 backdrop-blur-md transition group-hover:bg-white/15">
            MD
          </span>
          <span className="hidden min-[420px]:block">
            <span className="font-display block text-base font-semibold tracking-tight text-white sm:text-lg">
              {company.name}
            </span>
            <span className="text-xs text-white/65">+{company.years} anos no mercado</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex" aria-label="Principal">
          <a href="#formatos" className="hover:text-white">
            Cores
          </a>
          <a href="#eventos" className="hover:text-white">
            Eventos
          </a>
          <a href="#como-funciona" className="hover:text-white">
            Como funciona
          </a>
          <a href="#contato" className="hover:text-white">
            Contato
          </a>
        </nav>

        <div className="hidden gap-2 lg:flex">
          {contacts.map((c) => (
            <WhatsAppButton
              key={c.id}
              name={c.name}
              phone={c.whatsapp}
              displayPhone={c.displayPhone}
              variant="ghost"
              className="!px-3 !py-2"
            />
          ))}
        </div>
      </div>
    </header>
  );
}
