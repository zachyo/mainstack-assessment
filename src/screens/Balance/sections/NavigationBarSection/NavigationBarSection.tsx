import { useState } from "react";
import {
  User,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import { useAppData } from "../../../../context/AppDataContext";
import { formatUserFullName, getInitials } from "../../../../lib/format";
import { widgets, home, chart, chat, money, group, bell } from "../../../../assets";
// import {home} "../../../../assets/index"

const navigationItems = [
  { icon: home, label: "Home", active: false },
  { icon: chart, label: "Analytics", active: false },
  { icon: money, label: "Revenue", active: true },
  { icon: group, label: "CRM", active: false },
  { icon: widgets, label: "Apps", active: false },
];

export const NavigationBarSection = (): JSX.Element => {
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const {
    data: { user },
  } = useAppData();
  const initials = getInitials(user);
  const fullName = formatUserFullName(user);
  const email = user?.email ?? "user@example.com";

  return (
    <nav className="w-full bg-trashed-colorswhite80 sticky top-0 z-50">
      <div className="mx-3.5 mt-3.5 bg-white rounded-[100px] shadow-elevation-light-mode-100 px-6 py-3 flex items-center justify-between">
        <img
          className="w-9 h-9"
          alt="Mainstack logo"
          src="/mainstack-logo.svg"
        />

        <div className="hidden lg:flex items-center gap-5">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`h-auto gap-1 pl-3.5 pr-[18px] py-2 rounded-[100px] ${
                item.active
                  ? "bg-[#131316] text-white hover:bg-[#131316] hover:text-white"
                  : "text-[#56616b] hover:bg-[#e4e4e4] hover:text-[#56616b]"
              }`}
            >
              <img src={item.icon} alt="" />
              <span className="font-degular-subtitle-6x-small fon font-[number:var(--degular-paragraph-xl-small-font-weight)] text-[length:var(--degular-subtitle-6x-small-font-size)] tracking-[var(--degular-subtitle-6x-small-letter-spacing)] leading-[var(--degular-subtitle-6x-small-line-height)] [font-style:var(--degular-subtitle-6x-small-font-style)]">
                {item.label}
              </span>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="h-auto p-0 rounded-[100px] bg-white hover:bg-white"
          >
            <img src={bell} />
          </Button>

          <Button
            variant="ghost"
            className="h-auto w-10 p-2.5 rounded-[100px] bg-white hover:bg-white"
          >
            {/* <MessageSquareIcon className="w-5 h-5" /> */}
            <img src={chat} />
          </Button>

          <Popover open={isAvatarOpen} onOpenChange={setIsAvatarOpen}>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-2 pl-[5px] pr-3 py-1 bg-[#eff1f6] rounded-[100px] hover:bg-[#e5e7eb] transition-colors">
                <p className="w-8 h-8 rounded-full flex items-center justify-center bg-[linear-gradient(139deg,rgba(92,102,112,1)_0%,rgba(19,19,22,1)_100%)] text-white font-degular-subtitle-7x-small font-[number:var(--degular-parapgraph-xl-small-font-weight)] text-[length:var(--degular-subtitle-7x-small-font-size)] tracking-[var(--degular-subtitle-7x-small-letter-spacing)] leading-[var(--degular-subtitle-7x-small-line-height)] [font-style:var(--degular-subtitle-7x-small-font-style)]">
                  {initials}
                </p>
                <Menu className="w-6 h-6" />
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-64 p-0 mt-4">
              <div className="flex flex-col">
                <div className="px-4 py-3 border-b border-slate-200">
                  <p className="text-sm font-semibold text-slate-900">
                    {fullName}
                  </p>
                  <p className="text-xs text-slate-500">{email}</p>
                </div>
                <div className="py-2">
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>
                </div>
                <div className="border-t border-slate-200 py-2">
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut className="w-4 h-4" />
                    <span>Log out</span>
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};
