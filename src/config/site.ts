export const SITE_CONFIG = {
  // Leídos desde .env.local
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5491123456789",
  telegramUsername:
    process.env.NEXT_PUBLIC_TELEGRAM_USERNAME || "GanamosAgentesVIP",
  fbPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || "1713967079582707",
  fbTestEventCode: process.env.NEXT_PUBLIC_FB_TEST_EVENT_CODE || "TEST84823",

  // Webs de clientes (no paneles de agentes)
  ganamosClientUrl:
    process.env.NEXT_PUBLIC_GANAMOS_URL || "https://ganamos.net",
  ganamosVipClientUrl:
    process.env.NEXT_PUBLIC_GANAMOS_VIP_URL || "https://ganamosvip.com",

  // Costo de alta / Setup inicial del panel en cada promo
  initialSetupArs: 50000,

  // Tu compra mayorista: Enviás $200.000 -> Te acreditan 1.200.000 ($0.1667 / ~$0.17 c/u).
  packs: [
    {
      id: "promo-70k",
      name: "Promo Inicial",
      badge: "Para arrancar",
      chips: 70000,
      clientPays: 35000,
      initialSetup: 50000,
      pricePerChip: 0.5,
      featured: false,
    },
    {
      id: "promo-130k",
      name: "Promo Cajero",
      badge: "🔥 Muy pedida",
      chips: 130000,
      clientPays: 65000,
      initialSetup: 50000,
      pricePerChip: 0.5,
      featured: true,
    },
    {
      id: "promo-210k",
      name: "Promo Agente Pro",
      badge: "Bonificada",
      chips: 210000,
      clientPays: 100000,
      initialSetup: 50000,
      pricePerChip: 0.476,
      featured: false,
    },
    {
      id: "promo-500k",
      name: "Promo Súper VIP",
      badge: "Mayorista",
      chips: 500000,
      clientPays: 165000,
      initialSetup: 50000,
      pricePerChip: 0.33,
      featured: false,
    },
  ],
};
