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

function CreateFormBtn() {
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
    </DialogContent>
  </Dialog>
}

export default CreateFormBtn