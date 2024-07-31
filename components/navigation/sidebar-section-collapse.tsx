"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { LuPlus } from "react-icons/lu";
import { useModal } from "@/hooks/use-modal-store";

interface SectionCollapseProps {
  heading: string;
  data: {
    id: string;
    title: string;
    profileUrl: string | null;
  }[];
}

const SectionCollapse = ({
  heading,
  data: boardsData,
}: SectionCollapseProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { onOpen } = useModal();

  return (
    <div className="border-t py-3">
      <Button
        size="fill"
        className="flex justify-between"
        onClick={() => {
          console.log("click");

          setIsCollapsed(!isCollapsed);
        }}
      >
        {heading}
        <div className="">
          {isCollapsed ? (
            <BiChevronDown size={28} />
          ) : (
            <BiChevronUp size={28} />
          )}
        </div>
      </Button>
      <div
        className={cn(
          "flex flex-col gap-2 pt-2 transition duration-500",
          isCollapsed && "hidden",
        )}
      >
        <Button
          className="flex gap-2 pl-6"
          onClick={() => onOpen("createBoard")}
        >
          <LuPlus size={25} />
          Create a Board
        </Button>
        {boardsData.map((board: any, index: number) => {
          return (
            <Button size="fill" className="pl-8" key={index}>
              {board.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default SectionCollapse;
