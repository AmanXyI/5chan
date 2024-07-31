"use client";
import CreateBoardModal from "@/components/modal/create-board-modal";
import CreateThreadModal from "@/components/modal/create-thread-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  // NOTE: move following code to seprate hook
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateBoardModal />
      <CreateThreadModal />
    </>
  );
};

export default ModalProvider;
