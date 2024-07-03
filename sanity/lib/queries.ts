// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)] | order(_createdAt desc)`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const ENGINEERS_QUERY = groq`*[_type == "engineer" && defined(slug)] | order(name asc)`;

export const ENGINEER_QUERY = groq`*[_type == "engineer" && slug.current == $slug][0]`;
