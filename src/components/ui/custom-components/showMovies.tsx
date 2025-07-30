"use client";

import { ChangeEvent, useState } from "react";
import * as actions from "@/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface MovieProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ShowMovie = ({ data }: { data: MovieProps }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState({ ...data });

  const handleUpdateMovie = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof MovieProps
  ) => {
    setUpdatedMovie((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-40 object-cover rounded"
        />
        <p className="mt-2">{data.description}</p>

        <div className="flex flex-col gap-2 mt-4">
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">Edit</Button>
            </DialogTrigger>

            <DialogContent className="bg-yellow-100 text-black">
              <DialogHeader>
                <DialogTitle>Edit Movie</DialogTitle>
              </DialogHeader>

              <form
                className="space-y-4"
                action={actions.editMovie}
                onSubmit={() => setOpenDialog(false)}
              >
                <div>
                  <Label>Title</Label>
                  <Input
                    name="title"
                    value={updatedMovie.title}
                    onChange={(e) => handleUpdateMovie(e, "title")}
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label>Description</Label>
                  <textarea
                    name="description"
                    value={updatedMovie.description}
                    onChange={(e) => handleUpdateMovie(e, "description")}
                    className="w-full p-2 border rounded bg-white"
                  />
                </div>

                <div>
                  <Label>Image URL</Label>
                  <Input
                    name="imageUrl"
                    value={updatedMovie.image}
                    onChange={(e) => handleUpdateMovie(e, "image")}
                    className="bg-white"
                  />
                </div>

                <Input type="hidden" name="movieID" value={data.id} />
                <Button type="submit" className="w-full bg-yellow-500 text-black">
                  Save
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <form action={actions.deleteMovie}>
            <Input type="hidden" name="movieID" value={data.id} />
            <Button className="w-full bg-red-500 text-white">Delete</Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShowMovie;

