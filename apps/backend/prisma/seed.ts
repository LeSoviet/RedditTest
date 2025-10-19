import { PrismaClient } from '@prisma/client';
import { OrderStatus } from '@shared/types';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.order.deleteMany();

  // Create sample orders
  const orders = [
    {
      customer_name: 'John Doe',
      item: 'Laptop HP ProBook',
      quantity: 2,
      status: OrderStatus.PENDING,
    },
    {
      customer_name: 'Jane Smith',
      item: 'iPhone 15 Pro',
      quantity: 1,
      status: OrderStatus.COMPLETED,
    },
    {
      customer_name: 'Bob Johnson',
      item: 'Samsung Galaxy S24',
      quantity: 3,
      status: OrderStatus.PENDING,
    },
    {
      customer_name: 'Alice Williams',
      item: 'MacBook Air M3',
      quantity: 1,
      status: OrderStatus.COMPLETED,
    },
    {
      customer_name: 'Charlie Brown',
      item: 'Dell XPS 15',
      quantity: 2,
      status: OrderStatus.CANCELLED,
    },
    {
      customer_name: 'Diana Prince',
      item: 'iPad Pro 12.9',
      quantity: 4,
      status: OrderStatus.PENDING,
    },
    {
      customer_name: 'Edward Norton',
      item: 'Sony WH-1000XM5',
      quantity: 1,
      status: OrderStatus.COMPLETED,
    },
    {
      customer_name: 'Fiona Green',
      item: 'AirPods Pro 2',
      quantity: 5,
      status: OrderStatus.PENDING,
    },
    {
      customer_name: 'George Miller',
      item: 'Samsung Monitor 32"',
      quantity: 2,
      status: OrderStatus.CANCELLED,
    },
    {
      customer_name: 'Helen Carter',
      item: 'Logitech MX Master 3S',
      quantity: 3,
      status: OrderStatus.COMPLETED,
    },
  ];

  for (const order of orders) {
    await prisma.order.create({
      data: order,
    });
  }

  console.log('✅ Database seeded successfully!');
  console.log(`📦 Created ${orders.length} orders`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error seeding database:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
