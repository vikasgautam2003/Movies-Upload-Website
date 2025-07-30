// src/actions/index.ts
'use server';

import { db } from '@/utils/prisma';
import { redirect } from 'next/navigation';

export async function createMovie(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const image = formData.get('image') as string;

  if (!title || !description || !image) {
    throw new Error('All fields are required');
  }

  await db.movie.create({
    data: {
      title,
      description,
      image,
    },
  });

  redirect('/all-movies');
}



export async function deleteMovie(formData: FormData) {

  const movieID = formData.get('movieID') as string;

  if (!movieID) {
    throw new Error('Movie ID is required');
  }

  await db.movie.delete({ where: { id: movieID } });
}


export async function editMovie(formData: FormData) {
   
  const movieID = formData.get('movieID') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const image = formData.get('imageUrl') as string;

  if (!movieID || !title || !description || !image) {
    throw new Error('All fields are required');
  }

  await db.movie.update({
    where: { id: movieID },
    data: {
      title,
      description,
      image,
    },
  });

  redirect('/all-movies');
}