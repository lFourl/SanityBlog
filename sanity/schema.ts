import { type SchemaTypeDefinition } from "sanity";

import engineer from "./schemaTypes/engineer";
import blockContent from "./schemaTypes/blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, engineer],
};
