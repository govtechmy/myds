import { ChevronLeftIcon, ChevronRightIcon } from '@govtechmy/myds-react/icon';
import { clx } from '@govtechmy/myds-react/utils';
import { useRef } from 'react';

interface HorizontalCardProps {
  title?: string;
  children?: React.ReactNode;
}

export default function HorizontalCard({ title, children }: HorizontalCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    // Scrolling Container
    <div className={clx('')}>
      <div
        ref={scrollRef}
        className=" flex gap-2 w-full overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        {children}
      </div>
      
      {/* Title & Arrows */}
      <div className="justify-between flex">
        <h2 className="tracking-[2px] text-gray-130 text-xs font-medium items-center flex">{title}</h2>
        <div className="flex justify-end gap-3 pt-6">
          <div className="border border-[#E4E4E7] rounded-full p-2 bg-pink-500">
            <ChevronLeftIcon className="size-5 " onClick={() => scroll(-340)} />
          </div>
          <div className="border border-[#E4E4E7] rounded-full p-2">
            <ChevronRightIcon className="size-5 " onClick={() => scroll(340)} />
          </div>
        </div>
      </div>
    </div>
  );
}