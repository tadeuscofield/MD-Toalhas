import { whatsappUrl } from "@/lib/contacts";

type WhatsAppButtonProps = {
  name: string;
  phone: string;
  displayPhone: string;
  variant?: "primary" | "secondary" | "ghost" | "sticky";
  className?: string;
  message?: string;
};

const variants: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  primary:
    "bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.28)] hover:brightness-105",
  secondary:
    "bg-champagne text-ink hover:bg-champagne-deep hover:text-white",
  ghost:
    "bg-white/10 text-white border border-white/25 hover:bg-white/18 backdrop-blur-sm",
  sticky:
    "bg-[#25D366] text-white shadow-md active:scale-[0.98]",
};

export function WhatsAppButton({
  name,
  phone,
  displayPhone,
  variant = "primary",
  className = "",
  message,
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(phone, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com ${name} no WhatsApp: ${displayPhone}`}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      <span className="flex min-w-0 flex-col items-start leading-tight">
        <span>{name}</span>
        <span className="text-[11px] font-medium opacity-90">{displayPhone}</span>
      </span>
    </a>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.94.53 3.76 1.46 5.33L2 22l4.99-1.55a10 10 0 0 0 5.05 1.36h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.77 13.97c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.16-4.93-4.35-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.37.26-.28.57-.35.76-.35h.55c.17 0 .4-.07.63.48.24.56.8 1.94.87 2.08.07.14.12.3.02.49-.1.19-.14.3-.28.46-.14.16-.3.36-.43.48-.14.14-.29.29-.12.56.17.28.74 1.22 1.59 1.98 1.1.97 2.02 1.27 2.3 1.41.28.14.45.12.61-.07.17-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.7-.17 1.38Z" />
    </svg>
  );
}
