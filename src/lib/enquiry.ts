export type EnquiryPayload = {
  name: string;
  business: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  unit: QuantityUnit;
  location: string;
  message: string;
  contact: string;
};

export const quantityUnits = ["KG", "Tonnes"] as const;
export type QuantityUnit = (typeof quantityUnits)[number];

export const productOptions = [
  "Jawla Dry Fish",
  "Mixed Dry Fish",
  "Other Dry Fish Varieties",
  "Not sure yet / need guidance",
] as const;

export function normalisePhone(value: string) {
  return value.replace(/[^\d]/g, "");
}

export function isValidPhone(value: string) {
  const digits = normalisePhone(value);
  return digits.length >= 10 && digits.length <= 13;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEnquiry(
  values: EnquiryPayload,
  options: { requireQuantity: boolean },
) {
  const errors: Partial<Record<keyof EnquiryPayload, string>> = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (values.business.trim().length < 2) {
    errors.business = "Please enter your business name.";
  }
  if (!isValidPhone(values.phone)) {
    errors.phone = "Enter a valid phone number, including the country code if outside India.";
  }
  if (values.email.trim() && !emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address, or leave this field empty.";
  }
  if (!values.product.trim()) {
    errors.product = "Please select the product you are interested in.";
  }
  if (options.requireQuantity) {
    const quantity = Number(values.quantity);
    if (!values.quantity.trim() || !Number.isFinite(quantity) || quantity <= 0) {
      errors.quantity = "Enter the quantity you require.";
    } else if (quantity > 1_000_000) {
      errors.quantity = "Please enter a realistic quantity and confirm the unit.";
    }
  } else if (values.quantity.trim()) {
    const quantity = Number(values.quantity);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      errors.quantity = "Enter a valid quantity, or leave this field empty.";
    }
  }
  if (values.location.trim().length < 2) {
    errors.location = "Please enter the delivery location.";
  }

  return errors;
}

export function buildEnquiryMessage(values: EnquiryPayload, intent: string) {
  const quantity = values.quantity.trim()
    ? `${values.quantity.trim()} ${values.unit}`
    : "Not specified";

  const lines = [
    `*${intent} — Ashrafi Marine Products*`,
    "",
    `*Name:* ${values.name.trim()}`,
    `*Business:* ${values.business.trim()}`,
    `*Phone:* ${values.phone.trim()}`,
  ];

  if (values.email.trim()) {
    lines.push(`*Email:* ${values.email.trim()}`);
  }

  lines.push(
    `*Product:* ${values.product}`,
    `*Quantity:* ${quantity}`,
    `*Delivery location:* ${values.location.trim()}`,
  );

  if (values.message.trim()) {
    lines.push("", `*Additional details:* ${values.message.trim()}`);
  }

  lines.push("", "Sent via the Ashrafi Marine Products website.");

  return lines.join("\n");
}
