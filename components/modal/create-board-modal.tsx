"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useModal } from "@/hooks/use-modal-store";

const CreateBoardModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "createBoard";
  const onModalClose = () => {
    // setIsModalOpen(false);
    // NOTE: Reset form on close
    onClose();
  };
  // TODO: complete this form after making changes in db
  return (
    <Dialog open={isModalOpen} onOpenChange={onModalClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Board</DialogTitle>
        </DialogHeader>
        <div className="">main content</div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBoardModal;
