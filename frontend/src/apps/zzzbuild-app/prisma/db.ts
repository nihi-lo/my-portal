import { PrismaClient } from "@/apps/zzzbuild-app/prisma/client";

const db = new PrismaClient({
  datasources: {
    db: {
      url: process.env.ZZZBUILD_DATABASE_URL,
    },
  },
});

export { db };
