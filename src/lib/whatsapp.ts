import type { Contact } from "@/content/site";

export const defaultWhatsAppMessage =
  "Hello Ashrafi Marine Products, I am interested in your dry fish products. Please share available varieties, wholesale prices and bulk supply details.";

export function whatsappLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryMessage(productName: string) {
  return `Hello Ashrafi Marine Products, I am interested in purchasing ${productName} in bulk. Please share product availability and wholesale pricing.`;
}

export function contactWhatsAppLink(contact: Contact, message?: string) {
  return whatsappLink(contact.whatsapp, message ?? defaultWhatsAppMessage);
}
