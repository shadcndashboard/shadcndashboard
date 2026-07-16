import { LifeBuoy, BookOpen } from 'lucide-react';
import { Link } from 'react-router';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroupContent, SidebarGroup } from "@/components/ui/sidebar"


export function NavUser() {
    const navItems = [
        {
            title: "Help Center",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
        },
    ]

    return (
        <SidebarGroup className="mt-auto p-0">
            <SidebarGroupContent>
                <SidebarMenu className=" ">
                    {navItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton size="lg" className="h-full cursor-pointer">
                                <Link to={item.url}>
                                    <div className="flex items-center gap-3 w-full">
                                        <item.icon className="shadow-none size-5 shrink-0" />
                                        <div className="flex flex-col flex-1 text-left text-sm leading-tight hide-menu whitespace-nowrap">
                                            <span className="truncate font-medium">{item.title}</span>
                                        </div>
                                    </div>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
