'use client'

import { SidebarMenuButton, SidebarProvider } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>

      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <Image src={'/images/logos/logoicon.svg'} alt="logo" width={40} height={40} />
      </SidebarMenuButton>

    </Link>
  )
}

export default Logo
