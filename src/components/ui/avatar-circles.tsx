import React from "react";
import { cn } from "@/lib/utils";

interface Avatar {
  imageUrl: string;
  profileUrl?: string;
}

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4", className)}>
      {avatarUrls.map((avatar, index) => (
        <a
          key={index}
          href={avatar.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block"
        >
          <img
            className="h-10 w-10 rounded-full border-2 border-white ring-2 ring-white/20 transition-transform hover:scale-110 hover:z-30"
            src={avatar.imageUrl}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      {numPeople && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black/80 text-center text-xs font-medium text-white ring-2 ring-white/20">
          +{numPeople}
        </div>
      )}
    </div>
  );
};
