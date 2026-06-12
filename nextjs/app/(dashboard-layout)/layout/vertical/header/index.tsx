"use client";

import Search from "../../shared/header/search";
import Profile from "../../shared/header/profile";
import FullLogo from "../../shared/logo/full-logo";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Notifications from "../../shared/header/notifications";
import { cn } from "@/lib/utils";
import LightDark from "../../shared/header/light-dark";
import { PanelLeft } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <header className={cn(`sticky top-0 z-2 bg-background border-b border-border`)}>
        <nav>
          <div className="mx-auto flex flex-wrap items-center justify-between p-2">
            <div className="flex gap-2 items-center">
              <div className="block lg:hidden">
                <FullLogo />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="p-2 hover:bg-primary/5 rounded-full transition cursor-pointer"
                onClick={toggleSidebar}
              >
                <PanelLeft size={21}
                />
              </Button>




              <Separator
                orientation="vertical"
                className="h-4 mr-4  ml-2 data-[orientation=vertical]:self-center max-lg:hidden"
              />


              <div className="sm:block hidden">
                <Search />
              </div>
            </div>

            <div className="flex sm:gap-1 gap-0 items-center">
              {/* Theme Toggle */}
              <LightDark />
              {/* Notifications Dropdown */}
              <Notifications className="sm:block hidden" />

              {/* Profile Dropdown */}
              <Profile />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
