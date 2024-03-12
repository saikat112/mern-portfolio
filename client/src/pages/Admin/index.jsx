import React from 'react'
import Header from '../../components/Header'
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminContact from './AdminContact';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';


const TabPane = Tabs.TabPane;
function Admin() {
  const { portfolioData } = useSelector((state) => state.root)
  return (
    <div>
      <Header />
      {portfolioData && <div className='mt-5 p-5'>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Intro" key="1"><AdminIntro /></TabPane>
          <TabPane tab="About" key="2"><AdminAbout /></TabPane>
          <TabPane tab="Experiences" key="3"><AdminExperiences /></TabPane>
          <TabPane tab="Projects" key="4"><AdminProjects /></TabPane>
          <TabPane tab="Contact" key="5"><AdminContact /></TabPane>

        </Tabs>
      </div>}
    </div>


  )
}


export default Admin
