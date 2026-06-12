





//   Message Data
interface MessageType {
  title: string;
  avatar: string;
  subtitle: string;
  color: string;
  time: string;
  badgeColor: string;
  isRead?: boolean;
}

import user1 from "@/assets/images/profile/user-1.png";
import user2 from "@/assets/images/profile/user-2.png";
import user3 from "@/assets/images/profile/user-3.png";
import user4 from "@/assets/images/profile/user-4.png";
import user5 from "@/assets/images/profile/user-5.png";

const MessagesLink: MessageType[] = [
  {
    avatar: user1,
    color: "bg-destructive",
    title: "Michell Flintoff",
    subtitle: "You: Yesterdy was great...",
    time: "just now",
    badgeColor: "bg-destructive",
    isRead: false,
  },
  {
    avatar: user2,
    color: "bg-primary",
    title: "Bianca Anderson",
    subtitle: "Nice looking dress you...",
    time: "5 mins ago",
    badgeColor: "bg-primary",
    isRead: false,
  },
  {
    avatar: user3,
    color: "bg-secondary",
    title: "Andrew Johnson",
    subtitle: "Sent a photo",
    time: "10 mins ago",
    badgeColor: "bg-chart-2",
    isRead: false,
  },
  {
    avatar: user4,
    color: "bg-chart-2",
    title: "Jolly Cummins",
    subtitle: "If I don't like something",
    time: "5 days ago",
    badgeColor: "bg-chart-4",
    isRead: true,
  },
  {
    avatar: user5,
    color: "bg-chart-1",
    title: "Josh Macklow",
    subtitle: "$230 deducted from account",
    time: "year ago",
    badgeColor: "bg-chart-2",
    isRead: true,
  },
];

//   Notification Data
import { Calendar, Settings, LucideIcon, Command, LayoutPanelLeft, Files } from 'lucide-react';

interface NotificationType {
  title: string;
  icon: LucideIcon;
  subtitle: string;
  bgcolor: string;
  color: string;
  time: string;
  isRead?: boolean;
}

const Notification: NotificationType[] = [

  {
    icon: Calendar,
    bgcolor: "bg-chart-4/10",
    color: 'text-chart-4',
    title: "Event Today",
    subtitle: "Just a reminder that you have event",
    time: "9:15 AM",
    isRead: false,
  },
  {
    icon: Settings,
    bgcolor: "bg-chart-1/10",
    color: 'text-chart-1',
    title: "Settings",
    subtitle: "You can customize this template as you want",
    time: "4:36 PM",
    isRead: false,
  },
  {
    icon: LayoutPanelLeft,
    bgcolor: "bg-chart-2/10 ",
    color: 'text-chart-2',
    title: "Launch Admin",
    subtitle: "Just see the my new admin!",
    time: "9:30 AM",
    isRead: false,
  },
  {
    icon: Command,
    bgcolor: "bg-primary/5",
    color: 'text-primary',
    title: "Launch Admin",
    subtitle: "Just see the my new admin!",
    time: "9:30 AM",
    isRead: false,
  },
  {
    icon: Calendar,
    bgcolor: "bg-chart-5/10 ",
    color: 'text-chart-5',
    title: "Event Today",
    subtitle: "Just a reminder that you have event",
    time: "9:15 AM",
    isRead: false,
  },
  {
    icon: Settings,
    bgcolor: "bg-chart-1/10",
    color: 'text-chart-1',
    title: "Settings",
    subtitle: "You can customize this template as you want",
    time: "4:36 PM",
    isRead: true,
  },
];



interface profileType {
  avatar: LucideIcon;
  title: string;
  href: string;
  badge: boolean;
}

import { Home, User, Keyboard } from 'lucide-react';

const profileDD: profileType[] = [
  {
    avatar: Home,
    title: 'Home',
    href: '/',
    badge: false
  },
  {
    avatar: User,
    title: 'Profile',
    href: '/',
    badge: false
  },
  {
    avatar: Files,
    title: 'Invoice',
    href: '/',
    badge: true
  },
  {
    avatar: Keyboard,
    title: 'Subscription',
    href: '/',
    badge: false
  },
  {
    avatar: Settings,
    title: 'Account Settings',
    href: '/',
    badge: false
  }
];

export {



  MessagesLink,
  Notification,
  profileDD,
};
