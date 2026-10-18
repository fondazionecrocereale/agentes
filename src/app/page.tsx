"use client";

import React from "react";
import {
  Crown,
  Check,
  Zap,
  ShieldCheck,
  Wallet,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import WhatsAppButton from "@/components/WhatsAppButton";

function TelegramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const formatNum = (n: number) =>
  new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 }).format(
    Math.round(n)
  );

const buildTgUrl = (msg: string) =>
  `https://t.me/${SITE_CONFIG.telegramUsername.replace(/^@/, "")}?text=${encodeURIComponent(msg)}`;

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#06090e] text-slate-100 flex flex-col justify-between relative overflow-hidden">
      {/* Glow de fondo sutil */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-amber-500/10 blur-[130px]" />
      </div>

      {/* Header con Links a las Webs de Clientes + Contacto */}
      <header className="relative z-10 border-b border-white/10 bg-[#06090e]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.ganamosClientUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Ir a Ganamos"
              className="font-heading font-black text-xs sm:text-sm px-2.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-400 flex items-center gap-1 transition"
            >
              <span>GANAMOS</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
            <a
              href={SITE_CONFIG.ganamosVipClientUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Ir a GanamosVIP"
              className="font-heading font-black text-xs sm:text-sm px-2.5 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/50 text-amber-300 flex items-center gap-1 transition"
            >
              <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>GANAMOS VIP</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <WhatsAppButton
              variant="header"
              label="WhatsApp"
              message="Hola! Quiero crear mi panel de Agente y ver las promos disponibles."
              pixelData={{
                content_name: "Header WhatsApp",
                content_category: "Landing Header",
                value: SITE_CONFIG.initialSetupArs,
                currency: "ARS",
              }}
            />
            <a
              href={buildTgUrl(
                "Hola! Quiero crear mi panel de Agente y ver las promos disponibles."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm transition"
            >
              <TelegramIcon className="w-4 h-4" />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-10 sm:py-14 space-y-12">
        {/* Hero directo */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Promos Mayoristas + Creación de Panel Propio
          </span>

          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Hacete Cajero / Agente de{" "}
            <a
              href={SITE_CONFIG.ganamosClientUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              Ganamos
            </a>{" "}
            y{" "}
            <a
              href={SITE_CONFIG.ganamosVipClientUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              GanamosVIP
            </a>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Te creamos <strong>tu panel de clientes en el acto</strong>. Elegís
            tu pack en promo y listo.
          </p>

          {/* Botones Principales a WhatsApp (con Pixel) y Telegram */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <WhatsAppButton
              variant="hero"
              label="Pedir Promo por WhatsApp"
              message="Hola! Quiero pedir mi panel en Ganamos / GanamosVIP y aprovechar una promo."
              pixelData={{
                content_name: "Hero Pedir Promo",
                content_category: "Landing Hero",
                value: SITE_CONFIG.initialSetupArs,
                currency: "ARS",
              }}
            />

            <a
              href={buildTgUrl(
                "Hola! Quiero pedir mi panel en Ganamos / GanamosVIP y aprovechar una promo."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-heading font-extrabold text-base shadow-lg shadow-sky-500/25 transition"
            >
              <TelegramIcon className="w-5 h-5" />
              <span>Hablar por Telegram</span>
            </a>
          </div>

          {/* Links a las webs de clientes */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs">
            <span className="text-slate-400">Ver sitios de clientes:</span>
            <a
              href={SITE_CONFIG.ganamosClientUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-400 font-semibold transition"
            >
              <span>Web Clientes Ganamos</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE_CONFIG.ganamosVipClientUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-amber-300 font-semibold transition"
            >
              <span>Web Clientes GanamosVIP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* 4 Promos */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
              Promos Mayoristas + Creación de Panel
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Elegí tu pack para habilitar tu panel al instante
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SITE_CONFIG.packs.map((pack) => (
              <div
                key={pack.id}
                className={`rounded-2xl p-5 flex flex-col justify-between ${
                  pack.featured
                    ? "bg-gradient-to-b from-amber-950/45 to-slate-900 border-2 border-amber-400 shadow-xl shadow-amber-500/15"
                    : "bg-slate-900/80 border border-white/10"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-heading font-extrabold text-base text-white">
                      {pack.name}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        pack.featured
                          ? "bg-amber-400 text-slate-950"
                          : "bg-white/10 text-slate-300"
                      }`}
                    >
                      {pack.badge}
                    </span>
                  </div>

                  {/* Lo que paga y lo que recibe bien grande */}
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-white/10 space-y-2">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                        Pagás solo:
                      </span>
                      <span className="font-heading text-2xl font-black text-amber-400">
                        ${formatNum(pack.clientPays)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-emerald-400">
                      <ArrowRight className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold uppercase">
                        Y recibís en tu panel:
                      </span>
                    </div>

                    <div className="font-heading text-2xl sm:text-3xl font-black text-white leading-none">
                      {formatNum(pack.chips)}
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>
                        Initial Setup:{" "}
                        <strong className="text-amber-300">
                          ${formatNum(pack.initialSetup)} ARS
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Ganamos y GanamosVIP</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-4 mt-4 border-t border-white/10">
                  <WhatsAppButton
                    variant="card"
                    label="WhatsApp"
                    message={`Hola! Quiero la ${pack.name}: pago $${formatNum(
                      pack.clientPays
                    )} + Initial Setup $${formatNum(
                      pack.initialSetup
                    )} ARS y recibo ${formatNum(pack.chips)} en mi panel.`}
                    pixelData={{
                      content_name: pack.name,
                      content_category: "Promo Pack",
                      value: pack.initialSetup,
                      currency: "ARS",
                    }}
                  />
                  <a
                    href={buildTgUrl(
                      `Hola! Quiero la ${pack.name}: pago $${formatNum(
                        pack.clientPays
                      )} + Initial Setup $${formatNum(
                        pack.initialSetup
                      )} ARS y recibo ${formatNum(pack.chips)} en mi panel.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1 transition"
                  >
                    <TelegramIcon className="w-3.5 h-3.5" />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 Beneficios Cortos */}
        <section className="grid sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
            <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-bold text-sm text-white">
                Panel Propio en el Acto
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Creás usuarios y sub-cajeros desde tu celular 24/7.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
            <Wallet className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-bold text-sm text-white">
                Cobrás 100% en Tu Cuenta
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Tus clientes te transfieren directo a tu CBU o MercadoPago.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-bold text-sm text-white">
                Tu Stock No Vence
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Reposición inmediata en tu panel las 24 horas.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Widget Flotante de WhatsApp con Pixel Contact */}
      <WhatsAppButton
        variant="floating"
        label="¡Pedí tu Panel!"
        message="Hola! Quiero información para activar mi panel en Ganamos / GanamosVIP."
        pixelData={{
          content_name: "Floating WhatsApp Widget",
          content_category: "Landing Floating",
          value: SITE_CONFIG.initialSetupArs,
          currency: "ARS",
        }}
      />

      {/* Footer Simple */}
      <footer className="relative z-10 border-t border-white/10 py-6 text-center text-xs text-slate-500">
        <p>
          Ganamos & GanamosVIP · Paneles Oficiales para Agentes y Cajeros · +18
        </p>
      </footer>
    </div>
  );
}
