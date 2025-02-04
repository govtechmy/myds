"use client";

import { Link } from "@govtechmy/myds-react/link";
import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { usePathname, useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import Storybook from "@/icons/storybook";
import Github from "@/icons/github";
import ArrowOutgoing from "@/icons/arrow-outgoing";

interface QuicklinksProps {
  links: {
    storybook?: string;
    source?: string;
  };
}

const Quicklinks: FunctionComponent<QuicklinksProps> = ({ links }) => {
  return (
    <div className="flex justify-end">
      {links.source && (
        <Button variant="unset" size="small" asChild>
          <Link href={links.source} underline="none" newTab>
            <ButtonIcon>
              <Github />
            </ButtonIcon>
            Source
            <ButtonIcon>
              <ArrowOutgoing />
            </ButtonIcon>
          </Link>
        </Button>
      )}

      {links.storybook && (
        <Button variant="unset" size="small" asChild>
          <Link href={links.storybook} underline="none" newTab>
            <ButtonIcon>
              <Storybook />
            </ButtonIcon>
            Storybook
            <ButtonIcon>
              <ArrowOutgoing />
            </ButtonIcon>
          </Link>
        </Button>
      )}
    </div>
  );
};

export { Quicklinks };
