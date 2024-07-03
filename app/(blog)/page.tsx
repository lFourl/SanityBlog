// ./app/(blog)/page.tsx

import { SanityDocument } from "next-sanity";

import Engineers from "@/components/Engineers";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ENGINEERS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const engineers = await sanityFetch<SanityDocument[]>({
    query: ENGINEERS_QUERY,
  });

  return <Engineers engineers={engineers} />;
}
