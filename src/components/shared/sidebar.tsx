"use client";
import React from "react";
import { Button } from "../ui/button";
import { Bell, Folder, GalleryHorizontalEnd, Home } from "lucide-react";
import { Separator } from "../ui/separator";
import { useSelector } from "react-redux";
import { RootState } from "../../app/redux/store";
import { cn } from "../../lib/utils";

export default function Sidebar() {
  const { isSidebarOpen } = useSelector((state: RootState) => state.m);
  return (
    <div
      className={cn(
        "min-h-screen duration-300 transition-all pt-4 px-3 flex flex-col gap-3",
        isSidebarOpen ? "w-52" : "w-20"
      )}
    >
      <div className="flex flex-col gap-1 duration-300">
        <Button
          className="w-full text-left justify-start gap-3 transition-all duration-300 hover:scale-105"
          variant={"ghost"}
        >
          <Home className="!w-5 !h-5" />{" "}
          <span
            className={cn(
              "font-bold transition-all duration-300",
              !isSidebarOpen && "opacity-0 scale-95 pointer-events-none"
            )}
          >
            Home
          </span>
        </Button>
        <Button
          className="w-full text-left justify-start gap-3 transition-all duration-300 hover:scale-105"
          variant={"ghost"}
        >
          <Folder className="!w-5 !h-5" />{" "}
          <span
            className={cn(
              "font-bold transition-all duration-300 ",
              !isSidebarOpen && "opacity-0 scale-95 pointer-events-none"
            )}
          >
            Your Library
          </span>
        </Button>
        <Button
          className="w-full text-left justify-start gap-3 transition-all duration-300 hover:scale-105"
          variant={"ghost"}
        >
          <Bell className="!w-5 !h-5" />{" "}
          <span
            className={cn(
              "font-bold transition-all duration-300",
              !isSidebarOpen && "opacity-0 scale-95 pointer-events-none"
            )}
          >
            Notifications
          </span>
        </Button>
      </div>
      <Separator className="" />
      <div className="flex flex-col gap-1">
        <p
          className={cn(
            "font-bold text-sm mb-2 shrink-0 h-5 min-w-[100px] transition-all duration-300",
            !isSidebarOpen && "opacity-0 scale-95 h-0"
          )}
        >
          Start Here
        </p>
        <Button
          className="w-full text-left justify-start gap-3 transition-all duration-300 hover:scale-105"
          variant={"ghost"}
        >
          <GalleryHorizontalEnd className="!w-5 !h-5" />{" "}
          <span
            className={cn(
              "font-bold transition-all duration-300",
              !isSidebarOpen && "opacity-0 scale-95 pointer-events-none"
            )}
          >
            Flashcards
          </span>
        </Button>
        <Button
          className="w-full text-left justify-start gap-3 transition-all duration-300 hover:scale-105"
          variant={"ghost"}
        >
          <Folder className="!w-5 !h-5" />{" "}
          <span
            className={cn(
              "font-bold transition-all duration-300",
              !isSidebarOpen && "opacity-0 scale-95 pointer-events-none"
            )}
          >
            Your Library
          </span>
        </Button>
        <Button
          className="w-full text-left justify-start gap-3 transition-all duration-300 hover:scale-105"
          variant={"ghost"}
        >
          <Bell className="!w-5 !h-5" />{" "}
          <span
            className={cn(
              "font-bold transition-all duration-300",
              !isSidebarOpen && "opacity-0 scale-95 pointer-events-none"
            )}
          >
            Notifications
          </span>
        </Button>
      </div>
    </div>
  );
}
