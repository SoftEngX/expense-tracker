"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "emoji-picker-element";

function CreateBudget() {
  const [emojiIcon, setEmojiIcon] = useState("😄");
  const [openEmijiPicker, setOpenEmojiPicer] = useState(false);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md">
            <h2 className="text-3xl">+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-slate-100">
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div>
                <Button variant="outline">{emojiIcon}</Button>
                <div>
                  <emoji-picker class="light"></emoji-picker>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget;
