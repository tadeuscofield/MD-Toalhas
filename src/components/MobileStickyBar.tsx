import { contacts } from "@/lib/contacts";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/95 p-3 backdrop-blur-md sm:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        {contacts.map((c) => (
          <WhatsAppButton
            key={c.id}
            name={c.name}
            phone={c.whatsapp}
            displayPhone={c.displayPhone}
            variant="sticky"
            className="w-full !rounded-xl !px-2 !py-2.5 text-left"
          />
        ))}
      </div>
    </div>
  );
}
