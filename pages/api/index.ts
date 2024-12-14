import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const components = await prisma.component.findMany({
        include: {
          category: true,
        },
      });
      res.status(200).json(components);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los componentes' });
    } finally {
      await prisma.$disconnect(); // Asegura cerrar la conexión
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
