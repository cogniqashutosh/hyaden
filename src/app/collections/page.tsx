import { Suspense } from "react";
import type { Metadata } from "next";
import { CollectionsClient } from "@/components/collections/collections-client";

export const metadata: Metadata = {
  title: "Furniture Collections",
  description:
    "Browse Hayden Furniture Depot's full collection of living room, bedroom, dining, mattresses, and accent furniture.",
};

export default function CollectionsPage() {
  return (
    <Suspense fallback={null}>
      <CollectionsClient />
    </Suspense>
  );
}
