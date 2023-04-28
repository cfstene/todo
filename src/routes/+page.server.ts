import { prisma } from '$lib/server/prisma'; 
import type {Actions} from '@sveltejs/kit'

export const load = async () => {
  const tasks = await prisma.todo.findMany();
  return {tasks};
}

export const actions: Actions = {
  create: async ({request}) => {
    const data = await request.formData();
    const taskName = data.get('taskName');
    const response = await prisma.todo.create({
      data: {
        name: taskName
      }
    })
    return {response}
  },

  delete: async ({request}) => {
    const data = await request.formData();
    const idString = data.get('id');
    if (!idString) {
      return {status: 403, body: 'No id provided'}
    } 
    const id:number = parseInt(idString);
    const response = await prisma.todo.delete({
      where: {
        id: id
      }
    })
    return {response}
  }
}