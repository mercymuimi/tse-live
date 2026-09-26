export const TSE_WHATSAPP_NUMBER = "254110277215"; // Mercy Muimi — 0110277215

/**
 * Builds a wa.me link that opens WhatsApp with a pre-filled message.
 * Used to let buyers "secure their spot" by sending their order
 * straight to TSE's WhatsApp instead of an online checkout.
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${TSE_WHATSAPP_NUMBER}?text=${encoded}`;
}
