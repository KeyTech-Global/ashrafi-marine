"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { EnquiryForm } from "@/components/enquiry-form";
import { products } from "@/content/site";

function WholesaleEnquiryFields() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("product") ?? undefined;
  const matched = products.find((product) => product.slug === requested);

  return (
    <EnquiryForm
      key={matched?.slug ?? "default"}
      intent="Wholesale enquiry"
      initialProduct={matched?.slug}
    />
  );
}

export function WholesaleEnquiry() {
  return (
    <Suspense fallback={<EnquiryForm intent="Wholesale enquiry" />}>
      <WholesaleEnquiryFields />
    </Suspense>
  );
}
