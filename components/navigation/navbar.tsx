"use client";
import { LuPlus } from "react-icons/lu";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";

const Navbar = () => {
  const { onOpen } = useModal();
  return (
    <nav className="mx-3 flex h-[5rem] items-center justify-between border-b px-2 py-3">
      navbar
      <div className="flex">
        <Button className="flex gap-2" onClick={() => onOpen("createThread")}>
          <LuPlus size={25} />
          Create
        </Button>

        <Button>Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
