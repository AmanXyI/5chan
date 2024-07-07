import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";
import { prisma } from "@/lib/prisma";
import SectionCollapse from "./sidebar-section-collapse";

const Sidebar = async () => {
  const boardsData = await prisma.board.findMany({
    select: {
      id: true,
      title: true,
      profileUrl: true,
    },
  });

  return (
    <section className="flex h-full w-[18rem] border-r pl-3">
      <ScrollArea className="flex h-full w-full pr-3">
        <div className="flex py-3">
          <Button size="fill">Home</Button>
        </div>
        <SectionCollapse heading="Boards" data={boardsData} />
      </ScrollArea>
    </section>
  );
};

export default Sidebar;
