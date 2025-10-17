import {
  BarChart3Icon,
  BellIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Grid3x3Icon,
  HomeIcon,
  MessageSquareIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { icon: HomeIcon, label: "Home", active: false },
  { icon: BarChart3Icon, label: "Analytics", active: false },
  { icon: CreditCardIcon, label: "Revenue", active: true },
  { icon: UsersIcon, label: "CRM", active: false },
  { icon: Grid3x3Icon, label: "Apps", active: false },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <nav className="w-full bg-trashed-colorswhite80">
      <div className="mx-3.5 mt-3.5 bg-white rounded-[100px] border-2 border-solid shadow-elevation-light-mode-100 px-6 py-3 flex items-center justify-between">
        <img
          className="w-9 h-9"
          alt="Mainstack logo"
          src="/mainstack-logo.svg"
        />

        <div className="flex items-center gap-5">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`h-auto gap-1 px-3.5 py-2 rounded-[100px] ${
                item.active
                  ? "bg-[#131316] text-white hover:bg-[#131316] hover:text-white"
                  : "text-[#56616b] hover:bg-transparent hover:text-[#56616b]"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-degular-subtitle-6x-small font-[number:var(--degular-subtitle-6x-small-font-weight)] text-[length:var(--degular-subtitle-6x-small-font-size)] tracking-[var(--degular-subtitle-6x-small-letter-spacing)] leading-[var(--degular-subtitle-6x-small-line-height)] [font-style:var(--degular-subtitle-6x-small-font-style)]">
                {item.label}
              </span>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="h-auto w-10 p-2.5 rounded-[100px] bg-white hover:bg-white"
          >
            <BellIcon className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            className="h-auto w-10 p-2.5 rounded-[100px] bg-white hover:bg-white"
          >
            <MessageSquareIcon className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-2 pl-[5px] pr-3 py-1 bg-[#eff1f6] rounded-[100px]">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/avatars.svg" alt="User avatar" />
              <AvatarFallback className="bg-[linear-gradient(139deg,rgba(92,102,112,1)_0%,rgba(19,19,22,1)_100%)] text-white font-degular-subtitle-7x-small font-[number:var(--degular-subtitle-7x-small-font-weight)] text-[length:var(--degular-subtitle-7x-small-font-size)] tracking-[var(--degular-subtitle-7x-small-letter-spacing)] leading-[var(--degular-subtitle-7x-small-line-height)] [font-style:var(--degular-subtitle-7x-small-font-style)]">
                OJ
              </AvatarFallback>
            </Avatar>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};
