"use client"

import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";

import { BsFileEarmarkPlus } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { Button } from './ui/button';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
});

type formSchemaType = z.infer<typeof formSchema>

function CreateFormBtn() {

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: formSchemaType) {
    console.log(values);
  }
  return <Dialog>
    <DialogTrigger asChild>
      <Button>Create new Form</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Form</DialogTitle>
        <DialogDescription>
          Create a new form to start collecting responses.
        </DialogDescription>
      </DialogHeader>
      <div className="div"></div>
    </DialogContent>
  </Dialog>
}

export default CreateFormBtn