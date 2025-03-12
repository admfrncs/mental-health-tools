// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Global declaration for PrismaClient to avoid multiple instances
const globalForPrisma = global as unknown as { prisma?: PrismaClient };

// Prisma client initialization
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

// Retain PrismaClient instance during development to prevent multiple instances
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
 