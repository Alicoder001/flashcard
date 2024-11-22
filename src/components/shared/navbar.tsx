"use client";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import SearchInput from "./search-input";
import Logo from "./logo";
import { Button } from "../ui/button";
import { MenuIcon, Moon } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleIsOpen } from "../../app/redux/slice/mainSlice";
interface NavbarProps {
  preview?: boolean;
}
export default function Navbar({ preview }: NavbarProps) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-3 py-2 shadow-md  border-b ">
      <div className="flex items-center gap-20">
        <div className="flex items-center gap-4">
          <MenuIcon
            className="mx-3 h-7 w-7 shrink-0 cursor-pointer"
            onClick={() => {
              dispatch(toggleIsOpen());
            }}
          />
          <Logo />
        </div>
        <SearchInput />
      </div>
      <div className="flex items-center gap-1">
        {" "}
        <Button size={"default"} variant={"ghost"} className="font-semibold">
          + Create
        </Button>
        <Button size={"default"} className="font-semibold">
          Login
        </Button>
      </div>
    </div>
  );
}
