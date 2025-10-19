import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// Setup se ejecuta automáticamente por Jest
// Los hooks beforeAll, afterAll, afterEach se manejan en cada test file

