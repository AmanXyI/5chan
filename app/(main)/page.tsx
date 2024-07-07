import ThreadCard from "@/components/thread/thread-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const threadsData = await prisma.thread.findMany({
    include: {
      board: {
        select: {
          title: true,
        },
      },
      profile: {
        select: {
          username: true,
          profileImageURL: true,
        },
      },
    },
  });
  return (
    <div className="flex w-full">
      <ScrollArea className="w-full pl-[15rem]">
        <div className="w-[40rem]">
          {threadsData.map((thread, index) => {
            return (
              <ThreadCard
                key={index}
                boardTitle={thread.board.title}
                threadHeading={thread.title}
                threadContent={thread.description}
                upvotes={thread.upvotes}
                downvotes={thread.downvotes}
              />
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
