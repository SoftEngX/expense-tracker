import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

// Example table for expense tracker - add your tables here
export const exampleTable = pgTable("example", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
