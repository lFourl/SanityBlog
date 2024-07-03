// ./app/(blog)/[slug]/page.tsx

import { QueryParams, SanityDocument } from "next-sanity";
import { notFound } from "next/navigation";

import { ENGINEERS_QUERY, ENGINEER_QUERY } from "@/sanity/lib/queries";
import Engineer from "@/components/Engineer";

import { sanityFetch } from "@/sanity/lib/fetch";

export async function generateStaticParams() {
  const engineers = await sanityFetch<SanityDocument[]>({
    query: ENGINEERS_QUERY,
    perspective: "published",
    stega: false,
  });

  return engineers.map((engineer) => ({
    slug: engineer.slug.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const engineer = await sanityFetch<SanityDocument>({
    query: ENGINEER_QUERY,
    params,
  });
  if (!engineer) {
    return notFound();
  }
  return <Engineer engineer={engineer} />;
}
