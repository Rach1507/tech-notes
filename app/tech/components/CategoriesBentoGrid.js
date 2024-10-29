import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import clsx from "clsx";

export function CategoriesBentoGrid({ dataSize }) {
  let gridItems = items.slice(0, dataSize);
  return (
    <BentoGrid className="pt-5 w-full mx-auto ">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={
            i === 3 || i === 6
              ? "md:col-span-2"
              : dataSize === 1
              ? "md:col-span-3"
              : ""
          }
        />
      ))}
      <button className={clsx("row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4 bg-transparent" , (dataSize === 1) && "md:col-span-3")}></button>
    </BentoGrid>
  );
}
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",

    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",

    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",

    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",

    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",

    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
