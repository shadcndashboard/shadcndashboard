import user1 from "@/assets/images/profile/user-1.png";
import user2 from "@/assets/images/profile/user-2.png";
import user3 from "@/assets/images/profile/user-3.png";
import user4 from "@/assets/images/profile/user-4.png";
import user5 from "@/assets/images/profile/user-5.png";
import user6 from "@/assets/images/profile/user-6.png";
import user7 from "@/assets/images/profile/user-7.png";
import user8 from "@/assets/images/profile/user-8.png";

export type EmployeeRow = {
  avatar: string
  name: string
  position: string
  salary: string
  department: string
  status: string
  statuscolor: string
}

const EmployeeData: EmployeeRow[] = [
  { avatar: user3, name: 'Sunil Joshi',   department: 'Design',      position: 'Manager',  status: 'Active',   statuscolor: 'chart-2',      salary: '$3,900' },
  { avatar: user5, name: 'John Deo',      department: 'Engineering', position: 'Senior',   status: 'Active',   statuscolor: 'chart-1',      salary: '$5,200' },
  { avatar: user8, name: 'Nirav Joshi',   department: 'Engineering', position: 'Manager',  status: 'Inactive', statuscolor: 'destructive',  salary: '$6,800' },
  { avatar: user1, name: 'Yuvraj Sheth',  department: 'Management',  position: 'Lead',     status: 'Active',   statuscolor: 'chart-3',      salary: '$7,400' },
  { avatar: user7, name: 'Micheal Doe',   department: 'Marketing',   position: 'Junior',   status: 'Active',   statuscolor: 'chart-1',      salary: '$2,900' },
  { avatar: user2, name: 'Amanda Clark',  department: 'Design',      position: 'Senior',   status: 'Active',   statuscolor: 'chart-2',      salary: '$4,600' },
  { avatar: user4, name: 'Brian Turner',  department: 'Engineering', position: 'Lead',     status: 'Inactive', statuscolor: 'destructive',  salary: '$6,100' },
  { avatar: user6, name: 'Sara Williams', department: 'HR',          position: 'Manager',  status: 'Active',   statuscolor: 'chart-3',      salary: '$4,200' },
  { avatar: user3, name: 'James Brown',   department: 'Engineering', position: 'Senior',   status: 'Active',   statuscolor: 'chart-4',      salary: '$5,900' },
  { avatar: user5, name: 'Emily Davis',   department: 'Management',  position: 'Lead',     status: 'Active',   statuscolor: 'chart-2',      salary: '$7,800' },
  { avatar: user8, name: 'Lucas Martin',  department: 'Engineering', position: 'Junior',   status: 'Inactive', statuscolor: 'destructive',  salary: '$3,100' },
  { avatar: user1, name: 'Priya Sharma',  department: 'Analytics',   position: 'Senior',   status: 'Active',   statuscolor: 'chart-1',      salary: '$5,500' },
]

const PerformersData = [
    {
        key: "performerData1",
        profileImg: user3,
        username: "Sunil Joshi",
        designation: "Web Designer",
        project: "Elite Admin",
        priority: "Low",
        color: "primary",
        bgcolor: "bg-primary/10! text-primary!",
        budget: "3.9k",
    },
    {
        key: "performerData2",
        profileImg: user5,
        username: "John Deo",
        designation: "Web Developer",
        project: "Flexy Admin",
        priority: "Medium",
        color: "chart-4",
        bgcolor: "bg-chart-4/10! text-chart-4!",
        budget: "24.5k",
    },
    {
        key: "performerData3",
        profileImg: user8,
        username: "Nirav Joshi",
        designation: "Web Manager",
        project: "Material Pro",
        priority: "High",
        color: "chart-1",
        bgcolor: "bg-chart-1/10! text-chart-1!",
        budget: "12.8k",
    },
    {
        key: "performerData4",
        profileImg: user1,
        username: "Yuvraj Sheth",
        designation: "Project Manager",
        project: "Xtreme Admin",
        priority: "Low",
        color: "chart-2",
        bgcolor: "bg-chart-2/10! text-chart-2!",
        budget: "4.8k",
    },
    {
        key: "performerData5",
        profileImg: user7,
        username: "Micheal Doe",
        designation: "Content Writer",
        project: "Helping Hands WP Theme",
        priority: "High",
        color: "destructive",
        bgcolor: "bg-destructive/10! text-destructive!",
        budget: "9.3k",
    },
];
export { PerformersData, EmployeeData }