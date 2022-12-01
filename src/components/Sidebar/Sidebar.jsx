import React from 'react';
import './Sidebar.css';
// import '../Sidebar/Side.module.css';

import Logo from '../../imgs/logo.png';
import { SidebarData } from '../../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button , Menu , Typography , Avatar } from 'antd';

import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilMedicalSquare,
    UilHeartMedical,
    UilFahrenheit
  } from "@iconscout/react-unicons";
  import { HomeOutlined , MoneyCollectOutlined , BulbOutlined , FundOutlined , MenuOutlined } from '@ant-design/icons'


const Sidebar = () => {

    const [selected, setSelected] = useState(0)  
    const Navigate = useNavigate();
    return (
    <div className="Sidebar">
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                AR<span>H</span>MS
            </span>
        </div>

        {/* menu */}
        <div className="menu">
        <Menu className='color'>
          <Menu.Item icon={<UilEstate />}>
             <Link to="/main">Dashboard</Link>
          </Menu.Item>
          <Menu.Item icon={<UilChart/>}>
             <Link to="/news">Analytics</Link>
          </Menu.Item>
          <Menu.Item icon={<UilUsersAlt />}>
             <Link>Customers</Link>
          </Menu.Item>
          <Menu.Item icon={<UilPackage />}>
             <Link to="">Products</Link>
          </Menu.Item>
          
          </Menu>
         
        
            <div className="menuItem">
                <UilSignOutAlt onClick={()=>{
                    Navigate("/Login");
                    localStorage.removeItem("token");
                }}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
