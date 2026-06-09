"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { profileDD } from "@/app/(dashboard-layout)/layout/shared/header/data";
import { cn } from "@/lib/utils";
import { Mailbox, X } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
export default function ProfileSheet() {


  return (
    <Sheet>
      {/* Trigger Button */}
      <SheetTrigger className="cursor-pointer hover:bg-primary/5 flex items-center justify-center rounded-full h-10 w-10">
        <Avatar className="h-8 w-8">
          <AvatarImage src={"/images/profile/avtar.webp"} alt="profile" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            "U"
          </AvatarFallback>
        </Avatar>
      </SheetTrigger>

      {/* Drawer Panel */}
      <SheetContent
        showCloseButton={false}
        side="right"
        className="border-s-0 w-full sm:max-w-80 max-w-60"
      >
        <SheetClose className="absolute top-5 end-5 p-2 hover:bg-primary/5 hover:text-primary rounded-full">
          <X width={20} height={20} />
        </SheetClose>
        {/* Top Profile Section */}
        <div className="p-6 py-6">
          <div className="flex flex-col gap-4 justify-center items-center pt-10">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={"/images/profile/avtar.webp"}
                alt="Profile"
                width={30}
                height={30}
              />
              <AvatarFallback className="bg-primary text-primary-foreground">
                "U"
              </AvatarFallback>
            </Avatar>

            <div className="text-center">
              <h6 className="text-lg font-semibold">
                Cameron
              </h6>
              <div className="flex items-center gap-2 justify-center">
                <Mailbox
                  size={18} className="text-muted-foreground"
                />
                <span className="text-sm font-normal text-muted-foreground">
                  info@shadcndashboard.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu List */}
        <div className="border-t border-dashed border-border">
          <ul className="flex flex-col gap-2 p-6">
            {profileDD.map((item) => (
              <li key={item.title} className="group">
                <Link
                  target={item.external ? "_blank" : "_self"}
                  href={item.href}
                  className={cn(
                    "flex justify-between gap-3 py-2 px-3 rounded-md group-hover:bg-primary/5 text-muted-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.avatar
                      width={20}
                      height={20}
                      className="group-hover:text-primary"
                    />

                    <div className="flex gap-3 items-center">
                      <h6 className="text-sm group-hover:text-primary">
                        {item.title}
                      </h6>

                      {item.badge && (
                        <span className="h-5 w-6 text-sm flex justify-center items-center text-primary rounded-sm bg-primary/5">
                          4
                        </span>
                      )}
                    </div>
                  </div>
                  {item.isPro && <Badge variant="default">Pro</Badge>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <SheetFooter className="px-0 pb-6">
          <div className="border-t border-dashed border-border w-full">
            <div className="rounded-sm pt-6 flex flex-col justify-center items-center gap-3">
              <div>
                <img
                  src="/images/backgrounds/sidebarbuynow.svg"
                  alt="login-bg"
                />
              </div>

              <div className="text-center">
                <h5 className="text-xl font-semibold">
                  Grab ShadcnDashboard Admin
                </h5>
                <p className="text-sm text-muted-foreground">
                  Customize your dashboard
                </p>
              </div>

              <Button
                variant="secondary"
                className="text-primary"
              >
                <Link href={"/auth/auth1/login"}> Log Out</Link>
              </Button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
