import './App.css';
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Sidebar } from './Components/Sidebar/Sidebar.jsx';
import { Tablee } from './Components/Table/Table.jsx';
import { CustomTabs } from './Components/Tabs/Tabs.jsx';
import React, { useState } from 'react';
// import { Cards } from './Components/Cards/Cards.jsx';
// import {Googlemap} from './Components/googlemap/googlemap.jsx';
import { BasicSpeedDial } from './Components/basicSpeedDial/basicSpeedDial.jsx';
import { DistanceReport } from './Components/VariousTables/Reports/DistanceReport/DistanceReport.jsx';
import { Vehicles } from './Components/VariousTables/Manage/Vehicles/Vehicles.jsx';
import { Geofence } from './Components/VariousTables/Manage/Geofence/Geofence.jsx';
import { DriverAssignmentReport } from './Components/VariousTables/Reports/DriverAssignmentReport/DriverAssignmentReport.jsx';
import { AnalyticsDashboard } from './Components/VariousTables/Home/Analytics.js';

function App() {
  const [state, setState] = useState(0);
  const [sideBarItems, setSideBarItems] = useState([]);
  const [sideBarBool, setSideBarBool] = useState(false);
  const [tabs, setTabs] = useState(["Dashboard"]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [component, setComponent] = useState('');
  
  

  console.log(tabs[selectedTab]);

  const handleClickSideBar = (data) => {
    setState(data);
  };

  const handleClickNav = (data) => {
    setSideBarItems(data);
  };

  const handleSidebarItemClick = (item) => {
    if(item==='Distance Report'){
      setComponent('DistanceReport')
    }
    else if(item==='Dashboard'){
      setComponent('Dashboard')
    }
    else if(item==='Vehicles'){
      setComponent('Vehicles')
    }
    else if(item==='Geofence'){
      setComponent('Geofence')
    }
    else if(item==='Driver Assignment Report'){
      setComponent('DriverAssignmentReport')
    }
    else if(item ==='Analytics Dashboard'){
      setComponent('AnalyticsDashboard')
    }


    const tabIndex = tabs.indexOf(item);
    if (tabIndex === -1) {
      const newTabs = [...tabs, item];
      setTabs(newTabs);
      setSelectedTab(newTabs.length - 1);
      console.log(tabs);
    } else {
      setSelectedTab(tabIndex);
    }
  };

  const handleRemoveTab =(tab)=>{
    setTabs(tabs.filter((item)=>item!== tab))
  }

 
  
  return (
    <>
      <div style={{ marginLeft: state }}>
        
        <Navbar propFunc={handleClickNav} propBool={setSideBarBool} />
        
        <div style={{ marginTop: '64px' }}>
          <CustomTabs tabs={tabs} selectedTab={selectedTab} handleRemoveTab={handleRemoveTab}/><br/>
         
          
          <Sidebar 
            propFunc={handleClickSideBar} 
            propArr={sideBarItems} 
            propBoolFunc={setSideBarBool} 
            propBoolIn={sideBarBool} 
            onItemClick={handleSidebarItemClick} 
          />
        </div>
        

        {component === 'Dashboard' && <Tablee/>}
        {component === 'DistanceReport' && <DistanceReport/> }
        {component === 'Vehicles' && <Vehicles/> }
        {component === 'Geofence' && <Geofence/> }
        {component === 'DriverAssignmentReport' && <DriverAssignmentReport/> }
        {component === 'AnalyticsDashboard' && <AnalyticsDashboard/> }
        <BasicSpeedDial />
      
      </div>
    </>
  );
}

export default App;
