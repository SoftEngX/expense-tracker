import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const budgets = pgTable("budgets", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  amount: varchar("amount", { length: 256 }).notNull(),
  icon: varchar("icon", { length: 256 }),
  createdBy: varchar("createdBy", { length: 256 }),
});