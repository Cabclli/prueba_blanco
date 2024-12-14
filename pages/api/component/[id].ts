import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id }, // Extraer el ID de la consulta
    method,
  } = req;

  if (method === 'GET') {
    try {
      const component = await prisma.component.findUnique({
        where: { id: Number(id) }, // Buscar el componente por ID
        include: { category: true }, // Incluir la categoría
      });

      if (!component) {
        return res.status(404).json({ error: 'Componente no encontrado' });
      }

      res.status(200).json(component);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el componente' });
    } finally {
      await prisma.$disconnect(); // Asegura cerrar la conexión
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
