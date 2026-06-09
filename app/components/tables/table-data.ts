export type EmployeeRow = {
  avatar: string
  name: string
  position: string
  salary: string
  department: string
  status: string
}

const EmployeeData: EmployeeRow[] = [
  { avatar: '/images/profile/user-3.png', name: 'Sunil Joshi',   department: 'Design',      position: 'Manager',  status: 'Active',   salary: '$3,900' },
  { avatar: '/images/profile/user-5.png', name: 'John Deo',      department: 'Engineering', position: 'Senior',   status: 'Active',   salary: '$5,200' },
  { avatar: '/images/profile/user-8.png', name: 'Nirav Joshi',   department: 'Engineering', position: 'Manager',  status: 'Inactive', salary: '$6,800' },
  { avatar: '/images/profile/user-1.png', name: 'Yuvraj Sheth',  department: 'Management',  position: 'Lead',     status: 'Active',   salary: '$7,400' },
  { avatar: '/images/profile/user-7.png', name: 'Micheal Doe',   department: 'Marketing',   position: 'Junior',   status: 'Active',   salary: '$2,900' },
  { avatar: '/images/profile/user-2.png', name: 'Amanda Clark',  department: 'Design',      position: 'Senior',   status: 'Active',   salary: '$4,600' },
  { avatar: '/images/profile/user-4.png', name: 'Brian Turner',  department: 'Engineering', position: 'Lead',     status: 'Inactive', salary: '$6,100' },
  { avatar: '/images/profile/user-6.png', name: 'Sara Williams', department: 'HR',          position: 'Manager',  status: 'Active',   salary: '$4,200' },
  { avatar: '/images/profile/user-3.png', name: 'James Brown',   department: 'Engineering', position: 'Senior',   status: 'Active',   salary: '$5,900' },
  { avatar: '/images/profile/user-5.png', name: 'Emily Davis',   department: 'Management',  position: 'Lead',     status: 'Active',   salary: '$7,800' },
  { avatar: '/images/profile/user-8.png', name: 'Lucas Martin',  department: 'Engineering', position: 'Junior',   status: 'Inactive', salary: '$3,100' },
  { avatar: '/images/profile/user-1.png', name: 'Priya Sharma',  department: 'Analytics',   position: 'Senior',   status: 'Active',   salary: '$5,500' },
]

const PerformersData = [
    {
        key: "performerData1",
        profileImg: "/images/profile/user-3.png",
        username: "Sunil Joshi",
        designation: "Web Designer",
        project: "Elite Admin",
        priority: "Low",
        color: "primary",
        bgcolor: "bg-primary text-white",
        budget: "3.9k",
    },
    {
        key: "performerData2",
        profileImg: "/images/profile/user-5.png",
        username: "John Deo",
        designation: "Web Developer",
        project: "Flexy Admin",
        priority: "Medium",
        color: "warning",
        bgcolor: "bg-warning text-white",
        budget: "24.5k",
    },
    {
        key: "performerData3",
        profileImg: "/images/profile/user-8.png",
        username: "Nirav Joshi",
        designation: "Web Manager",
        project: "Material Pro",
        priority: "High",
        color: "warning",
        budget: "12.8k",
    },
    {
        key: "performerData4",
        profileImg: "/images/profile/user-1.png",
        username: "Yuvraj Sheth",
        designation: "Project Manager",
        project: "Xtreme Admin",
        priority: "Low",
        color: "success",
        bgcolor: "bg-success text-white",
        budget: "4.8k",
    },
    {
        key: "performerData5",
        profileImg: "/images/profile/user-7.png",
        username: "Micheal Doe",
        designation: "Content Writer",
        project: "Helping Hands WP Theme",
        priority: "High",
        color: "error",
        bgcolor: "bg-error text-white",
        budget: "9.3k",
    },
];
export { PerformersData, EmployeeData }