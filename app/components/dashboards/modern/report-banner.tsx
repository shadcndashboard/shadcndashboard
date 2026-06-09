
"use client"
import { useEffect, useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import { DashboardCard } from '../../shared/dashboard-card';


export default function ReportBanner() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good Afternoon');
    } else if (hour >= 17 && hour < 21) {
      setGreeting('Good Evening');
    } else {
      setGreeting('Good Night');
    }
  }, []);

  const getGreetingIcon = () => {
    if (greeting === 'Good Morning' || greeting === 'Good Afternoon') {
      return <Sun width="25" height="25" />;
    } else {
      return <Moon width="25" height="25" />;
    }
  };

  return (
    <DashboardCard className="relative overflow-hidden justify-center py-6">
      <CardContent className="px-5">
        <div className="grid grid-cols-12 h-full">
          <div className="lg:col-span-7 col-span-12 ">
            <div className="flex flex-col gap-6 justify-center h-full">
              <div className='flex flex-col gap-1'>
                <div className="flex item-start gap-2">
                  <h2 className="text-xl text-foreground font-medium">{greeting}, Katrina</h2>
                  <span className="flex items-center">{getGreetingIcon()}</span>
                </div>
                <p className="text-sm font-normal text-muted-foreground max-w-72">
                  Stay informed with today’s analytics. Get a quick snapshot of key statistics.
                </p>
              </div>
              <Button size={"lg"} className='w-fit'>
                View Full Report
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
        <img
          src="/images/backgrounds/analytic-user.svg"
          alt="chasing_grades_bg"
          className="absolute bottom-0 end-8 lg:block hidden dark:hidden"
        />
        <img
          src="/images/backgrounds/analytic-user-dark.svg"
          alt="chasing_grades_bg"
          className="absolute bottom-0 end-8 lg:hidden hidden dark:block"
        />
      </CardContent>
    </DashboardCard>
  );
}
