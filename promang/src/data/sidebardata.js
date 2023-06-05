import React from "react"
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import Analytics from "../components/Analytics";
import Dashboard from "../components/Dashboard";
import MyTasks from "../components/MyTasks";
import Projects from "../components/Projects";
import Calender from "../components/Calender";

export const SidebarData = [
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        link:'/home',
        component:<Dashboard/>
    },
    {
        title:"Mytasks",
        icon:<TaskIcon/>,
        link:'/tasks',
        component:<MyTasks/>
    },
    {
        title:"Projects",
        icon:<AssignmentIcon/>,
        link:'/projects',
        component:<Projects/>
    },
    {
        title:"Calender",
        icon:<CalendarTodayIcon/>,
        link:'/calender',
        component:<Calender/>
    },
    {
        title:"Analytics",
        icon:<AnalyticsRoundedIcon/>,
        link:'/analytics',
        component:<Analytics/>
    }
]