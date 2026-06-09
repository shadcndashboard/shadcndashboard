
'use client'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardCard } from "../../shared/dashboard-card";
import Link from 'next/link';
import { Bookmark, BriefcaseBusiness, Box, Users, File } from 'lucide-react';


const assetsData = [
  {
    id: 'Employees',
    title: 'Employees',
    href: '/apps/kanban',
    value: '96',
    icon: Users
  },

  {
    id: 'Projects',
    title: 'Projects',
    href: '/apps/calendar',
    value: '356',
    icon: File
  },
  {
    id: 'Clients',
    title: 'Clients',
    href: '/',
    value: '3,650',
    icon: BriefcaseBusiness
  },
  {
    id: 'Events',
    title: 'Events',
    href: '/',
    value: '86',
    icon: Bookmark
  },
];

type AssetCardProps = {
  title: string;
  href: string;
  value: string | number;
  icon: React.ElementType;
};

function AssetCard({ title, href, value, icon: Icon }: AssetCardProps) {
  return (
    <div className='flex flex-col justify-between p-6 bg-background'>
      <div className='border border-border rounded-md p-2 w-fit'>
        <Icon width={16} height={16} />
      </div>
      <div>
        <h6 className='text-2xl font-semibold'>{value}</h6>
        <p className='text-sm font-normal'>{title}</p>
      </div>
    </div>
  );
}

export default function TotalAssets() {
  return (
    <DashboardCard className="flex flex-col gap-0! pb-0!">
      <CardHeader className="border-b border-border">
        <CardTitle className="flex items-center gap-2">
          <Box size={16} className="text-muted-foreground" />
          Total Assets
        </CardTitle>
      </CardHeader>
      <CardContent className='h-full! px-0!'>
        <div className='h-full!'>
          <div className='grid grid-cols-2 h-full! gap-px bg-border'>
            {assetsData.map((item) => (
              <AssetCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </CardContent>
    </DashboardCard>
  );
}
