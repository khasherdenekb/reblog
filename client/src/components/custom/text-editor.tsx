"use client";
import React, { useState } from "react";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { blogLabels } from "@/lib/constants";

const TextEditor = () => {
  const { resolvedTheme } = useTheme();
  const [text, setText] = useState("# Hello Editor");

  return (
    <div className="">
      <div className="grid grid-cols-3 py-5 gap-5">
        <div>
          <Label>Гарчиг</Label>
          <Input placeholder="Гарчиг..." />
        </div>
        <div>
          <Label>Шошго</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Шошго" />
            </SelectTrigger>
            <SelectContent>
              {blogLabels.map((label) => {
                return (
                  <SelectItem key={label} value={label}>
                    {label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Зураг</Label>
          <Input placeholder="Зураг..." />
        </div>
      </div>
      <MdEditor
        modelValue={text}
        onChange={setText}
        language="en-US"
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
      <div className="py-5 flex justify-end">
        <Button className="w-[200px] bg-green-500 text-muted">Publish</Button>
      </div>
    </div>
  );
};

export default TextEditor;
