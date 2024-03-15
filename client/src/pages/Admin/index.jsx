import React from 'react'
// import Header from '../../components/Header'
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';
import Experiences from './Experiences';


const TabPane = Tabs.TabPane;
function Admin() {
  const { portfolioData } = useSelector((state) => state.root)
  return (
    <div>
      <div>
        <div className='p-5 bg-primary flex justify-center header'>
          <h1 className='text-tertiary text-4xl'>ADMIN</h1>
        </div>
      </div>
      {portfolioData && <div className='mt-5 p-5'>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Intro" key="1"><AdminIntro /></TabPane>
          <TabPane tab="About" key="2"><AdminAbout /></TabPane>
          <TabPane tab="Expriences" key="3"><Experiences /></TabPane>
        </Tabs>
      </div>}
    </div>


  )
}


export default Admin
