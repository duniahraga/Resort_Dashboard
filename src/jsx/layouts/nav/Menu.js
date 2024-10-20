import { SVGICON } from "../../constant/theme";

export const MenuList = [
    ,{   
        title:'Dashboard',
        iconStyle:  SVGICON.Home,
        to: '/dashboard',
    },
    {   
        title:'The Resort',
        iconStyle: SVGICON.Plugins,
        to: 'Resort',
    },
    {   
        title:'Chalets',
        iconStyle: SVGICON.TaskIcon,
        to: 'Chalets',
    },
    {
        title: 'Booking',
        classsChange: 'mm-collapse',
        // update:"New",
        iconStyle: SVGICON.Apps,
        content: [
            {
                title: 'Booking',
                iconStyle: SVGICON.TaskIcon,
                to: 'Booking',
            },
   
            {
                title: 'Calendar',
                to: 'app-calender'
            },]
    },
    {
        title: 'Main Settings',
        classsChange: 'mm-collapse',
        // update:"New",
        iconStyle: SVGICON.Apps,
        content: [
            {
                title: 'Dashboard Settings',
                iconStyle: SVGICON.TaskIcon,
                to: 'Settings',
            },
   
            {
                title: 'Other Services Settings',
                to: 'OtherServices'
            },
            {
                title: 'Meals Settings',
                to: 'Meals'
            },{
                title: 'Guests Settings',
                to: 'Guests'
            },{
                title: 'Resort Settings',
                to: 'SettingRseort'
            },
        ]
    },
    {
        title: 'Financial reports',
        classsChange: 'mm-collapse',
        // update:"New",
        iconStyle: SVGICON.Apps,
        content: [
            {
                title: 'Moniter Traffic',
                iconStyle: SVGICON.TaskIcon,
                to: 'MoniterTraffic',
            },
   
            {
                title: 'Invoices',
                to: 'AllInvoices'
            },
            {
                title: 'Financial Report of Booking',
                to: 'FinancialReportofReservations'
            },{
                title: 'statistics',
                to: 'Statistics'
            },{
                title: 'Resort Account at Tourista',
                to: 'ResortAccountatTourista'
            },
        ]
    },{   
        title:'Users',
        iconStyle: SVGICON.TaskIcon,
        to: 'Users',
    },
    
    
    
    
    
]