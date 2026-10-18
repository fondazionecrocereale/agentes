"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/site";
import { trackFbContact, FbContactPayload } from "@/components/FacebookPixel";

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.494 5.467 5.602-1.469c1.914 1.251 4.199 1.969 6.608 1.969 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
    </svg>
  );
}

export type WhatsAppButtonVariant = "header" | "hero" | "card" | "floating";

export interface WhatsAppButtonProps {
  message: string;
  label?: string;
  variant?: WhatsAppButtonVariant;
  phoneNumber?: string;
  pixelData?: FbContactPayload;
  className?: string;
}

const VARIANT_STYLES: Record<WhatsAppButtonVariant, string> = {
  header:
    "inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition",
  hero: "w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading font-extrabold text-base shadow-lg shadow-emerald-500/25 transition",
  card: "py-2.5 px-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1 transition",
  floating:
    "fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading font-extrabold text-sm shadow-2xl shadow-emerald-500/40 transition-transform hover:scale-105",
};

const ICON_SIZES: Record<WhatsAppButtonVariant, string> = {
  header: "w-4 h-4",
  hero: "w-5 h-5",
  card: "w-3.5 h-3.5",
  floating: "w-5 h-5",
};

export default function WhatsAppButton({
  message,
  label = "WhatsApp",
  variant = "card",
  phoneNumber,
  pixelData,
  className,
}: WhatsAppButtonProps) {
  const cleanPhone = (phoneNumber || SITE_CONFIG.whatsappNumber).replace(
    /[^0-9]/g,
    ""
  );
  const href = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackFbContact({
      content_name: pixelData?.content_name || label,
      content_category: pixelData?.content_category || `whatsapp_${variant}`,
      value: pixelData?.value,
      currency: pixelData?.currency || "ARS",
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className || VARIANT_STYLES[variant]}
    >
      <WhatsAppIcon className={ICON_SIZES[variant]} />
      <span>{label}</span>
    </a>
  );
}

