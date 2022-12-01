// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilMedicalSquare,
    UilHeartMedical,
    UilTemperaturePlus
  } from "@iconscout/react-unicons";

  import { Menu } from 'antd';
  import { Link } from 'react-router-dom';
  

  // export const SidebarData = [
  //   // {
  //   //   icon: UilEstate,
  //   //   heading: "Dashboard",
  //   // },
  //   // {
  //   //   icon: UilClipboardAlt,
  //   //   heading: "Orders",
  //   // },
  //   // {
  //   //   icon: UilUsersAlt,
  //   //   heading: "Customers",
  //   // },
  //   // {
  //   //   icon: UilPackage,
  //   //   heading: 'Products'
  //   // },
  //   // {
  //   //   icon: UilChart,
  //   //   heading: 'Analytics'
  //   // },
  //   <Menu>
  //         <Menu.Item icon={<UilEstate />}>
  //            <Link to="/main">Dashboard</Link>
  //         </Menu.Item>
  //         <Menu.Item icon={<UilClipboardAlt />}>
  //            <Link to="/cryptocurrencies">Orders</Link>
  //         </Menu.Item>
  //         <Menu.Item icon={<UilUsersAlt />}>
  //            <Link to="/exchanges">Customers</Link>
  //         </Menu.Item>
  //         <Menu.Item icon={<UilPackage />}>
  //            <Link to="/news">Products</Link>
  //         </Menu.Item>
  //         <Menu.Item icon={<UilChart/>}>
  //            <Link to="/news">Analytics</Link>
  //         </Menu.Item>
  //         </Menu>
  // ];
  
  export const CardsData = [
    {
      title: "BP-Systolic",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f9 10%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilMedicalSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "BP-Dystolic",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png:  UilHeartMedical,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
  
    // {
    //   title: "Temperature",
    //   color: {
    //     backGround:
    //       "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 11) -46.42%)",
    //     boxShadow: "0px 10px 20px 0px #F9D59B",
    //   },
    //   barValue: 60,
    //   value: "4,270",
    //   png: UilClipboardAlt,
    //   series: [
    //     {
    //       name: "Expenses",
    //       data: [10, 25, 15, 30, 12, 15, 20],
    //     },
    //   ],
    // },
  ];
  
    export const Card1Data = [
      {
        title: "Temperature",
        color: {
          backGround:
            "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 11) -46.42%)",
          boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        png: UilTemperaturePlus,
        series: [
          {
            name: "Expenses",
            data: [10, 25, 15, 30, 12, 15, 20],
          },
        ],
      },
      // 
    ];

    