import { PrismaClient } from "@/apps/gakusim-app/prisma/client";

const db = new PrismaClient({
  datasources: {
    db: {
      url: process.env.GAKUSIM_DATABASE_URL,
    },
  },
});

export { db };
