


import { useSidebar } from "src/components/ui/sidebar";
import { Button } from "src/components/ui/button";
import { PanelLeft } from 'lucide-react';
import { Separator } from "src/components/ui/separator";

import { cn } from "src/lib/utils";
import FullLogo from "../../shared/logo/FullLogo";
import Search from "./Search";

import Profile from "./Profile";
import LightDark from "./Light-Dark";

import Notifications from "./Notifications";


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




               {/* <Separator
                orientation="vertical"
                className="w-px h-5 mx-2 bg-border self-center max-lg:hidden"
              /> */}

 <Separator
                orientation="vertical"
                className="h-4 mr-4 w-px  ml-2   bg-border self-center max-lg:hidden"
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
