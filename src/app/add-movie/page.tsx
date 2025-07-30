import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import React from 'react'
import * as action from "@/actions"

const AddMovie = () => {
  return (
    <div className="w-10/12 mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">Add a New Movie</h1>
      <form action={action.createMovie} method='POST' className="flex flex-col gap-4">
        <Label htmlFor="title">Title</Label>
        <input type="text" id="title" name="title"  required/>

        <Label htmlFor="description">Description</Label>
        <textarea
          name="description"
          className="w-full p-2 border rounded"
          required
        />
        <Label htmlFor="image">Image URL</Label>
        <input type="url" id="image" name="image" required/>

    <Button type="submit">Add movie</Button>
      </form>
    </div>
  )
}

export default AddMovie;
