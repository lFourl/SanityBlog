import { defineField, defineType } from "sanity";

export default defineType({
  name: "engineer",
  title: "Engineer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "response",
      title: "Average Response Time",
      type: "text",
    }),
    defineField({
      name: "ticketCount",
      title: "Ticket Count",
      type: "text",
    }),
    defineField({
      name: "ticketAge",
      title: "Average Age of Tickets",
      type: "text",
    }),
    defineField({
      name: "goals",
      title: "Goals",
      type: "text",
    }),
  ],
});
