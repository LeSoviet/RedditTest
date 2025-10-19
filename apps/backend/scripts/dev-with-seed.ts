import { PrismaClient } from '@prisma/client';
import { spawn } from 'child_process';
import path from 'path';

const prisma = new PrismaClient();

async function checkAndSeed() {
  try {
    // Check if database has data
    const orderCount = await prisma.order.count();
    
    if (orderCount === 0) {
      console.log('🌱 Empty database detected. Running seed...');
      
      // Run seed script
      const seedProcess = spawn('tsx', ['prisma/seed.ts'], {
        cwd: path.resolve(__dirname, '..'),
        stdio: 'inherit',
        shell: true
      });

      await new Promise((resolve, reject) => {
        seedProcess.on('close', (code) => {
          if (code === 0) {
            resolve(true);
          } else {
            reject(new Error(`Seed failed with code ${code}`));
          }
        });
      });
    } else {
      console.log(`📦 Database has ${orderCount} orders. Skipping seed.`);
    }
  } catch (error) {
    console.error('❌ Error checking/seeding database:', error);
    console.log('⚠️  Starting server anyway...');
  } finally {
    await prisma.$disconnect();
  }
}

async function startDevServer() {
  console.log('🚀 Starting development server...\n');
  
  // Start tsx watch
  const devProcess = spawn('tsx', ['watch', 'src/index.ts'], {
    cwd: path.resolve(__dirname, '..'),
    stdio: 'inherit',
    shell: true
  });

  devProcess.on('close', (code) => {
    process.exit(code || 0);
  });
}

// Main execution
(async () => {
  await checkAndSeed();
  startDevServer();
})();
