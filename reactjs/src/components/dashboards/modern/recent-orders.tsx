'use client'
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

import SimpleBar from 'simplebar-react';
import { CardContent, CardHeader, CardTitle, CardAction } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {

  SearchIcon,

} from "lucide-react";
import { DashboardCard } from 'src/components/shared/dashboard-card';
export default function RecentOrders() {
  const ProductTableData = [
    {
      id: uuidv4(),
      project: 'Modernize',
      productImg: '/images/profile/user-2.png',
      name: 'Emily Carter',
      role: 'Project Manager',
      timeline: '4–6 weeks',
      budget: '$1,499.00',
      statustext: 'On track',
      statuscolor: 'orange-600',
    },
    {
      id: uuidv4(),
      project: 'Spike Admin',
      productImg: '/images/profile/user-3.png',
      name: 'Jason Miller',
      role: 'Web Developer',
      timeline: '6–8 weeks',
      budget: '$1,499.00',
      statustext: 'Delayed',
      statuscolor: 'rose-600',
    },
    {
      id: uuidv4(),
      project: 'Material Pro',
      productImg: '/images/profile/user-7.png',
      name: 'Ryan Scott',
      role: 'UI/UX Designer',
      timeline: '3–5 weeks',
      budget: '$1,499.00',
      statustext: 'Submitted',
      statuscolor: 'chart-2',
    },
    {
      id: uuidv4(),
      project: 'Xtreme Admin',
      productImg: '/images/profile/user-6.png',
      name: 'Olivia Williams',
      role: 'Frontend Developer',
      timeline: '2–4 weeks',
      budget: '$1,499.00',
      statustext: 'Submitted',
      statuscolor: 'chart-2',
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = ProductTableData.filter((item) =>
    item.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.role.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <DashboardCard>
      <CardHeader className='px-6 py-5'>
        <CardTitle className="text-lg font-medium leading-none">Top Selling Products</CardTitle>
        <CardAction>
          <div className="flex items-center gap-1">
            <InputGroup>
              <InputGroupAddon>
                <SearchIcon height={18} width={18} />
              </InputGroupAddon>
              <InputGroupInput
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);

                }}
                required
              />
            </InputGroup>

          </div>
        </CardAction>
      </CardHeader>
      <CardContent className='p-0'>
        <SimpleBar className="max-h-[450px]">
          <div className="overflow-x-auto">
            <div className="min-w-[550px]">
              <Table>
                <TableHeader className="border-b border-border">
                  <TableRow>
                    <TableHead className="py-2 px-6 text-sm font-normal text-muted-foreground">
                      Project
                    </TableHead>
                    <TableHead className="py-2 px-4 text-sm font-normal text-muted-foreground">
                      Assigned
                    </TableHead>
                    <TableHead className="py-2 px-4 text-sm font-normal text-muted-foreground">
                      Timeline
                    </TableHead>
                    <TableHead className="py-2 px-4 text-sm font-normal text-muted-foreground">
                      Budget
                    </TableHead>
                    <TableHead className="py-2 px-4 text-sm font-normal text-muted-foreground">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="whitespace-nowrap p-3 pl-6">
                        <h4 className="text-sm font-normal">{item.project}</h4>
                      </TableCell>
                      <TableCell className="whitespace-nowrap p-3">
                        <div className="flex items-center gap-2">
                          <img
                            src={item.productImg}
                            className="rounded-full bg-black/20 dark:bg-white/20 pt-0.5"
                            alt="product-img"
                            width={32}
                            height={32}
                          />
                          <div className="flex flex-col">
                            <h6 className="text-sm font-medium">{item.name}</h6>
                            <p className="text-sm font-normal text-muted-foreground">{item.role}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className=" p-3">
                        <h4 className="text-sm font-normal">{item.timeline}</h4>
                      </TableCell>
                      <TableCell className="whitespace-nowrap  p-3">
                        <h4 className="text-sm font-normal">{item.budget}</h4>
                      </TableCell>
                      <TableCell className="p-3">
                        <Badge className={`bg-${item.statuscolor}/10  text-${item.statuscolor}  capitalize`}>
                          {item.statustext}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </SimpleBar>
      </CardContent>
    </DashboardCard>
  );
}
