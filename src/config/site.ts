export const SITE_CONFIG = {
  // Leídos desde .env.local
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5491123456789",
  telegramUsername:
    process.env.NEXT_PUBLIC_TELEGRAM_USERNAME || "GanamosAgentesVIP",

  // Webs de clientes (no paneles de agentes)
  ganamosClientUrl:
    process.env.NEXT_PUBLIC_GANAMOS_URL || "https://ganamos.net",
  ganamosVipClientUrl:
    process.env.NEXT_PUBLIC_GANAMOS_VIP_URL || "https://ganamosvip.com",

  // Tu compra mayorista: Enviás $200.000 -> Te acreditan 1.200.000 ($0.1667 / ~$0.17 c/u).
  // Con estas promos (ej. $65.000 -> 130.000) duplicás y hasta triplicás tus $200.000:
  packs: [
    {
      id: "promo-70k",
      name: "Promo Inicial",
      badge: "Para arrancar",
      chips: 70000,
      clientPays: 35000, // Tu costo ($0.17): $11.900 -> Tu ganancia limpia: +$23.100 (66% para vos)
      pricePerChip: 0.5,
      featured: false,
    },
    {
      id: "promo-130k",
      name: "Promo Cajero",
      badge: "🔥 Muy pedida",
      chips: 130000,
      clientPays: 65000, // Tu costo ($0.17): $22.100 -> Tu ganancia limpia: +$42.900 (66% para vos)
      pricePerChip: 0.5,
      featured: true,
    },
    {
      id: "promo-210k",
      name: "Promo Agente Pro",
      badge: "Bonificada",
      chips: 210000,
      clientPays: 100000, // Tu costo ($0.17): $35.700 -> Tu ganancia limpia: +$64.300 (64% para vos)
      pricePerChip: 0.476,
      featured: false,
    },
    {
      id: "promo-500k",
      name: "Promo Súper VIP",
      badge: "Mayorista",
      chips: 500000,
      clientPays: 165000, // Tu costo ($0.17): $85.000 -> Tu ganancia limpia: +$80.000 (49% para vos)
      pricePerChip: 0.33,
      featured: false,
    },
  ],
};
