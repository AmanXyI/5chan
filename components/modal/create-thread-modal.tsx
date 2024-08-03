"use client";
import { useModal } from "@/hooks/use-modal-store";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const CreateThreadModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "createThread";
  const onModalClose = () => {
    // NOTE: reset form on close
    onClose();
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={onModalClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Thread</DialogTitle>
        </DialogHeader>
        <div className="">main</div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateThreadModal;
