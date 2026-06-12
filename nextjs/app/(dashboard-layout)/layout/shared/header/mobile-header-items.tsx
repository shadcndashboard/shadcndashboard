import Messages from "./notifications";
import Profile from "./profile";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const MobileHeaderItems = () => {
  const { theme: activeMode, setTheme: setActiveMode } = useTheme();

  const toggleMode = () => {
    setActiveMode(activeMode === "light" ? "dark" : "light");
  };

  return (
    <nav className="rounded-none bg-card dark:bg-chart-4 flex-1 px-9 ">
      {/* Toggle Icon   */}

      <div className="xl:hidden block w-full">
        <div className="flex justify-center items-center">
          {/* Theme Toggle */}
          {activeMode === "light" ? (
            <Button
              variant="ghost"
              className="relative h-10 w-10 text-muted-foreground hover:bg-primary/5 hover:text-primary dark:hover:bg-primary/5 dark:hover:text-primary rounded-full cursor-pointer"
              onClick={toggleMode}
            >
              <Moon className="size-5" />
            </Button>
          ) : (
            // Dark Mode Button
            <Button
              variant="ghost"
              className="relative h-10 w-10 text-muted-foreground hover:bg-primary/5 hover:text-primary dark:hover:bg-primary/5 dark:hover:text-primary rounded-full cursor-pointer"
              onClick={toggleMode}
            >
              <Sun
                className="size-5"
              // className='group-hover:text-primary'
              />
            </Button>
          )}

          {/* Notification Dropdown */}

          {/* Messages Dropdown */}
          <Messages />

          {/* Profile Dropdown */}
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default MobileHeaderItems;
