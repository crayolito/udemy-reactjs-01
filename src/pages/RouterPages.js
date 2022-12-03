import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

import {
 BrowserRouter  as Router, Link, Route, Routes,
 
} from 'react-router-dom'
import Ingresar from './Ingresar';

function RouterPages() {

  const [collapsed, setCollapsed] = useState(false);

    const ItemsLinks = () =>{

    }

  return (
  <Router>  
    <Layout style={{height:'100vh'}}>
      <Sider hidden={false} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to='/ingresar'>Ingresar</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to='/cola'>Cola</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to='/crear'>Crear Ticket</Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
        <Routes>
            <Route path='/ingresar' component={Ingresar}/>
        </Routes>
          Content
        </Content>
      </Layout>
    </Layout>
  </Router> 
  )
}

export default RouterPages
