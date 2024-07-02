import { PiArrowFatDown, PiArrowFatUp, PiArrowFatUpFill } from "react-icons/pi";
import { Avatar, AvatarFallback } from "../ui/avatar";

interface ThreadCardTypes {
  boardTitle: string;
  threadHeading: string;
  threadContent: string;
  // threadImageURL: string;
  upvotes: number;
  downvotes: number;

  // profileImageURL: string;
  // username: string;
}

const ThreadCard = ({
  boardTitle,
  threadHeading,
  threadContent,
  upvotes,
  downvotes,
}: ThreadCardTypes) => {
  return (
    <article className="flex w-full flex-col gap-1 border-b px-2 py-3">
      {/* Avatar and board title */}
      <div className="flex">
        <div className="flex items-center gap-2">
          {/* TODO - use images in avatar and tooltip for profile name while hovering profile pic */}
          <Avatar className="size-7">
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-xs">{boardTitle}</h1>
        </div>
      </div>

      {/* main content */}
      <h1 className="text-lg font-semibold">{threadHeading}</h1>
      <p className="text-sm">{threadContent}</p>
      {/* TODO - display image if preset */}
      {/* footer */}
      <div className="flex h-[2rem] items-center py-5">
        <div className="flex w-[6rem] justify-center gap-2 rounded-full border px-3 py-2">
          {/* <PiArrowFatUpFill /> */}
          <PiArrowFatUp className="text-[1.3rem]" />
          {upvotes - downvotes}
          <PiArrowFatDown className="text-[1.3rem]" />
        </div>
      </div>
    </article>
  );
};

export default ThreadCard;
