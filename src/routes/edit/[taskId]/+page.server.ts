import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params}) => {
  const task = await prisma.todo.findUnique({
    where: {
      id: parseInt(params.taskId)
    }
  });
  return {task};
}