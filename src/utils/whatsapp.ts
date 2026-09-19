export const PHONE_NUMBER_DISPLAY = "97643 69897";
export const PHONE_NUMBER_RAW = "9764369897";
export const WHATSAPP_NUMBER = "919764369897";
export const BUSINESS_NAME = "EBC DIGITAL HUB";
export const BUSINESS_LOCATION = "Jalna, Maharashtra";

/**
 * Builds a direct WhatsApp chat link with an encoded pre-filled text.
 */
export function getWhatsAppLink(customMessage?: string): string {
  const baseMessage = customMessage || `Hello ${BUSINESS_NAME}, मुझे आपकी services के बारे में जानकारी चाहिए.`;
  const encodedText = encodeURIComponent(baseMessage.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

/**
 * Builds phone call URI.
 */
export function getPhoneCallLink(): string {
  return `tel:+91${PHONE_NUMBER_RAW}`;
}

/**
 * Format date for display or message.
 */
export function formatBookingMessage(booking: {
  name: string;
  mobile: string;
  area: string;
  serviceCategory: string;
  serviceRequired: string;
  isHomeService: 'yes' | 'no';
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}): string {
  const lines = [
    `*Hello ${BUSINESS_NAME}*, नई Service Request:`,
    `--------------------------------`,
    `👤 *नाम:* ${booking.name || 'Not provided'}`,
    `📱 *मोबाइल:* ${booking.mobile || 'Not provided'}`,
    `📍 *जालना एरिया:* ${booking.area || 'Jalna'}`,
    `🛠 *सर्विस:* ${booking.serviceRequired || booking.serviceCategory}`,
    `🏠 *Home Service चाहिए?:* ${booking.isHomeService === 'yes' ? 'हाँ (Yes)' : 'नहीं / शॉप पर आऊंगा'}`,
  ];

  if (booking.preferredDate) {
    lines.push(`📅 *तारीख:* ${booking.preferredDate}`);
  }
  if (booking.preferredTime) {
    lines.push(`⏰ *समय:* ${booking.preferredTime}`);
  }
  if (booking.message) {
    lines.push(`💬 *विवरण:* ${booking.message}`);
  }

  lines.push(`--------------------------------`);
  lines.push(`कृपया मुझे कन्फर्मेशन और आगे की प्रोसेस बताएं.`);

  return lines.join('\n');
}
