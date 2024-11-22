import React from "react";
import { Command, CommandInput, CommandItem } from "../ui/command";

export default function SearchInput() {
  return (
    <Command className="max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-lg border shrink-0 p-0">
      <CommandInput
        placeholder="Search"
        className="border-none p-0 h-8 md:h-9"
      />
    </Command>
  );
}
