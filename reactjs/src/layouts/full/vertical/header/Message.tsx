import { useState } from "react";



import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { Badge } from "src/components/ui/badge";
import { Button } from "src/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { cn } from "src/lib/utils";
import { Mail } from 'lucide-react';
import { Link } from "react-router";
import { MessagesLink } from "./data"

const Message = () => {
  const [messages, setMessages] = useState(MessagesLink);

  const unreadCount = messages.filter((item) => !item.isRead).length;

  const handleMarkAsRead = (index: number) => {
    const updatedMessages = [...messages];
    updatedMessages[index] = { ...updatedMessages[index], isRead: true };
    setMessages(updatedMessages);
  };

  return (
    <div className="relative group/menu ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="relative flex justify-center items-center  cursor-pointer hover:bg-primary/5 w-10 h-10 rounded-full">
            <Mail
              className="size-5"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-screen sm:w-[360px] py-6 px-0"
        >
          <div className="flex items-center px-6 justify-between">
            <h3 className="text-lg font-semibold">Inbox</h3>
            {unreadCount > 0 && (
              <Badge className="px-3 bg-primary ">{unreadCount} new</Badge>
            )}
          </div>
          <SimpleBar className="max-h-80 mt-3">
            <div className="flex flex-col">
              {messages.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleMarkAsRead(index)}
                  className={cn(
                    "px-6 py-3 flex justify-between items-center hover:bg-primary/5 cursor-pointer",
                    index !== messages.length - 1 && "border-b border-border"
                  )}
                >
                  <div className="flex items-center w-full gap-3">
                    <div className="relative">
                      {!item.isRead && (
                        <span
                          className={`h-2 w-2 rounded-full absolute top-0 end-0 ${item.badgeColor}`}
                        />
                      )}
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={item.avatar} alt={item.title} />
                        <AvatarFallback>NA</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between w-full rtl:flex-row-reverse rtl:text-end">
                        <h6
                          className={cn(
                            "text-sm mb-1 font-normal",
                            !item.isRead && "font-semibold"
                          )}
                        >
                          {item.title}
                        </h6>
                        <p className="text-sm font-normal text-muted-foreground">
                          {item.time}
                        </p>
                      </div>
                      <p
                        className={cn(
                          "text-sm font-normal text-muted-foreground truncate",
                          !item.isRead && "text-foreground font-medium"
                        )}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SimpleBar>
          <div className="pt-5 px-6">
            <Button className="w-full" render={<Link to="#" />}>
              See All Messages
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Message;
