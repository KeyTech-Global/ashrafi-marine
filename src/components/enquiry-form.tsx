"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Copy, MessageCircle, Phone, RotateCcw } from "lucide-react";
import { useRef, useState, useSyncExternalStore } from "react";
import { contacts, products } from "@/content/site";
import {
  buildEnquiryMessage,
  productOptions,
  quantityUnits,
  validateEnquiry,
  type EnquiryPayload,
  type QuantityUnit,
} from "@/lib/enquiry";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<keyof EnquiryPayload, string>>;

const emptyValues: EnquiryPayload = {
  name: "",
  business: "",
  phone: "",
  email: "",
  product: "",
  quantity: "",
  unit: "Tonnes",
  location: "",
  message: "",
  contact: "amin",
};

const ease = [0.22, 1, 0.36, 1] as const;

const subscribeToHydration = () => () => {};

export function EnquiryForm({
  intent = "Wholesale enquiry",
  requireQuantity = true,
  initialProduct,
  compact = false,
  className,
}: {
  intent?: string;
  requireQuantity?: boolean;
  initialProduct?: string;
  compact?: boolean;
  className?: string;
}) {
  const matchedProduct = products.find((product) => product.slug === initialProduct);
  const [values, setValues] = useState<EnquiryPayload>({
    ...emptyValues,
    product: matchedProduct?.name ?? "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<{
    url: string;
    message: string;
    contactName: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const reduce = useReducedMotion();
  // Prevents a native GET submit (which would put details in the URL) before
  // React has hydrated and attached the submit handler.
  const ready = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );

  function update<K extends keyof EnquiryPayload>(key: K, value: EnquiryPayload[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateEnquiry(values, { requireQuantity });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      const field = formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`);
      field?.focus();
      field?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      return;
    }

    const contact =
      contacts.find((item) => item.id === values.contact) ?? contacts[0];
    const message = buildEnquiryMessage(values, intent);
    const url = whatsappLink(contact.whatsapp, message);

    setSubmitted({ url, message, contactName: contact.name });
    setCopied(false);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function copyMessage() {
    if (!submitted) return;
    try {
      await navigator.clipboard.writeText(submitted.message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function reset() {
    setSubmitted(null);
    setErrors({});
    setValues({ ...emptyValues, product: matchedProduct?.name ?? "" });
  }

  if (submitted) {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className={cn(
          "relative overflow-hidden border border-navy/10 bg-white p-6 shadow-card sm:p-8",
          className,
        )}
        aria-live="polite"
      >
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gold" />
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
            <Check className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <div>
            <p className="eyebrow text-teal">Enquiry prepared</p>
            <h3 className="mt-2 font-display text-2xl leading-tight text-navy">
              Your WhatsApp message is ready.
            </h3>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-navy/65">
              A WhatsApp chat with {submitted.contactName} should have opened in a
              new tab. Press <strong className="font-semibold text-navy">send</strong>{" "}
              there to deliver the message. Nothing has been stored on this
              website.
            </p>
          </div>
        </div>

        <div className="mt-6 max-h-64 overflow-y-auto rounded-sm border border-navy/10 bg-sand-soft/40 p-4">
          <pre className="whitespace-pre-wrap font-sans text-[0.8rem] leading-relaxed text-navy/70">
            {submitted.message}
          </pre>
        </div>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <a
            href={submitted.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-navy flex-1"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            Open WhatsApp
          </a>
          <button type="button" onClick={copyMessage} className="btn btn-outline-dark">
            {copied ? (
              <Check className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
            )}
            {copied ? "Copied" : "Copy details"}
          </button>
          <button type="button" onClick={reset} className="btn btn-outline-dark">
            <RotateCcw className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
            Start over
          </button>
        </div>

        <p className="mt-5 text-[0.72rem] leading-relaxed text-navy/65">
          WhatsApp not opening? Call{" "}
          <a href={contacts[0].phoneHref} className="font-semibold text-navy underline decoration-gold underline-offset-4">
            {contacts[0].phoneDisplay}
          </a>{" "}
          and share the same details.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "relative overflow-hidden border border-navy/10 bg-white p-6 shadow-card sm:p-8",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gold" />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="eyebrow text-teal">{intent}</p>
          <h3 className="mt-2 font-display text-2xl leading-tight text-navy">
            Tell us what you need.
          </h3>
        </div>
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-navy/60">
          * Required
        </p>
      </div>

      <p className="mt-3 text-[0.85rem] leading-relaxed text-navy/65">
        Share your requirement below. Submitting prepares a WhatsApp message to
        the business — no prices are listed and nothing is saved on this website.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Customer name"
          error={errors.name}
          required
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="field"
            placeholder="Your full name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>

        <Field id="business" label="Business name" error={errors.business} required>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            className="field"
            placeholder="Shop, firm or company"
            value={values.business}
            onChange={(event) => update("business", event.target.value)}
            aria-invalid={Boolean(errors.business)}
            aria-describedby={errors.business ? "business-error" : undefined}
          />
        </Field>

        <Field id="phone" label="Phone number" error={errors.phone} required>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className="field"
            placeholder="+91 00000 00000"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email} hint="Optional">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className="field"
            placeholder="you@business.com"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field
          id="product"
          label="Product interested in"
          error={errors.product}
          required
          className="sm:col-span-2"
        >
          <div className="relative">
            <select
              id="product"
              name="product"
              className="field appearance-none pr-10"
              value={values.product}
              onChange={(event) => update("product", event.target.value)}
              aria-invalid={Boolean(errors.product)}
              aria-describedby={errors.product ? "product-error" : undefined}
            >
              <option value="">Select a dry fish product</option>
              {productOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-navy/45"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </div>
        </Field>

        <Field
          id="quantity"
          label="Required quantity"
          error={errors.quantity}
          required={requireQuantity}
          hint={requireQuantity ? undefined : "Optional"}
        >
          <div className="flex gap-2">
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="0"
              step="any"
              inputMode="decimal"
              className="field"
              placeholder={values.unit === "Tonnes" ? "e.g. 5" : "e.g. 500"}
              value={values.quantity}
              onChange={(event) => update("quantity", event.target.value)}
              aria-invalid={Boolean(errors.quantity)}
              aria-describedby={errors.quantity ? "quantity-error" : undefined}
            />
            <div
              className="flex shrink-0 rounded-sm border border-navy/16 bg-pearl p-0.5"
              role="group"
              aria-label="Quantity unit"
            >
              {quantityUnits.map((unit) => (
                <button
                  key={unit}
                  type="button"
                  onClick={() => update("unit", unit as QuantityUnit)}
                  aria-pressed={values.unit === unit}
                  className={cn(
                    "rounded-[2px] px-2.5 text-[0.66rem] font-bold uppercase tracking-[0.08em] transition-colors",
                    values.unit === unit
                      ? "bg-navy text-pearl"
                      : "text-navy/65 hover:text-navy",
                  )}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>
        </Field>

        <Field
          id="location"
          label="Delivery location"
          error={errors.location}
          required
        >
          <input
            id="location"
            name="location"
            type="text"
            autoComplete="address-level2"
            className="field"
            placeholder="City and state"
            value={values.location}
            onChange={(event) => update("location", event.target.value)}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "location-error" : undefined}
          />
        </Field>

        <Field id="message" label="Additional message" hint="Optional" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={compact ? 3 : 4}
            className="field resize-y"
            placeholder="Variety, grade, packing or any other detail that helps us respond accurately."
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
          />
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="field-label">Send your enquiry to</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {contacts.map((contact) => (
            <label
              key={contact.id}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-sm border p-3.5 transition-colors",
                values.contact === contact.id
                  ? "border-teal bg-teal/[0.06]"
                  : "border-navy/12 hover:border-navy/30",
              )}
            >
              <input
                type="radio"
                name="contact"
                value={contact.id}
                checked={values.contact === contact.id}
                onChange={() => update("contact", contact.id)}
                className="sr-only"
              />
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full font-display text-[0.78rem]",
                  values.contact === contact.id
                    ? "bg-teal text-white"
                    : "bg-navy/5 text-navy/70",
                )}
              >
                {contact.initials}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[0.85rem] font-semibold text-navy">
                  {contact.name}
                </span>
                <span className="block text-[0.72rem] text-navy/65">
                  {contact.phoneDisplay}
                </span>
              </span>
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded-full border",
                  values.contact === contact.id
                    ? "border-teal bg-teal"
                    : "border-navy/25",
                )}
                aria-hidden="true"
              >
                {values.contact === contact.id && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={!ready}
        aria-busy={!ready}
        className="btn btn-gold mt-6 w-full disabled:cursor-wait disabled:opacity-70"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
        Send enquiry on WhatsApp
      </button>

      <p className="mt-4 flex items-start gap-2 text-[0.72rem] leading-relaxed text-navy/65">
        <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.6} aria-hidden="true" />
        Prefer to speak directly? Call{" "}
        <a
          href={contacts[0].phoneHref}
          className="font-semibold text-navy/70 underline decoration-gold underline-offset-4 transition-colors hover:text-navy"
        >
          {contacts[0].phoneDisplay}
        </a>
        . Your details are only sent to WhatsApp — this site does not store
        enquiries.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? (
          <span className="ml-1 text-teal" aria-hidden="true">
            *
          </span>
        ) : (
          hint && (
            <span className="ml-1.5 font-medium normal-case tracking-normal text-navy/60">
              ({hint})
            </span>
          )
        )}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="field-error"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
